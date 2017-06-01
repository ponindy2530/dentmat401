import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMainListComponent } from './c-main-list.component';

describe('CMainListComponent', () => {
  let component: CMainListComponent;
  let fixture: ComponentFixture<CMainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
