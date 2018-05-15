import { State as HeaderState } from 'store_alias/modules/header'
import { State as UserState } from 'store_alias/modules/user';

export interface MyState {
  header: HeaderState,
  user: UserState,
}
