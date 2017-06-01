import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMainListnewComponent } from './c-main-listnew.component';

describe('CMainListnewComponent', () => {
  let component: CMainListnewComponent;
  let fixture: ComponentFixture<CMainListnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMainListnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMainListnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
