import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionTuitionComponent } from './admission-tuition.component';

describe('AdmissionTuitionComponent', () => {
  let component: AdmissionTuitionComponent;
  let fixture: ComponentFixture<AdmissionTuitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionTuitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionTuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
