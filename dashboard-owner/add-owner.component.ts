import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';
@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {
  ownerForm: FormGroup;
  ownerId : any;
  owner: any = {};
  owners: any;
  title:string = "add owner";
  imagePreview:any;
  path:string;
  constructor(private formBuilder: FormBuilder, private ownerService: OwnerService, private router: Router, private activatedROute: ActivatedRoute) { }

  ngOnInit() {
    this.ownerForm= this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      phone:[''],
      adress:[''],
      specialties:[''],
      experiences:[''],
      img:['']
    })
    this.ownerId = this.activatedROute.snapshot.paramMap.get('id');
   if (this.ownerId) {
    this.title="edit owner"
    this.ownerService.getOwnerById(this.ownerId).subscribe(
      (data)=>{
        this.owner = data.owner;
       });

    }
  }
  addOrEditOwner(){
    if (this.ownerId) {
      //edit owner
      this.ownerService.editOwner(this.owner).subscribe(
        (data)=>{
          console.log('data after edit', data.message);
        }
      );

    } else {
      //add owner
      this.ownerService.addOwner(this.owner, this.ownerForm.value.img).subscribe(
        (data)=>{
          console.log('data after save', data.message);
        }
      );
    }
  }
  // le changement de l'image
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log("here file",file);
    
    this.ownerForm.patchValue({ img: file });
    this.ownerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
}
