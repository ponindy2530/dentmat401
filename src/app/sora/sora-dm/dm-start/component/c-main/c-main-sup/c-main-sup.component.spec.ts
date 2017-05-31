import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMainSupComponent } from './c-main-sup.component';

describe('CMainSupComponent', () => {
  let component: CMainSupComponent;
  let fixture: ComponentFixture<CMainSupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMainSupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMainSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
