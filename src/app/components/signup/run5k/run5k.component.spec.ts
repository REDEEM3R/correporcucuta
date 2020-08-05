import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Run5kComponent } from './run5k.component';

describe('Run5kComponent', () => {
  let component: Run5kComponent;
  let fixture: ComponentFixture<Run5kComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Run5kComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Run5kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
