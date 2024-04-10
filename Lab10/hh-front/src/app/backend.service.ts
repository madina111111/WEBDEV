import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './company';
import { Vacancy } from './vacancy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private API_URL = 'http://127.0.0.1:8000'; 

  constructor(private http: HttpClient) {}

  getCompanies():Observable<Company[]> {
    return this.http.get<Company[]>(`${this.API_URL}/companies/`);
  }

  getVacancies(companyId: number): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.API_URL}/companies/${companyId}/vacancies/`);
  }
}
