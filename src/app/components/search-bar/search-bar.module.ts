import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule],
  exports: [SearchBarComponent]
})

export class SearchBarModule {}
