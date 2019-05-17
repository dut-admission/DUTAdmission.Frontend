import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionDocsComponent } from './admission-docs.component';

describe('AdmissionDocsComponent', () => {
  let component: AdmissionDocsComponent;
  let fixture: ComponentFixture<AdmissionDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
