import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user : any={};
loginForm : FormGroup;
errMsg : string;
  constructor(private formBuilder : FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {

  }
  login(){
    console.log("here object", this.user);
this.userService.login(this.user).subscribe(
  (data)=>{
    console.log("here data after login", data);
  if (data.message == "user found") {
    localStorage.setItem('connectedUser', data.user.id)
    if (data.user.role == 'client') {
      this.router.navigate(['']);
    }else{
      this.router.navigate(['dashboardAdmin']);
    }
  }else{
    this.errMsg= "please check email/password"
  }
} 
)};
}
