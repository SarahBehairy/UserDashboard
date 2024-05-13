import { NgModule } from "@angular/core";
import { UserCardModule } from "src/app/components/user-card/user-card.module";
import { UsersPage } from "./users.page";
import { UsersService } from "src/app/services/users.service";
import { CommonModule } from "@angular/common";
import { SearchBarModule } from "src/app/components/search-bar/search-bar.module";
import { MatPaginatorModule} from '@angular/material/paginator';
import { LoaderModule } from "src/app/components/loader/loader.module";
import { HeaderModule } from "src/app/components/header/header.module";

@NgModule({
  imports: [
    CommonModule,
    UserCardModule,
    SearchBarModule,
    MatPaginatorModule,
    LoaderModule,
    HeaderModule
  ],
  declarations: [
    UsersPage,
  ],
  providers: [UsersService],
  exports: [UsersPage]
})
export class UsersModule {}
