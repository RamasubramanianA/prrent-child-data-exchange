import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GchOneComponent } from './gch-one.component';

describe('GchOneComponent', () => {
  let component: GchOneComponent;
  let fixture: ComponentFixture<GchOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GchOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GchOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
