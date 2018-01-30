import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Company } from '../../company';

@Component({
  selector: 'app-company-selector-options',
  templateUrl: './company-selector-options.component.html',
  styleUrls: ['./company-selector-options.component.css']
})

export class CompanySelectorOptionsComponent {

  @Output() onUserSearch: EventEmitter<any> = new EventEmitter<any>();
  @Output() onNewCompany: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  public userSearch(query: string): void {
    this.onUserSearch.emit(query);
  }

  public newCompany(): void {
    this.onNewCompany.emit(new Company());
  }

}
