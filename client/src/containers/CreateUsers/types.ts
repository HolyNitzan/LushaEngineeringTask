import { NewUser, CreateState } from '../../redux/actions/create/interfaces/interfaces';
import { NetworkState } from '../../redux/actions/network/interfaces/interfaces';

export interface OwnProps {}

export interface DispatchProps {
  createUser: (newUser: NewUser) => void;
  resetState: () => void;
}

export interface StateProps {
  create: CreateState;
  network: NetworkState;
}

export type Props = StateProps & OwnProps & DispatchProps;
