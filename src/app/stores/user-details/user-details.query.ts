import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { APIResponse } from '../../models/api-response.model';
import { User } from '../../models/user.model';
import { UserDetailsStore, UserDetailsstate } from './user-details.store';

@Injectable({ providedIn: 'root' })
export class UserDetailsQuery extends QueryEntity<UserDetailsstate, User> {
  constructor(store: UserDetailsStore) {
    super(store);
  }
}
