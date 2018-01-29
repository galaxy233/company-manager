import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Company } from './company';

import { environment } from '../environments/environment';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-type' : 'application/json', 'Accept' : 'application/json'})
// };

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type' : 'application/json', 'Accept' : 'application/json'})
};

@Injectable()
export class TelenotesService {
  private url = environment.baseURL + "/api/data/Victor"

  constructor(private http: HttpClient) {}

  getData(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url)
  }

  updateRecord(record: Company): Observable<Company[]> {
    return this.http.post<Company[]>(this.url, record, httpOptions )
  }

  deleteRecord(record: Company): Observable<any> {
    console.log(record)
    return this.http.delete(this.url + '/' + record.CompanyID)
  }

}
