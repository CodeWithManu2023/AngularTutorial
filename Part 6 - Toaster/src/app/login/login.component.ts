import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: '[app-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username= '';
  password = '';

constructor(private router:Router, private toastr:ToastrService){

}
  loginSubmit(){
    console.log(this.username);
    console.log(this.password);

    if(this.username == 'Admin' && this.password == 'Admin123'){
       console.log('Login Successfull');
       this.router.navigate(['dashboard']); 
       this.toastr.success('Login Successfull', '');

    } else {
      console.log('Login Failure');
      this.toastr.error('Wrong Credentials', '');
    }

    // API code  



  }


}
