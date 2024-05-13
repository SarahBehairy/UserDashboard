import { NgModule } from '@angular/core';
import { UserCardComponent } from './user-card.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [UserCardComponent]
})
export class UserCardModule {}
