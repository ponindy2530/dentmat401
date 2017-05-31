import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLoadingComponent } from './c-loading.component';

describe('CLoadingComponent', () => {
  let component: CLoadingComponent;
  let fixture: ComponentFixture<CLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
