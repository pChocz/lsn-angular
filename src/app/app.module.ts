import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersTableComponent } from './users-table/users-table.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {AddUserDialogComponent} from "./users-table/add-user-dialog/add-user-dialog.component";
import {ConfirmationDialogComponent} from "./users-table/confirmation-dialog/confirmation-dialog.component";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ModifyUserDialogComponent} from "./users-table/modify-user-dialog/modify-user-dialog.component";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    AddUserDialogComponent,
    ConfirmationDialogComponent,
    ModifyUserDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
