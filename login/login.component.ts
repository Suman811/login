import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



  constructor(private route: Router) { }



  loginform = new FormGroup({
    username: new FormControl(" ", [Validators.required, Validators.minLength(3)]),
    password: new FormControl(" ", [Validators.required, Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'))])

  })

  saveform() {
  
    console.log(this.loginform.value);
    if (this.loginform.value.username == "Suman" && this.loginform.value.password == "Suman@2002") {
      localStorage.setItem("mytoken", "token");
      this.route.navigate(['/success']);
    }
  }








}
