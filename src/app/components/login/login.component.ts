import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  credencialesInva: string = "";

  loginData = {
    "email": "",
    "password": ""
  }

  constructor(private login: AuthService, private router: Router){}

  ngOnInit(): void {
    
  }

  formSubmitLogin(){
    if(this.loginData.email.trim() == '' || this.loginData.email.trim() == null || this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      Swal.fire("Email o contraseña inválidas.");
    }

    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);

        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe((user:any) => {
          this.login.setUser(user);

          if(this.login.getUserRole() == "ROLE_DOCTOR"){

            window.location.href = '/';
          }
          else if(this.login.getUserRole() == "ROLE_PATIENT"){
  
            window.location.href = '/';
          }
          else{
            this.login.logout();
          }
        })
      },(error) => {
        console.log(error);
      }
    )
    
  }
}
