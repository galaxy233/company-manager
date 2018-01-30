import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {TelenotesService} from '../telenotes.service';
import { Company } from '../company';
import { Contact } from '../contact';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnChanges, OnInit {

  companyClone: Company;
  selectedContact: Contact;

  @Input() company: Company;
  @Output() onDeleteRecord: EventEmitter<any> = new EventEmitter<any>();
  @Output() onUpdateRecord: EventEmitter<any> = new EventEmitter<any>();

  constructor(private telenotesService: TelenotesService) {}

  ngOnChanges() {
    this.companyClone = Object.assign({}, this.company)
    this.selectedContact = null;
  }

  ngOnInit() {
    this.companyClone = Object.assign({}, this.company)
  }

  public selectContact(contact: Contact) {
    this.selectedContact = Object.assign({}, contact);
  }

  public updateContact(): void {
    if (this.selectedContact.ContactId) {
      let contactIdx = this.companyClone.Contacts.findIndex(c => {
        return c.ContactId === this.selectedContact.ContactId
      })
      this.companyClone.Contacts.splice(contactIdx, 1, this.selectedContact);
    } else {
      let lastId = Math.max.apply(null, this.companyClone.Contacts.map(c => Number(c.ContactId)))
      this.selectedContact.ContactId = lastId + 1;
      this.companyClone.Contacts.push(this.selectedContact);
    }

    this.update();

  }

  public deleteContact(): void {
    let contactIdx = this.companyClone.Contacts.findIndex(c => {
      return c.ContactId === this.selectedContact.ContactId
    })
    this.companyClone.Contacts.splice(contactIdx, 1);
    this.selectedContact = null;
    this.update();
  }

  public newContact(): void {
    this.selectedContact = new Contact();
  }

  public clearSelectedContact(): void {
    this.selectedContact = null;
  }

  public cancel(): void {
    this.companyClone = Object.assign({}, this.company)
  }

  public update(): void {
    this.telenotesService.updateRecord(this.companyClone)
      .subscribe(data => {
        this.onUpdateRecord.emit();
        this.clearSelectedContact();
      })
  }

  public create(): void {
    this.companyClone.Contacts = [];
    this.telenotesService.createRecord(this.companyClone)
      .subscribe(data => {
        this.companyClone = new Company();
        this.companyClone.Contacts = [];
        this.onUpdateRecord.emit();
      })
  }

  public delete(): void {
    this.telenotesService.deleteRecord(this.companyClone)
      .subscribe(data => {
        this.onDeleteRecord.emit();
      })
  }

}
