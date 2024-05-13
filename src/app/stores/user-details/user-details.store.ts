import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from '../../models/user.model';

export type UserDetailsstate = EntityState<User>;

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'user-details',
  idKey: 'id',
})
export class UserDetailsStore extends EntityStore<UserDetailsstate, User> {
  constructor() {
    super();
  }
}
