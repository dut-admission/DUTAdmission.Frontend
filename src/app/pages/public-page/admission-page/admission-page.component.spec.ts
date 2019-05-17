import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionPageComponent } from './admission-page.component';

describe('AdmissionPageComponent', () => {
  let component: AdmissionPageComponent;
  let fixture: ComponentFixture<AdmissionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
