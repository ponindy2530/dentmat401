import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmhomeRepo10Component } from './dmhome-repo10.component';

describe('DmhomeRepo10Component', () => {
  let component: DmhomeRepo10Component;
  let fixture: ComponentFixture<DmhomeRepo10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmhomeRepo10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmhomeRepo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
