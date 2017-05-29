import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmChartsComponent } from './dm-charts.component';

describe('DmChartsComponent', () => {
  let component: DmChartsComponent;
  let fixture: ComponentFixture<DmChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
