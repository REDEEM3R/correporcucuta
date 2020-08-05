import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualRaceComponent } from './virtual-race.component';

describe('VirtualRaceComponent', () => {
  let component: VirtualRaceComponent;
  let fixture: ComponentFixture<VirtualRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
