import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
reservationURL: string = "http://localhost:3000/reservations";
  constructor(private httpClient : HttpClient) { }
  addReservation(obj:any){
    return this.httpClient.post<{ message: string }>(this.reservationURL, obj);
   }
   getAllReservations(){
    return this.httpClient.get<{allReservations: any, message: string}>(this.reservationURL);
  }
  deleteReservationById(id:any){
    // supprion avec l'id dynamique
return this.httpClient.delete<{ message: string}>(`${this.reservationURL}/${id}`);
  }
  getReservationById(id:any){
    return this.httpClient.get<{ message: string, reservation: any}>(`${this.reservationURL}/${id}`);
  }
  editReservationById(newReservation:any){
    return this.httpClient.put<{ message: string, response:any}>(`${this.reservationURL}/${newReservation._id}`, newReservation);
  }

}
