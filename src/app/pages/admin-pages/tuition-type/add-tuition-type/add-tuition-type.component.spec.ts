import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTuitionTypeComponent } from './add-tuition-type.component';

describe('AddTuitionTypeComponent', () => {
  let component: AddTuitionTypeComponent;
  let fixture: ComponentFixture<AddTuitionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTuitionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTuitionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
