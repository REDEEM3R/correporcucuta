import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Run10kComponent } from './run10k.component';

describe('Run10kComponent', () => {
  let component: Run10kComponent;
  let fixture: ComponentFixture<Run10kComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Run10kComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Run10kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
