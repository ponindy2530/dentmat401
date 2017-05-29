import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmoutRepoComponent } from './dmout-repo.component';

describe('DmoutRepoComponent', () => {
  let component: DmoutRepoComponent;
  let fixture: ComponentFixture<DmoutRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmoutRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmoutRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
