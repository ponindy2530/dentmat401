import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COutListComponent } from './c-out-list.component';

describe('COutListComponent', () => {
  let component: COutListComponent;
  let fixture: ComponentFixture<COutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
