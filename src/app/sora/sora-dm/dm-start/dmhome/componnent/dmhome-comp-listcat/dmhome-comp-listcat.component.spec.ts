import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmhomeCompListcatComponent } from './dmhome-comp-listcat.component';

describe('DmhomeCompListcatComponent', () => {
  let component: DmhomeCompListcatComponent;
  let fixture: ComponentFixture<DmhomeCompListcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmhomeCompListcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmhomeCompListcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
