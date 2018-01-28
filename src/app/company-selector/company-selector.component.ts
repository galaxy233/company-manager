import { Component, OnInit, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { TelenotesService } from '../telenotes.service';

@Component({
  selector: 'app-company-selector',
  templateUrl: './company-selector.component.html',
  styleUrls: ['./company-selector.component.css']
})
export class CompanySelectorComponent implements OnInit {

  filteredCompanies: object[];
  @Input() companies: object[];
  @Input() selectedCompany: object;
  @Output() selectedCompanyChange = new EventEmitter<object>();

  constructor(private telenotesService: TelenotesService) {}

  ngOnChanges() {
    this.filteredCompanies = this.companies.slice();
  }

  public onSelectedCompanyChange(company:object) {
    this.selectedCompany = company;
    this.selectedCompanyChange.emit(company);
  }

  public search(query: string) {
    if (!query.trim()) {
      this.filteredCompanies = this.companies.slice();
    } else {
      this.filteredCompanies = this.companies.filter(c => {
        return c.CompanyName.toLowerCase().includes(query.toLowerCase())
      })
    }
  }

}
