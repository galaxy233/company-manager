import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySelectorOptionsComponent } from './company-selector-options.component';

describe('CompanySelectorOptionsComponent', () => {
  let component: CompanySelectorOptionsComponent;
  let fixture: ComponentFixture<CompanySelectorOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySelectorOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySelectorOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
