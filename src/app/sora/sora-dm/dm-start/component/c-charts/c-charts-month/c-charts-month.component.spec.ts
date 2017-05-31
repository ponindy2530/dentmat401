import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CChartsMonthComponent } from './c-charts-month.component';

describe('CChartsMonthComponent', () => {
  let component: CChartsMonthComponent;
  let fixture: ComponentFixture<CChartsMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CChartsMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CChartsMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
