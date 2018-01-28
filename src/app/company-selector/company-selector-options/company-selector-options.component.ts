import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-company-selector-options',
  templateUrl: './company-selector-options.component.html',
  styleUrls: ['./company-selector-options.component.css']
})
export class CompanySelectorOptionsComponent implements OnInit {

  @Output() onUserSearch: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {

  }

  public userSearch(query: string): void {
    console.log(query);
    this.onUserSearch.emit(query);
  }

}
