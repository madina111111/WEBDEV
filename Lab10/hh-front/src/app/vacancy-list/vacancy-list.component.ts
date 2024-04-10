import { Component, Input, OnInit } from '@angular/core';
import { Vacancy } from '../vacancy';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  @Input() selectedCompanyId: number | undefined;
  vacancies: Vacancy[] = [];

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    // if (this.selectedCompanyId !== undefined) {
    //   this.backendService.getVacancies(this.selectedCompanyId).subscribe(
    //     (vacancies) => {
    //       this.vacancies = vacancies;
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
    // }
  }

  onClickAng(): void {
    if (this.selectedCompanyId !== undefined) {
      this.backendService.getVacancies(this.selectedCompanyId).subscribe(
        (vacancies) => {
          this.vacancies = vacancies;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
