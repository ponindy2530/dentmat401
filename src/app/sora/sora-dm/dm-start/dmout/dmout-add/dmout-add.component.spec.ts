import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmoutAddComponent } from './dmout-add.component';

describe('DmoutAddComponent', () => {
  let component: DmoutAddComponent;
  let fixture: ComponentFixture<DmoutAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmoutAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmoutAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
