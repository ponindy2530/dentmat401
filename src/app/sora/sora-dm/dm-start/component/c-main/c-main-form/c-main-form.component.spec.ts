import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMainFormComponent } from './c-main-form.component';

describe('CMainFormComponent', () => {
  let component: CMainFormComponent;
  let fixture: ComponentFixture<CMainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
