import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmhomeCompListsupComponent } from './dmhome-comp-listsup.component';

describe('DmhomeCompListsupComponent', () => {
  let component: DmhomeCompListsupComponent;
  let fixture: ComponentFixture<DmhomeCompListsupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmhomeCompListsupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmhomeCompListsupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
