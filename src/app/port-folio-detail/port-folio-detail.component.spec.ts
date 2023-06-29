import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { PortFolioDetailComponent } from './port-folio-detail.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { of } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PortFolioDetailComponent', () => {
  let component: PortFolioDetailComponent;
  let fixture: ComponentFixture<PortFolioDetailComponent>;
  let dialogMock: any;
  let toastrServiceMock: any;

  beforeEach(async () => {
    dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
    toastrServiceMock = jasmine.createSpyObj('ToastrService', ['warning']);

    await TestBed.configureTestingModule({
      declarations: [PortFolioDetailComponent],
      providers: [
        { provide: MatDialog, useValue: dialogMock },
        { provide: ToastrService, useValue: toastrServiceMock },
      ],
      imports:[HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortFolioDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load user data', () => {
    // Simulate the service response
    const mockUserData = [{ username: 'user1' }, { username: 'user2' }];
    const service = TestBed.inject(AuthService);
    spyOn(service, 'getall').and.returnValue(of(mockUserData));

    // Trigger the method
    component.LoadUser();

    // Verify the data source is updated
    expect(component.userlist).toEqual(mockUserData);
    expect(component.dataSource).toBeInstanceOf(MatTableDataSource);
    expect(component.dataSource.data).toEqual(mockUserData);
  });


  


});
