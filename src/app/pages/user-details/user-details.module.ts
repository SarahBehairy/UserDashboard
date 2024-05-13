import { NgModule } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { CommonModule } from "@angular/common";
import { UserDetailsPage } from "./user-details.page";
import { LoaderModule } from "src/app/components/loader/loader.module";
import { HeaderModule } from "src/app/components/header/header.module";

@NgModule({
  imports: [
    CommonModule,
    LoaderModule,
    HeaderModule
  ],
  declarations: [
    UserDetailsPage
  ],
  providers: [UsersService],
  exports: [UserDetailsPage]
})
export class UserDetailsModule {}
