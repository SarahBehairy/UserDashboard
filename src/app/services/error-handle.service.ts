import { ErrorHandler, Injectable, isDevMode } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService implements ErrorHandler {
  constructor() {}

  handleError(err: string): void {
   //
  }

}
