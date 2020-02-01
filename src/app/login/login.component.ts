import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  private http: HttpClient,private routes:Router) { }

  loginFlag:boolean = false;
  imagePath:string = 'https://cdn2-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg';
  ngOnInit() {
  }


  login(){
    console.log('called');

      this.http.get<string>("http://localhost:8080/test",{responseType: 'text'}).subscribe(
      data=>{
       // console.log('Sucess');
        this.loginFlag = true;
       if(data == 'Success'){
        this.routes.navigate(['/dashboard']);
       }else{
         alert('Wrong Input');
       }
      }
      );

  }


}
