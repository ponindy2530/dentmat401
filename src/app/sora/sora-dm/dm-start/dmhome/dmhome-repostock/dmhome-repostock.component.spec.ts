import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmhomeRepostockComponent } from './dmhome-repostock.component';

describe('DmhomeRepostockComponent', () => {
  let component: DmhomeRepostockComponent;
  let fixture: ComponentFixture<DmhomeRepostockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmhomeRepostockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmhomeRepostockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
