import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmmainAddComponent } from './dmmain-add.component';

describe('DmmainAddComponent', () => {
  let component: DmmainAddComponent;
  let fixture: ComponentFixture<DmmainAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmmainAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmmainAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
