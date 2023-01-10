import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoginForm } from '../models/login'
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group<ILoginForm>({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  })


  constructor(private fb: FormBuilder, private service: AuthService) { }

  login() {
    this.service.login(this.loginForm.value).subscribe((res: any) => {
      res.token && (
        localStorage.setItem("token", res.token),
        localStorage.setItem("user", JSON.stringify(res.user)),
        this.service.router.navigate(['/post']),
        this.service.loggedIn = true)
    }, (error: any) => {
      Swal.fire({
        title: 'Error!',
        text: 'Invalid credntial',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    })
  }

}
