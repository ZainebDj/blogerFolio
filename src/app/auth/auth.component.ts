import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  result: any;

  constructor(
    private service: AuthService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router:Router) {
      sessionStorage.clear();

  }
  loginForm = this.formBuilder.group({
    id: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.required)
  
  });
  proceedLogin() {
    if (this.loginForm.valid) {
      this.service.getUserbyCode(this.loginForm.value.id).subscribe(item => {
        this.result = item;
        if (this.result.password === this.loginForm.value.password) {
          if (this.result.isactive) {
            sessionStorage.setItem('username',this.result.id);
            sessionStorage.setItem('role',this.result.role);
            this.router.navigate(['detail']);
          } else {
            this.toastr.error('Please contact Admin', 'InActive User');
          }
        } else {
          this.toastr.error('Invalid credentials');
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }

      
  }
}

