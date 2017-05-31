import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CChartsTop10Component } from './c-charts-top10.component';

describe('CChartsTop10Component', () => {
  let component: CChartsTop10Component;
  let fixture: ComponentFixture<CChartsTop10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CChartsTop10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CChartsTop10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
