import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { resetState, thunkCreateUser } from '../../redux/actions/create/actions.create';
import { RootState } from '../../redux/store';
import { StateProps, DispatchProps, OwnProps } from './types';
import CreateUsers from './CreateUsers';

const mapStateToProps = (states: RootState): StateProps => ({
  create: states.create,
  network: states.network,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  createUser: (user) => dispatch(thunkCreateUser(user)),
  resetState: () => dispatch(resetState())
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(CreateUsers);
