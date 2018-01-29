import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-company-details-contact',
  templateUrl: './company-details-contact.component.html',
  styleUrls: ['./company-details-contact.component.css']
})
export class CompanyDetailsContactComponent implements OnInit {

  @Input() contact: Contact;
  @Input() selected: boolean; 

  constructor() {}

  ngOnInit() {
  }

}
