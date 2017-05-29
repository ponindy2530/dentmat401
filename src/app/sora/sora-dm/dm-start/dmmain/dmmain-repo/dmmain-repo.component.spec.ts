import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmmainRepoComponent } from './dmmain-repo.component';

describe('DmmainRepoComponent', () => {
  let component: DmmainRepoComponent;
  let fixture: ComponentFixture<DmmainRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmmainRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmmainRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
