import { FunctionComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import { User } from '../../redux/actions/users/interfaces/interfaces';
import UserGrid from './UserGrid';

type Props = {
  users: User[];
};

const UserGridLayout: FunctionComponent<Props> = ({ users }) => {
  return (
    <>
      <Row className="justify-content-md-center text-center text-white">
        <Col md="1" className="m-1 bg-dark">#</Col>
        <Col md="4" className="m-1 bg-dark">ID</Col>
        <Col md="4" className="m-1 bg-dark">Email</Col>
      </Row>
      {users.map((user, ind) => <UserGrid key={user._id} ind={ind + 1} user={user} />)}
    </>
  );
};

export default UserGridLayout;
