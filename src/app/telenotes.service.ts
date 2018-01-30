import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { flatMap } from 'rxjs/operators';

import { Company } from './company';

import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type' : 'application/json', 'Accept' : 'application/json'})
};

@Injectable()
export class TelenotesService {
  private url = environment.baseURL + "/api/data/Victor"
  private lastId: number;

  constructor(private http: HttpClient) {}

  getData(): Observable<Company[]> {
    return Observable.create((observer) => {
      this.http.get<Company[]>(this.url).subscribe(data => {
        this.lastId = data[data.length-1].CompanyID;
        observer.next(data);
        observer.complete();
      })
    })
  }

  updateRecord(record: Company): Observable<Company[]> {
    return this.http.post<Company[]>(this.url, record, httpOptions )
  }

  createRecord(record: Company): Observable<any> {
    record.CompanyID = this.lastId + 1;
    return this.http.put<any>(this.url, record, httpOptions )
  }

  deleteRecord(record: Company): Observable<any> {
    return this.http.delete(this.url + '/' + record.CompanyID )
  }

}
