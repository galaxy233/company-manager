import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-company-selector-item',
  templateUrl: './company-selector-item.component.html',
  styleUrls: ['./company-selector-item.component.css']
})
export class CompanySelectorItemComponent implements OnInit {

  @Input() company: object;
  @Output() onSelectCompany: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
  }

  selectCompany(company: object) {
    this.onSelectCompany.emit(company);
  }
}
