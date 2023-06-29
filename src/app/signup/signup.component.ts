import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!: FormGroup;
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];
  constructor(
    private formBuilder: FormBuilder, 
    private service: AuthService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: this.formBuilder.control('female'),
      role: this.formBuilder.control(''),
      isactive: this.formBuilder.control(false),
      dob: ['', Validators.required],
      education: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // Perform signup logic here
    if (this.signupForm.valid) {
      this.service.proceedSignup(this.signupForm.value).subscribe(result => {
        this.toastr.success('Please contact admin for enable access.','Registered successfully')
        this.router.navigate(['/'])
      });
    } else {
      console.log(this.signupForm.value);
      this.toastr.warning('Please enter valid data.')
    }
  }

}
