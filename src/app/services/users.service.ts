import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { APIResponse } from '../models/api-response.model';
import { User } from '../models/user.model';
import { UsersStore } from '../stores/users/users.store';
import { UsersQuery } from '../stores/users/users.query';
import { UserDetailsStore } from '../stores/user-details/user-details.store';
import { UserDetailsQuery } from '../stores/user-details/user-details.query';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = 'https://reqres.in/api/users';
  constructor(
    public httpClient: HttpClient,
    private usersStore: UsersStore,
    private usersQuery: UsersQuery,
    private userDetailsStore: UserDetailsStore,
    private userDetailsQuery: UserDetailsQuery
  ) {}

  //todo: Observable<APIResponse<User[]>>
  getUsers(pageNumber: number): any {
    const url = `${this.baseUrl}?page=${pageNumber}`;
    const request$ = this.httpClient.get<APIResponse<User[]>>(url).pipe(
      map((res) => {
        this.usersStore.add(res);
        this.usersStore.setActive(res.page);
        return res;
      }),
      catchError((error) => {
        if (error.status === 404) {
          console.error('User not found: 404 error');
        }
        return of([]);
      })
    );
    return this.usersQuery.hasEntity(pageNumber)
      ? this.usersQuery.selectEntity(pageNumber)
      : request$;
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<APIResponse<User>>(url).pipe(map(res => res.data));
}

 getUserDetails(id: number): Observable<User | undefined> {
    const url = `${this.baseUrl}/${id}`;
    const request$ = this.httpClient.get<APIResponse<User>>(url).pipe(
      map((res) => {
        this.userDetailsStore.add(res?.data);
        console.log(res)
        this.usersStore.setActive(id);
        return res?.data;
      }),catchError((error) => {
        return throwError(error);
      })
    );
    console.log("has entity", this.userDetailsQuery.hasEntity(id), this.userDetailsQuery.selectEntity(id))
    return this.userDetailsQuery.hasEntity(id)
      ? this.userDetailsQuery.selectEntity(id)
      : request$;
  }
}



// getUserDetails(id: number): Observable<User> {
//     const url = `${this.baseUrl}/${id}`;
//     const request$ = this.httpClient.get<User>(url).pipe(
//       map((res) => {
//         this.userDetailsStore.add(res);
//         this.usersStore.setActive(res.id);
//         return res;
//       }),
//       catchError((error) => {
//         if (error.status === 404) {
//           console.error('User not found: 404 error');
//         }
//         return of([]);
//       })
//     );
//     return this.userDetailsQuery.hasEntity(id)
//       ? this.userDetailsQuery.selectEntity(id)
//       : request$;
//   }
