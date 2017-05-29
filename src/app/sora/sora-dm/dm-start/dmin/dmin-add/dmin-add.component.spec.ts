import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DminAddComponent } from './dmin-add.component';

describe('DminAddComponent', () => {
  let component: DminAddComponent;
  let fixture: ComponentFixture<DminAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DminAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
