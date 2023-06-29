import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthComponent } from './auth.component';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('AuthComponent', () => {
  
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let authService: AuthService;
  let toastrService: ToastrService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [ReactiveFormsModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),        
        MatFormFieldModule,
        RouterModule
      ],
      providers: [
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
        
        FormBuilder,
        AuthService,
        ToastrService,
        { provide: Router, useClass: RouterMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    toastrService = TestBed.inject(ToastrService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "detail" when login is successful and user is active', () => {
    spyOn(authService, 'getUserbyCode').and.returnValue(of({ password: 'password', isactive: true }));
    spyOn(router, 'navigate');

    component.loginForm.setValue({ id: 'user123', password: 'password' });
    component.proceedLogin();

    expect(authService.getUserbyCode).toHaveBeenCalledWith('user123');
    expect(router.navigate).toHaveBeenCalledWith(['detail']);
  });

  it('should display error toastr when login is successful but user is inactive', () => {
    spyOn(authService, 'getUserbyCode').and.returnValue(of({ password: 'password', isactive: false }));
    spyOn(toastrService, 'error');

    component.loginForm.setValue({ id: 'user123', password: 'password' });
    component.proceedLogin();

    expect(authService.getUserbyCode).toHaveBeenCalledWith('user123');
    expect(toastrService.error).toHaveBeenCalledWith('Please contact Admin', 'InActive User');
  });

  it('should display error toastr when login is unsuccessful', () => {
    spyOn(authService, 'getUserbyCode').and.returnValue(of({ password: 'wrongpassword', isactive: true }));
    spyOn(toastrService, 'error');

    component.loginForm.setValue({ id: 'user123', password: 'password' });
    component.proceedLogin();

    expect(authService.getUserbyCode).toHaveBeenCalledWith('user123');
    expect(toastrService.error).toHaveBeenCalledWith('Invalid credentials');
  });

  // Add more test cases as needed

});

class RouterMock {
  navigate(_: any[]) {}
}

