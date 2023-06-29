import { Component,HostListener } from '@angular/core';
import { AuthService } from '../service/auth.service';
// import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-port-folio',
  templateUrl: './port-folio.component.html',
  styleUrls: ['./port-folio.component.scss'],
  // imports: [MatIconModule],
})
export class PortFolioComponent {
  
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

}
