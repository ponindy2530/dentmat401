import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmhomeDashboardComponent } from './dmhome-dashboard.component';

describe('DmhomeDashboardComponent', () => {
  let component: DmhomeDashboardComponent;
  let fixture: ComponentFixture<DmhomeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmhomeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmhomeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
