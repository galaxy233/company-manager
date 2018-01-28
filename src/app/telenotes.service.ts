import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Company } from './company';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type' : 'application/json'})
};

@Injectable()
export class TelenotesService {
  private url = "api/data"

  constructor(private http: HttpClient) {}

  getData(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url)
  }

  updateRecord(record: Company): Observable<any> {
    return this.http.post(this.url, record, httpOptions )
  }

  deleteRecord(record: Company): Observable<any> {
    return this.http.delete(this.url + '/' + record.id)
  }

}
