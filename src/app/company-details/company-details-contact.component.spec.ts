import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsContactComponent } from './company-details-contact.component';

describe('CompanyDetailsContactComponent', () => {
  let component: CompanyDetailsContactComponent;
  let fixture: ComponentFixture<CompanyDetailsContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailsContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
