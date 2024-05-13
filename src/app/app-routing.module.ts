import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPage } from './pages/users/users.page';
import { UserDetailsPage } from './pages/user-details/user-details.page';

const routes: Routes = [
  { path: 'users', component: UsersPage },
  { path: 'users/:id', component: UserDetailsPage },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
