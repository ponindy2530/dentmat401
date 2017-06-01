import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COutFormComponent } from './c-out-form.component';

describe('COutFormComponent', () => {
  let component: COutFormComponent;
  let fixture: ComponentFixture<COutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
