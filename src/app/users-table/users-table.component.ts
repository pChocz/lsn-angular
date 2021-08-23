import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserGeneratorService} from "../shared/user-generator.service";
import {User} from "../shared/user.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {AddUserDialogComponent} from "./add-user-dialog/add-user-dialog.component";
import {ConfirmationDialogComponent} from "./confirmation-dialog/confirmation-dialog.component";
import {ModifyUserDialogComponent} from "./modify-user-dialog/modify-user-dialog.component";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit, AfterViewInit {

  users: User[];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'number-column',
    'username-column',
    'first-name-column',
    'last-name-column',
    'role-column',
    'enabled-column',
    'modify-column',
    'delete-column',
  ];

  constructor(
    private userGeneratorService: UserGeneratorService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.users = this.userGeneratorService.generateRandomUsers(1000);
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.filterPredicate = (data: any, filterValue) => {
      const dataStr = data.username.toLowerCase()
        + data.firstName.toLowerCase()
        + data.lastName.toLowerCase()
        + data.role.toLowerCase();
      return dataStr.indexOf(filterValue) != -1;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addUser(): void {
    this.dialog.open(AddUserDialogComponent, {
      width: '500px'
    }).afterClosed()
    .subscribe(response => {
        if (response) {
          const user: User = response.data;
          console.log(user);
          this.dataSource.data.push(user);
          this.dataSource.data = this.dataSource.data;
        }
      }
    )
  }

  modifyUser(user: User): void {
    this.dialog.open(ModifyUserDialogComponent, {
      width: '500px',
      data: {user: user}
    }).afterClosed()
    .subscribe(
      (userFromDialog: User) => {
        if (userFromDialog) {
          const index = this.dataSource.data.indexOf(user);
          if (user !== userFromDialog) {
            this.dataSource.data[index] = userFromDialog;
            this.dataSource.data = this.dataSource.data;
          }
        }
      }
    );
  }

  deleteUser(user: User): void {
    this.dialog.open(ConfirmationDialogComponent, {
      width: '500px'
    }).afterClosed()
    .subscribe(
      result => {
        if (result === true) {
          this.dataSource.data = this.dataSource.data.filter(obj => obj !== user);
        }
      });
  }


}
