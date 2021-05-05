import { FunctionComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import { User } from '../../redux/actions/users/interfaces/interfaces';

type Props = {
  user: User;
  ind: number;
};

const UserGrid: FunctionComponent<Props> = ({ user, ind }) => {
  return (
    <Row className="justify-content-md-center text-center">
      <Col md="1" className="m-1 bg-light">{ind}</Col>
      <Col md="4" className="m-1 bg-light">{user._id}</Col>
      <Col md="4" className="m-1 bg-light">{user.email}</Col>
    </Row>
  );
};

export default UserGrid;
