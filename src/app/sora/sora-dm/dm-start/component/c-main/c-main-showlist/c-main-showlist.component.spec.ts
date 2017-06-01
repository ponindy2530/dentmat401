import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMainShowlistComponent } from './c-main-showlist.component';

describe('CMainShowlistComponent', () => {
  let component: CMainShowlistComponent;
  let fixture: ComponentFixture<CMainShowlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMainShowlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMainShowlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
