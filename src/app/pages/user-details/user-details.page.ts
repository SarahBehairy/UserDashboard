import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  id!: number;
  user!: User;
  isLoading = false;
  showError = false;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.getUserDetails(+id);
    else this.navigateToUsers();
  }

  getUserDetails(id: number): void {
    this.isLoading = true;
    this.usersService
      .getUserDetails(id)
      .subscribe({
        next: (res) => {
            if(res) this.user = res;
            else this.showError = true;
            this.isLoading = false
        },
        error: () => {
            this.showError = true;
            this.isLoading  = false;
        }
      });
  }

  navigateToUsers(): void {
    this.router.navigateByUrl('/');
  }
}
