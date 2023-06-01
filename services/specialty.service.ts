import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {
specialtyURL: string = "http://localhost:3000/specialties";
  constructor(private httpClient:HttpClient) { }

  addSpecialty(obj:any){
   return this.httpClient.post<{ message: string }>(this.specialtyURL, obj);
  }
  getAllSpecialyties(){
    return this.httpClient.get<{allSpecialties: any, message: string}>(this.specialtyURL);
  }
  deleteSpecialtyById(id:any){
    // supprion avec l'id dynamique
return this.httpClient.delete<{ message: string}>(`${this.specialtyURL}/${id}`);
  }
  getSpecialtyById(id:any){
    return this.httpClient.get<{ message: string, specialty: any}>(`${this.specialtyURL}/${id}`);
  }
  editSpecialty(newSpecialty:any){
    return this.httpClient.put<{ message: string}>(`${this.specialtyURL}/${newSpecialty._id}`, newSpecialty);
  }
  //search specialty by name
  searchSpecialty(obj){
    return this.httpClient.post(`${this.specialtyURL}/search`,obj);
  }
}
