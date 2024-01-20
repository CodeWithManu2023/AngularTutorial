import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: '[app-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username= '';
  password = '';

constructor(private router:Router){

}
  loginSubmit(){
    console.log(this.username);
    console.log(this.password);

    if(this.username == 'Admin' && this.password == 'Admin123'){
       console.log('Login Successfull');
       this.router.navigate(['dashboard']); 

    } else {
      console.log('Login Failure');
    }

    // API code  



  }


}
