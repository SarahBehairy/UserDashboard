import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/models/user.model";
import { UsersService } from "src/app/services/users.service";

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.page.html',
    styleUrls: ['./user-details.page.scss']
})
export class UserDetailsPage implements OnInit {
    id!: number;
    user!: User;
    constructor(private route: ActivatedRoute, private usersService: UsersService){}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if(id) this.getUserDetails(+id);
    }

    getUserDetails(id: number): void {
        this.usersService.getUserDetails(id).subscribe({
            next: (res)=> {
                this.user = res.data;
            }
        })
    }
}