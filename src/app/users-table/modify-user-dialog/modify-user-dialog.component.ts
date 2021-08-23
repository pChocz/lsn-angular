import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../shared/user.model";

@Component({
  selector: 'app-modify-user-dialog',
  templateUrl: './modify-user-dialog.component.html',
})
export class ModifyUserDialogComponent {

  modifiedUser: User;
  user: User;

  constructor(
      private dialogRef: MatDialogRef<ModifyUserDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { user: User }) {
    this.user = data.user;
    this.modifiedUser = {...data.user};
  }

  onConfirmClick(): void {
    this.dialogRef.close(this.modifiedUser);
  }

  onCancelClick(): void {
    this.dialogRef.close(this.user);
  }

}
