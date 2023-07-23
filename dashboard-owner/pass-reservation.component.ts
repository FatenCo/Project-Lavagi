import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-pass-reservation',
  templateUrl: './pass-reservation.component.html',
  styleUrls: ['./pass-reservation.component.css']
})
export class PassReservationComponent implements OnInit {
  reservationForm : FormGroup;
  reservationId : any;
  reservation: any = {};
  reservations: any;
  title:string = "pass reservation";
  path:string;
  constructor(private formBuilder: FormBuilder, private reservationService : ReservationService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.reservationForm= this.formBuilder.group({
      name:[''],
      email:[''],
      telephone:[''],
      service:[''],
      date:[''],
      message:[''],
    
    })
    this.reservationId = this.activatedRoute.snapshot.paramMap.get('id');
   if (this.reservationId) {
    this.title="edit owner"
    this.reservationService.getReservationById(this.reservationId).subscribe(
      (data)=>{
        this.reservation = data.reservation;
       });

    }
  }
  passReservation(id:number){
    alert(`are you sure to pass the reservation? N° ${id}`);
    this.reservationService.addReservation(this.reservation).subscribe(
      (data)=>{
        console.log('data after save', data.message);
    })
 }}
