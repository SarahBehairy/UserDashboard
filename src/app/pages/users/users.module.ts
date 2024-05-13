import { NgModule } from "@angular/core";
import { UserCardModule } from "src/app/components/user-card/user-card.module";
import { UsersPage } from "./users.page";
import { UsersService } from "src/app/services/users.service";
import { CommonModule } from "@angular/common";
import { SearchBarModule } from "src/app/components/search-bar/search-bar.module";
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    UserCardModule,
    SearchBarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    UsersPage,
  ],
  providers: [UsersService],
  exports: [UsersPage]
})
export class UsersModule {}
