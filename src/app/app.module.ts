import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './pages/users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsModule } from './pages/user-details/user-details.module';
import { ErrorHandleService } from './services/error-handle.service';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsersModule,
    UserDetailsModule,
    HttpClientModule  ],
  providers: [{
    provide: ErrorHandler,
    useClass: ErrorHandleService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
