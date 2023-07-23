import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassReservationComponent } from './pass-reservation.component';

describe('PassReservationComponent', () => {
  let component: PassReservationComponent;
  let fixture: ComponentFixture<PassReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
