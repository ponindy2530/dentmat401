import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmhomeRepoComponent } from './dmhome-repo.component';

describe('DmhomeRepoComponent', () => {
  let component: DmhomeRepoComponent;
  let fixture: ComponentFixture<DmhomeRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmhomeRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmhomeRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
