import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { SpecialtyService } from '../services/specialty.service';

@Component({
  selector: 'app-dashboard-owner',
  templateUrl: './dashboard-owner.component.html',
  styleUrls: ['./dashboard-owner.component.css']
})
export class DashboardOwnerComponent implements OnInit {
  reservations: any;
  reservationId: string;
  specialties: any;
  allSpecialties: any = [];
  allReservations: any = [];
  constructor(private specialtyService: SpecialtyService, private router: Router, private reservationService: ReservationService, private myRouter: Router) { }

  ngOnInit() {
    this.specialtyService.getAllSpecialyties().subscribe(
      (data) => {
        this.specialties = data.allSpecialties;
      });
    this.reservationService.getAllReservations().subscribe(
      (data) => {
        this.reservations = data.allReservations;
      }
    )

  }
  // edit specialty
  editSpecialty(specialtyId: Number) {
    this.myRouter.navigate([`editSpecialty/${specialtyId}`])
  }
  //delete specialty
  deleteSpecialtyById(id: number) {
    alert(`owner N° ${id} is deleted`);
    this.specialtyService.deleteSpecialtyById(id).subscribe(
      (data) => {
        console.log("here after delete", data.message);
        this.allSpecialties;
      }
    )
  };
  //confirm reservation



  // delete reservation
  deleteReservationById(id: number) {
    alert(`reservation N° ${id} is deleted`);
    this.reservationService.deleteReservationById(id).subscribe(
      (data) => {
        console.log("here after delete", data.message);
        this.allReservations;
      }
    )
  };
  confirmReservation(newReservation:any, status:string) {
    newReservation.status = status
    this.reservationService.editReservationById(newReservation).subscribe(
      (response)=>{
        console.log('data after edit', response);
      }
    );
  }
}
