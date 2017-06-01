import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VOutComponent } from './v-out.component';

describe('VOutComponent', () => {
  let component: VOutComponent;
  let fixture: ComponentFixture<VOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
