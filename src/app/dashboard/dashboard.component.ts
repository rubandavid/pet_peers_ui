import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  imagePath:string = "https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg";
  addPet:boolean = true;
  myProfile:boolean = false;
  breedName:string= '';
  breedUrl:string = '';
 // salePet:[]<
  constructor(private activeRoute:Router,private http:HttpClient) { }

  ngOnInit() {
  }
  sellPet(){
    this.addPet = !this.addPet;
    this.myProfile = false;
    this.http.post('localhost:8080/sale_pet',{
      breedname : this.breedName,
      breadUrl : this.breedUrl
    },{}).subscribe(
      data=>{
          console.log(data);
      }
    );

  }

  myProfileLoad(){
    this.myProfile= !this.myProfile;
  
  }
}
