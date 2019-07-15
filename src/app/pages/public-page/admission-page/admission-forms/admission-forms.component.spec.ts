import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionFormsComponent } from './admission-forms.component';

describe('AdmissionFormsComponent', () => {
  let component: AdmissionFormsComponent;
  let fixture: ComponentFixture<AdmissionFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
