import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionTypeListComponent } from './tuition-type-list.component';

describe('TuitionTypeListComponent', () => {
  let component: TuitionTypeListComponent;
  let fixture: ComponentFixture<TuitionTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuitionTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuitionTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
