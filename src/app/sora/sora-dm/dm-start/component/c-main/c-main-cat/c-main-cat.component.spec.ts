import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMainCatComponent } from './c-main-cat.component';

describe('CMainCatComponent', () => {
  let component: CMainCatComponent;
  let fixture: ComponentFixture<CMainCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMainCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMainCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
