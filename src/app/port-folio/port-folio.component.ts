import { Component,HostListener } from '@angular/core';
import { UserDetails } from 'src/models/UserDetails';
import { AuthService } from '../service/auth.service';
// import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-port-folio',
  templateUrl: './port-folio.component.html',
  styleUrls: ['./port-folio.component.scss'],
  // imports: [MatIconModule],
})
export class PortFolioComponent {
  
  userDetails: UserDetails = new UserDetails();
  degrees =[
    'Associate Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Ph.D.',
    'Other'
  ];
  status=["Available","Not available"]

  items = ["Designer", "Developer", "Freelancer", "Photographer"];
  isEditMode: boolean = false;
  progressPercentage: number = 50;
  updateProgress(event: MouseEvent) {
    if(this.isEditMode){
    const progressBar = event.target as HTMLElement;
    const boundingRect = progressBar.getBoundingClientRect();
    const cursorPosition = event.clientX - boundingRect.left;
    const progressBarWidth = boundingRect.width;
    this.progressPercentage = Math.round((cursorPosition / progressBarWidth) * 100);}
  }
  // private _birthday: Date = new Date();
  // public get birthday(): Date {
  //   return this._birthday;
  // }
  // public set birthday(value: Date) {
  //   this._birthday = value;
  // }
  // website : string ="";
  constructor(private service:AuthService) {
    // Populate user details with sample data
    
    
    this.userDetails.name = '';
    this.userDetails.birthday = new Date("1/May/1995");
    this.userDetails.website = 'www.example.com';
    this.userDetails.phone = +1234567890;
    this.userDetails.city = 'New York, USA';
    this.userDetails.age = 30;
    this.userDetails.degree = 'Master';
    this.userDetails.email = 'email@example.com';
    this.userDetails.freelance = 'Available';
    this.userDetails.skills=[{name:"Html",value:100},{name:"CSS",value:90},{name:"JAVASCRIPT",value:70},{name:"PHP",value:80},{name:"WORDPRESS/CMS",value:60},{name:"PHOTOSHOP",value:55}]
  }


  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
  // Method to update user details
  updateUserDetails() {
    // Perform validation or other logic before updating
    // For example, you can check if all required fields are filled
    if (this.userDetails.name && this.userDetails.age) {
      // Perform the update operation
      // For example, you can make an API call to update the user details
      console.log('Updating user details:', this.userDetails);
    } else {
      console.log('Please fill in all required fields.');
    }
  }
    // Method to create user details
    createUserDetails() {
      // Perform validation or other logic before creating
      // For example, you can check if all required fields are filled
      if (this.userDetails.name && this.userDetails.age) {
        // Perform the create operation
        // For example, you can make an API call to create the user details
        console.log('Creating user details:', this.userDetails);
      } else {
        console.log('Please fill in all required fields.');
      }
    }
}
