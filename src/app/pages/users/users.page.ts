import { Component, OnDestroy, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Router } from "@angular/router";
import { Observable, Subject, Subscription, catchError, concat, debounceTime, distinctUntilChanged, finalize, map, of, retry, switchMap } from "rxjs";
import { APIResponse } from "src/app/models/api-response.model";
import { User } from "src/app/models/user.model";
import { UsersService } from "src/app/services/users.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.page.html',
    styleUrls: ['./users.page.scss']
})
export class UsersPage implements OnInit, OnDestroy {
    users: User[] = [];
    results: User[]| unknown = [];  //todo
    isLoading = false;
    totalCount = 0;
    totalPages = 1;
    pageNumber = 1;
    pageEvent!: PageEvent;
    searchTerms = new Subject<number>();
    searchSub!: Subscription;

    constructor(private usersService: UsersService,
                private router: Router){}

    ngOnInit(): void {
        this.subscribeToSearchUsers();
        this.getUsers(this.pageNumber);
    }

    subscribeToSearchUsers(): void {
        this.searchSub = this.searchTerms
        .pipe(
            debounceTime(300),
            switchMap((term: number) => term
                ? this.searchUsers(term)
                : of(null)),
            catchError((err, caught) => {
                this.isLoading = false;
                return of(null);
            })
        ).subscribe({
            next: user => {
            if(user) {
                console.log(user)
                this.users =[user];
                this.totalCount = 1;
                this.pageNumber = 1;
                this.totalPages = 1;
            } else {
                this.handleError()
            }
            this.isLoading = false;
        }, error: () => {
            console.log("err")
            this.handleError();
          } });
    }

    handleError(): void {
        this.users = [];
        this.totalCount = 0;
        this.pageNumber = 1;
        this.totalPages = 1;
        this.isLoading = false;
    }

    getUsers(pageNumber: number): void {
        this.usersService.getUsers(pageNumber).subscribe({
            next: (res: APIResponse<User[]>) => {
                console.log(res)
                this.users = res.data;
                this.totalCount = res.total;
                this.totalPages = res.total_pages;
                this.isLoading = false;
            },
            error: () => {
                this.users = [];
                this.totalCount = 0;
                this.totalPages = 0;
                this.pageNumber = 1;
                this.isLoading = false;
            }
            })
    }

    onSearch(term: string): void {
        console.log(term)
        this.isLoading = true;
        if(!term) {
            this.getUsers(this.pageNumber);
        }
        else if(typeof(+term) !== 'number') {
            this.handleError();
        }
        else this.searchTerms.next(+term);
    }

    searchUsers(term: number): Observable<User> {
        return this.usersService.getUserById(term);
    }

    handlePage(event :PageEvent): void {
        this.isLoading = true;
        this.getUsers(event.pageIndex + 1)
    }

    onUserCardClick(userId: number): void {
        this.router.navigate(['users', userId])
    }

    ngOnDestroy(): void {
        this.searchSub?.unsubscribe();
    }
}