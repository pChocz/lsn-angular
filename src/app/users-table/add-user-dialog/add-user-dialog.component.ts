import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";
import {User} from "../../shared/user.model";

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
})
export class AddUserDialogComponent {

  username: string = '';
  firstName: string = '';
  lastName: string = '';
  role: 'user' | 'admin' = 'user';
  enabled: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<AddUserDialogComponent>) {

  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    const user: User = new User(
      this.username,
      this.firstName,
      this.lastName,
      this.role,
      this.enabled
    );
    this.dialogRef.close({data: user});
  }

}
