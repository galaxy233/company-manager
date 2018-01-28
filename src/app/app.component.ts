import { Component, OnInit } from '@angular/core';
import { TelenotesService } from './telenotes.service';
import { Company } from './company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  companies: Company[] = [];
  selectedCompany: Company;
  constructor(private telenotesService: TelenotesService) {}
  ngOnInit(){
    this.fetchData()
  }
  public updateSelectedCompany(company: Company): void {
    this.selectedCompany = company;
  }
  public fetchData() {
    this.telenotesService.getData()
      .subscribe(data => {
        this.companies = data;
      })
  }
  public handleDeleteCompany(): void {
    this.telenotesService.getData()
      .subscribe(data => {
        this.companies = data;
        this.selectedCompany = null;
      })
  }
}
