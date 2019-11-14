import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
declare const $;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  model:any={};


  
  private url = 'http://api1.sociotrips.com/api/register';

  isPasswordMismatch:boolean =false
  constructor(private http: HttpClient,private router: Router) { }
 config: object = {
    headers: {
      "content-type": "application/json"
    }
  }
  ngOnInit() {
  }

//   RegisterForm(){

//  //  	console.log(this.model)
// 	// console.log(this.model.lastName)
// 	// if(this.model.password == this.model.confirmpassword ){
// 	// 	alert('hai');
// 	// 	this.isPasswordMismatch = false;
// 	// }
// 	// else{
// 	// 	this.isPasswordMismatch = true;
// 	// }
// }
    RegisterForm(){
      // console.log(this.model);
      // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = 'http://api1.sociotrips.com/api/register';
    var data ={
      "name":this.model.name,
      "email":this.model.email,
      "from_where":this.model.from_where,
      "mobile":this.model.mobile,
      "gender":"Male",
      "image":""
    }
    console.log(data);
    this.http.post(url, data, this.config)
    .subscribe( (response: any) => {  
      console.log(response)
      var httpStatus = response.status;
      console.log()
      if(httpStatus=="Success"){
        console.log("success");
         this.router.navigate(['/userprofile']); 
      }
    },
    error => {
      console.log('oops', error)
    });
    }
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.token; // you probably want to store it in localStorage or something

    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(req1);
  }

}
}