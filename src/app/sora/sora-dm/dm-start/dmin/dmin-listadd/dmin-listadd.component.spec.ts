import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DminListaddComponent } from './dmin-listadd.component';

describe('DminListaddComponent', () => {
  let component: DminListaddComponent;
  let fixture: ComponentFixture<DminListaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DminListaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DminListaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
