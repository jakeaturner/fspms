import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsHeaderComponent } from './reservations-header.component';

describe('ReservationsHeaderComponent', () => {
  let component: ReservationsHeaderComponent;
  let fixture: ComponentFixture<ReservationsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
