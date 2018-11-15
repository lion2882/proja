import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

loginUser(users) {
  users.preventDefault();
  //[]feild
  console.log(users);
  var username =users.target.elements[0].value;
  var password = users.target.elements[1].value;
  if(username == 'as' && password =='as'){
    this.router.navigate(['form']);
  }
}


}
