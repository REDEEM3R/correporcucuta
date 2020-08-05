import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Run21kComponent } from './run21k.component';

describe('Run21kComponent', () => {
  let component: Run21kComponent;
  let fixture: ComponentFixture<Run21kComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Run21kComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Run21kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
