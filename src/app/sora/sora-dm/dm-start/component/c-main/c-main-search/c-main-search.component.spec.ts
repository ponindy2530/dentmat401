import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMainSearchComponent } from './c-main-search.component';

describe('CMainSearchComponent', () => {
  let component: CMainSearchComponent;
  let fixture: ComponentFixture<CMainSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMainSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMainSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
