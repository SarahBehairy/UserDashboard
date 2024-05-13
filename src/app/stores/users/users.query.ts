import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { APIResponse } from '../../models/api-response.model';
import { User } from '../../models/user.model';
import { UsersStore, Userstate } from './users.store';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<Userstate, APIResponse<User[]>> {
  constructor(store: UsersStore) {
    super(store);
  }
}
