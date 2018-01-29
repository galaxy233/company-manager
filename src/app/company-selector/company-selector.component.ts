import { Component, OnInit, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { TelenotesService } from '../telenotes.service';
import { Company } from '../company';

@Component({
  selector: 'app-company-selector',
  templateUrl: './company-selector.component.html',
  styleUrls: ['./company-selector.component.css']
})
export class CompanySelectorComponent implements OnChanges {
  query: string = '';
  filteredCompanies: Company[];
  @Input() companies: Company[];
  @Input() selectedCompany: Company;
  @Output() selectedCompanyChange = new EventEmitter<Company>();

  constructor(private telenotesService: TelenotesService) {}

  ngOnChanges() {
    this.search(this.query);
  }

  public onSelectedCompanyChange(company:Company) {
    this.selectedCompany = company;
    this.selectedCompanyChange.emit(company);
  }

  public search(query: string) {
    this.query = query;
    if (!query.trim()) {
      this.filteredCompanies = this.companies.slice();
    } else {
      this.filteredCompanies = this.companies.filter(c => {
        return c.CompanyName.toLowerCase().includes(query.toLowerCase())
      })
    }
  }

}
