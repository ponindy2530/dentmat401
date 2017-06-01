import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COutListoutComponent } from './c-out-listout.component';

describe('COutListoutComponent', () => {
  let component: COutListoutComponent;
  let fixture: ComponentFixture<COutListoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COutListoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COutListoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
