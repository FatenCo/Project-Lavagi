import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LavageService {
  lavageURL: string = "http://localhost:3000/lavages";
  constructor(private httpClient:HttpClient) { }
  getLavage(obj:any){
    return this.httpClient.post<{result:any}>(this.lavageURL, obj);
  }
}
