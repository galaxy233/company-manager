import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../../company';

@Component({
  selector: 'app-company-selector-item',
  templateUrl: './company-selector-item.component.html',
  styleUrls: ['./company-selector-item.component.css']
})
export class CompanySelectorItemComponent implements OnInit {

  @Input() company: Company;
  @Input() selected: boolean;
  @Output() onSelectCompany: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
  }

  selectCompany(company: Company) {
    this.onSelectCompany.emit(company);
  }
}
