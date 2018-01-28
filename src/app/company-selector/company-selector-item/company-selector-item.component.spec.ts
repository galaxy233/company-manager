import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySelectorItemComponent } from './company-selector-item.component';

describe('CompanySelectorItemComponent', () => {
  let component: CompanySelectorItemComponent;
  let fixture: ComponentFixture<CompanySelectorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySelectorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySelectorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
