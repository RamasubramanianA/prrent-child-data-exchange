import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GchTwoComponent } from './gch-two.component';

describe('GchTwoComponent', () => {
  let component: GchTwoComponent;
  let fixture: ComponentFixture<GchTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GchTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GchTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
