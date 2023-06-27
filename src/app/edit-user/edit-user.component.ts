import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {
 
  constructor(
    private formBuilder: FormBuilder,
    private service : AuthService,
    private toaster: ToastrService,
    private dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {
      this.service.getAllRole().subscribe(res =>{
        this.rolelist=res
      })
      this.service.getAllEduction().subscribe(res =>{
        this.educationlist=res
      })
    }
    ngOnInit(): void {
      if (this.data.usercode != '' && this.data.usercode != null) {        
        this.loadUserData(this.data.usercode);
      }
    }
    rolelist: any;
    editData:any;
    educationlist:any
    signupForm = this.formBuilder.group({
      id: this.formBuilder.control(''),
      name: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      gender: this.formBuilder.control('male'),
      role: this.formBuilder.control('', Validators.required),
      isactive: this.formBuilder.control(false),
      dob: ['', Validators.required],
      education: this.formBuilder.control('', Validators.required)

    });
    loadUserData(code : any){
      this.service.getUserbyCode(code).subscribe(res => {        
        this.editData = res;
        this.signupForm.patchValue({
          id: this.editData.id, 
          name: this.editData.name,
          password: this.editData.password, 
          email: this.editData.email, 
          gender: this.editData.gender,
          role: this.editData.role, 
          isactive: this.editData.isactive,
          dob:this.editData.dob,
          education:this.editData.education
        });
      });
    }
    
  
  
  editUser(){    
    this.service.updateUser(this.signupForm.value.id, this.signupForm.value).subscribe(res=>{
      this.toaster.success('update succesfuly')
      this.dialogRef.close();
    })
   
  }
 
}
