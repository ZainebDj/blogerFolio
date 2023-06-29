import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { EditUserComponent } from './edit-user.component';
import { AuthService } from '../service/auth.service';
import { of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  let authService: AuthService;
  let toasterService: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserComponent],
      imports: [ReactiveFormsModule,MatFormFieldModule,MatOptionModule,MatSelectModule,MatCheckboxModule],
      providers: [
        FormBuilder,
        {
          provide: AuthService,
          useValue: { // Mock the AuthService methods used in the component
            getAllRole: () => of([]),
            getAllEduction: () => of([]),
            getUserbyCode: () => of({ id: 1, name: 'John Doe' }),
            updateUser: () => of({})
          }
        },
        {
          provide: ToastrService,
          useValue: { // Mock the ToastrService methods used in the component
            success: () => { },
          }
        },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    toasterService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  xit('should load user data on ngOnInit if usercode is provided', () => {
    const getUserbyCodeSpy = spyOn(authService, 'getUserbyCode').and.callThrough();
    component.data = { usercode: 'ABC123' };
    component.ngOnInit();
    expect(getUserbyCodeSpy).toHaveBeenCalledWith('ABC123');
    // Additional assertions to verify that user data is correctly loaded into the form
    expect(component.signupForm.value.id).toBe('1');
    expect(component.signupForm.value.name).toBe('John Doe');
  });

  xit('should update user on form submission', () => {
    const updateUserSpy = spyOn(authService, 'updateUser').and.callThrough();
    const toastrSuccessSpy = spyOn(toasterService, 'success');
    const dialogRefCloseSpy = spyOn(component['dialogRef'], 'close');
    component.signupForm.patchValue({ id: '1', name: 'John Doe' });
    component.editUser();
    expect(updateUserSpy).toHaveBeenCalledWith(1, { id: 1, name: 'John Doe' });
    expect(toastrSuccessSpy).toHaveBeenCalledWith('update succesfuly');
    expect(dialogRefCloseSpy).toHaveBeenCalled();
  });
});
