import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmTestComponent } from './dm-test.component';

describe('DmTestComponent', () => {
  let component: DmTestComponent;
  let fixture: ComponentFixture<DmTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
