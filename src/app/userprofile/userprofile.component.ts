import { Component, OnInit } from '@angular/core';
 
 import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  	let obs=this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  	obs.subscribe((response) => console.log(response));

  }

}
