import { NgModule } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { CommonModule } from "@angular/common";
import { UserDetailsPage } from "./user-details.page";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserDetailsPage,
  ],
  providers: [UsersService],
  exports: [UserDetailsPage]
})
export class UserDetailsModule {}
