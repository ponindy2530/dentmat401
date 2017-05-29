import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmmainSearchComponent } from './dmmain-search.component';

describe('DmmainSearchComponent', () => {
  let component: DmmainSearchComponent;
  let fixture: ComponentFixture<DmmainSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmmainSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmmainSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
