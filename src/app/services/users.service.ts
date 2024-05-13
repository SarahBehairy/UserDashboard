import { Injectable } from "@angular/core";
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError, map, of } from "rxjs";
import { APIResponse } from "../models/api-response.model";
import { User } from "../models/user.model";
import { UsersStore } from "../stores/users.store";
import { UsersQuery } from "../stores/users.query";


@Injectable({
    providedIn: 'root'
  })
  export class UsersService {  
    baseUrl = 'https://reqres.in/api/users';
    constructor(public httpClient: HttpClient, private usersStore: UsersStore, private usersQuery: UsersQuery){};
    //todo: Observable<APIResponse<User[]>>
    getUsers(pageNumber: number): any {
        const url = `${this.baseUrl}?page=${pageNumber}`;
        const request$ = this.httpClient.get<APIResponse<User[]>>(url).pipe(map((res)=> {
            this.usersStore.add(res);
            this.usersStore.setActive(res.page);
            return res;
        }), catchError(error => {
            if (error.status === 404) {
                console.error('User not found: 404 error');
        }
            return of([]);
        }
        ));
        return this.usersQuery.hasEntity(pageNumber)
        ? this.usersQuery.selectEntity(pageNumber)
        : request$;
    }

    getUserById(id: number): Observable<User> {
        console.log("getUserById")
        const url = `${this.baseUrl}/${id}`
        return this.httpClient.get<APIResponse<User>>(url).pipe(map(res => res.data));
    }

    getUserDetails(id:number) : Observable<APIResponse<User>> {
        const url = `${this.baseUrl}/${id}`;
        return this.httpClient.get<APIResponse<User>>(url);
    }
}
  