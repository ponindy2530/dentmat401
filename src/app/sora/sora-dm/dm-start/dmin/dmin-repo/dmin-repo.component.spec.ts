import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DminRepoComponent } from './dmin-repo.component';

describe('DminRepoComponent', () => {
  let component: DminRepoComponent;
  let fixture: ComponentFixture<DminRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DminRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DminRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
