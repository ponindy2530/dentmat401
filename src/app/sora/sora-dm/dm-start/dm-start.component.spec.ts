import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmStartComponent } from './dm-start.component';

describe('DmStartComponent', () => {
  let component: DmStartComponent;
  let fixture: ComponentFixture<DmStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
