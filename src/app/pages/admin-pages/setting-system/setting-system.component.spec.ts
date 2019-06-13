import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSystemComponent } from './setting-system.component';

describe('SettingSystemComponent', () => {
  let component: SettingSystemComponent;
  let fixture: ComponentFixture<SettingSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
