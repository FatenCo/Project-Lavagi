import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-add-specialty',
  templateUrl: './add-specialty.component.html',
  styleUrls: ['./add-specialty.component.css']
})
export class AddSpecialtyComponent implements OnInit {
specialtyForm: FormGroup;
specialty: any= {};
specialtyId : any;
specialties: any;
title:string = "add specialty";
  constructor(private formBuilder:FormBuilder, private specialtyService:SpecialtyService, private router: Router, private activatedROute: ActivatedRoute) { }

  ngOnInit() {
    this.specialtyForm= this.formBuilder.group({
      Name:[''],
      Price:[''],
    })
    this.specialtyId = this.activatedROute.snapshot.paramMap.get('id');
   if (this.specialtyId) {
    this.title="add specialty"
    this.specialtyService.getSpecialtyById(this.specialtyId).subscribe(
      (data)=>{
        this.specialty = data.specialty;
       });

    }
   
  }
  addOrEditSpecialty(){
    // edit specialty
    if (this.specialtyId) {
      this.specialtyService.editSpecialty(this.specialty).subscribe(
        (data)=>{
          console.log('data after edit', data.message);
        }
      );
    // add specialty      
    }else{
      let id = localStorage.getItem('connectedUser');
      this.specialty.idUser=id;
      console.log("here final specialty", this.specialty);
      this.specialtyService.addSpecialty(this.specialty).subscribe(
        (data) =>{
          console.log("here response after adding", data.message)
             });
    }      
}
}
