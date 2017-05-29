import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmsetUserComponent } from './dmset-user.component';

describe('DmsetUserComponent', () => {
  let component: DmsetUserComponent;
  let fixture: ComponentFixture<DmsetUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmsetUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmsetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
