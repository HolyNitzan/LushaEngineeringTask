import { NetworkState } from '../../redux/actions/network/interfaces/interfaces';
import { UsersState } from '../../redux/actions/users/interfaces/interfaces';

export interface OwnProps {}

export interface DispatchProps {
  fetchUsers: (page: number) => void;
  resetState: () => void;
}

export interface StateProps {
  users: UsersState;
  network: NetworkState;
}

export type Props = StateProps & OwnProps & DispatchProps;
