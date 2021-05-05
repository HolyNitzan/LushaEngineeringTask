import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { resetState, thunkFetchUsers } from '../../redux/actions/users/actions.users';
import { RootState } from '../../redux/store';
import { StateProps, DispatchProps, OwnProps } from './types';
import Home from './Home';

const mapStateToProps = (states: RootState): StateProps => ({
  users: states.users,
  network: states.network,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  fetchUsers: (page) => dispatch(thunkFetchUsers(page)),
  resetState: () => dispatch(resetState())
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(Home);
