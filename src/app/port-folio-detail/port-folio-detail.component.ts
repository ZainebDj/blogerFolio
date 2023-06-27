import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-port-folio-detail',
  templateUrl: './port-folio-detail.component.html',
  styleUrls: ['./port-folio-detail.component.scss']
})
export class PortFolioDetailComponent implements AfterViewInit {
  isadmin=false;
  constructor( 
    private service:AuthService,
    private dialog: MatDialog,
    private toaster: ToastrService
    ) {
      let role=sessionStorage.getItem('role');
      if(role=='admin'){
        this.isadmin=true;
      }else{
        this.isadmin=false;
      }
      console.log(role);
      
    this.LoadUser();
  }
  userlist: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {

  }
  LoadUser() {
    this.service.getall().subscribe(res => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  displayedColumns: string[] = [
    'username',
    'name',
    'email',
    'status',
    'role',
    'dob',    
    'education',
    'action',
    ];

  updateUser(code: any) {
    this.OpenDialog('100ms', '600ms', code);
  }

  OpenDialog(enteranimation: any, exitanimation: any, code: string) {
    const popup = this.dialog.open(EditUserComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '40%',
      height: '60%',
      data: {
        usercode: code
      }
    });
    popup.afterClosed().subscribe(res => {
      this.LoadUser();
    });
    
  }
  deleteUser(code: any) {
    this.service.deleteUser(code).subscribe(res => {
      this.toaster.warning('User deleted');
      this.LoadUser()
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 

}
