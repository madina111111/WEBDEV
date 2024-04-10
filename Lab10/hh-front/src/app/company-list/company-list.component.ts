import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company';
import { BackendService } from '../backend.service';
import { Vacancy } from '../vacancy';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  @Input() selectedCompanyId: number | undefined;
  vacancies: Vacancy[] = [];
  companies: Company[] = [];
  selectedCompany: Company | null = null;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getCompanies().subscribe(
      (companies) => {
        this.companies = companies;
      }
    );
  }

  selectCompany(company: Company) {
    this.selectedCompany = company;
    this.backendService.getVacancies(company.id).subscribe(
      (vacancies) =>{
        this.vacancies = vacancies;
      },
      (error) =>{
        console.error(error)
      }
    )
  }

  
  onClickAng(cur_id: number): void {
    console.log(cur_id)
    if (cur_id !== -1) {
      this.backendService.getVacancies(cur_id).subscribe(
        (vacancies) => {
          this.vacancies = vacancies;
          console.log(this.vacancies)
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}




