import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VInComponent } from './v-in.component';

describe('VInComponent', () => {
  let component: VInComponent;
  let fixture: ComponentFixture<VInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
