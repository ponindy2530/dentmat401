import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CChartsPieComponent } from './c-charts-pie.component';

describe('CChartsPieComponent', () => {
  let component: CChartsPieComponent;
  let fixture: ComponentFixture<CChartsPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CChartsPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CChartsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
