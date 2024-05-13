import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { APIResponse } from '../../models/api-response.model';
import { User } from '../../models/user.model';


export type Userstate = EntityState<APIResponse<User[]>>;

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'users',
  idKey: 'page'
})
export class UsersStore extends EntityStore<
Userstate, APIResponse<User[]>
> {
  constructor() {
    super();
  }
}
