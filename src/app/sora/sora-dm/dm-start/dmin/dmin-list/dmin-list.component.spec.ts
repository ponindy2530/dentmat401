import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DminListComponent } from './dmin-list.component';

describe('DminListComponent', () => {
  let component: DminListComponent;
  let fixture: ComponentFixture<DminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
