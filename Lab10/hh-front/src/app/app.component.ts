import { Component } from '@angular/core';
import { Company } from './company';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hh-front';
  selectedCompany: Company | undefined;

  onSelect(company: Company): void {
    this.selectedCompany = company;
  }
  

}
