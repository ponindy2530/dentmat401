import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmmainListcatComponent } from './dmmain-listcat.component';

describe('DmmainListcatComponent', () => {
  let component: DmmainListcatComponent;
  let fixture: ComponentFixture<DmmainListcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmmainListcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmmainListcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
