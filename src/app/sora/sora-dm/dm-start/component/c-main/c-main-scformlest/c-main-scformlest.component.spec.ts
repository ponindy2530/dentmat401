import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMainScformlestComponent } from './c-main-scformlest.component';

describe('CMainScformlestComponent', () => {
  let component: CMainScformlestComponent;
  let fixture: ComponentFixture<CMainScformlestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMainScformlestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMainScformlestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
