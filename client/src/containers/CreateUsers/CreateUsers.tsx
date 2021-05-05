import { FunctionComponent, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm';
import NotificationAlert from '../../components/NotificationAlert/NotificationAlert';
import { NewUser } from '../../redux/actions/create/interfaces/interfaces';
import { Props } from './types';

const CreateUsers: FunctionComponent<Props> = ({ createUser, create, resetState }) => {

  useEffect(() => {
    return () => {
      resetState()
    }
  }, [resetState])

  const handleSubmit = (user: NewUser) => {
    createUser(user);
  };

  return (
    <>
      <Row>
        <Col className="text-center">
          <h1>Create User Panel</h1>
        </Col>
      </Row>
      <CreateUserForm handleSubmit={handleSubmit} />
      <NotificationAlert text={create.user ? `User ${create.user} successfully created!` : null} variant={'success'} />
      <NotificationAlert text={create.error} variant={'danger'} />
    </>
  );
};

export default CreateUsers;
