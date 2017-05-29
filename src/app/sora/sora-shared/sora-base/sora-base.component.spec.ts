import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoraBaseComponent } from './sora-base.component';

describe('SoraBaseComponent', () => {
  let component: SoraBaseComponent;
  let fixture: ComponentFixture<SoraBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoraBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoraBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
