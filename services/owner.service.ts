import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
ownerURL: string = "http://localhost:3000/owners";
  constructor(private httpClient : HttpClient) { }
  
 addOwner(ownerObj, img:File){
  let formData=new FormData();
  formData.append('firstName', ownerObj.firstName);
  formData.append('lastName', ownerObj.lastName);
  formData.append('email', ownerObj.email);
  formData.append('phone', ownerObj.phone);
  formData.append('adress', ownerObj.adress);
  formData.append('specialties', ownerObj.specialties);
  formData.append('experiences', ownerObj.experiences);
  formData.append('img',img);
  return this.httpClient.post<{message:string}>(this.ownerURL, formData)
 }
 getOwnerById(id:any){
  return this.httpClient.get<{ message: string, owner: any}>(`${this.ownerURL}/${id}`);
}
getAllOwners(){
  return this.httpClient.get<{message: string, allOwners:any}>(this.ownerURL);
}
deleteOwnerById(id:any){
  // supprion avec l'id dynamique
return this.httpClient.delete<{ message: string}>(`${this.ownerURL}/${id}`);
}
editOwner(newOwner:any){
  return this.httpClient.put<{ message: string}>(`${this.ownerURL}/${newOwner._id}`, newOwner);
}
}
