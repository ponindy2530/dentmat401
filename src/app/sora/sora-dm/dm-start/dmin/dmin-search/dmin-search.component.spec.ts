import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DminSearchComponent } from './dmin-search.component';

describe('DminSearchComponent', () => {
  let component: DminSearchComponent;
  let fixture: ComponentFixture<DminSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DminSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DminSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
