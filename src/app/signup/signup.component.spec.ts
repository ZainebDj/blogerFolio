import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { SignupComponent } from './signup.component';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let authService: AuthService;
  let toastrService: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent,],
      providers: [FormBuilder, AuthService, ToastrService,
      // Provide a mock ActivatedRoute
      {
        provide: ActivatedRoute,
        useValue: {
          paramMap: of({
            get: (param: string) => {
              // Return dummy values for any route parameters your component expects
              if (param === 'id') {
                return '123';
              }
              return null;
            },
          }),
        },
      },
],
      imports:[HttpClientTestingModule,ToastrModule,ToastrModule.forRoot(),MatFormFieldModule,MatDatepickerModule,MatOptionModule,MatNativeDateModule,MatRadioModule,MatSelectModule,ReactiveFormsModule,RouterModule,MatFormFieldControl]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should call proceedSignup() and navigate to login on successful form submission', () => {
    spyOn(authService, 'proceedSignup').and.returnValue(of({}));

    const toastrSuccessSpy = spyOn(toastrService, 'success');
    const routerNavigateSpy = spyOn(component['router'], 'navigate');

    // Set valid form values
    component.signupForm.setValue({
      id: '123',
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password',
      gender: 'female',
      role: '',
      isactive: false,
      dob: '1990-01-01',
      education: 'Graduate',
    });

    // Call the onSubmit() method
    component.onSubmit();

    expect(authService.proceedSignup).toHaveBeenCalledWith(component.signupForm.value);
    expect(toastrSuccessSpy).toHaveBeenCalled();
    expect(routerNavigateSpy).toHaveBeenCalledWith(['login']);
  });

 

});
