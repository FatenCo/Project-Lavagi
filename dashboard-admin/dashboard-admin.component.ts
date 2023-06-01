import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from '../services/owner.service';
import { SpecialtyService } from '../services/specialty.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
owners :any;
specialties :any;
allSpecialties: any=[];
allOwners: any=[];
  constructor(private myRouter:Router, private specialtyService: SpecialtyService, private ownerService: OwnerService) { }

  ngOnInit() {
    this.specialtyService.getAllSpecialyties().subscribe(
      (data)=>{
        this.specialties = data.allSpecialties;
      });
    this.ownerService.getAllOwners().subscribe(
      (data)=>{
        this.owners = data.allOwners
      }
    )
}
displaySpecialty(x:number){
  this.myRouter.navigate([`specialtyInfo/${x}`]);
  }
  displayOwner(x:number){
    this.myRouter.navigate([`ownerInfo/${x}`]);
    }
  editOwner(ownerId:Number){
    this.myRouter.navigate([`editOwner/${ownerId}`])
    }
    deleteOwnerById(id:number){
      alert(`owner N° ${id} is deleted`);
      this.ownerService.deleteOwnerById(id).subscribe(
        (data)=>{
      console.log("here after delete", data.message);
      this.allOwners;
          }
      )};
    }


