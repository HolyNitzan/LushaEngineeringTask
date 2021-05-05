import { FunctionComponent, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { NewUser } from '../../redux/actions/create/interfaces/interfaces';
import Input from './Input';

type Props = {
  handleSubmit: (user: NewUser) => void;
};

const CreateUserForm: FunctionComponent<Props> = ({ handleSubmit }) => {
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: NewUser = {
      email,
      password,
      description,
      firstName,
      lastName,
    };
    handleSubmit(user);
  };

  return (
    <Row className="justify-content-md-center">
      <Col md={6}>
        <Form onSubmit={onSubmit}>
          <Input required={true} id={'email'} type={'email'} placeholder={'Email'} value={email} label={'Email'} onChange={setEmail} />
          <Input required={true} id={'firstName'} type={'text'} placeholder={'First Name'} value={firstName} label={'First Name'} onChange={setFirstName} />
          <Input required={true} id={'lastName'} type={'text'} placeholder={'Last Name'} value={lastName} label={'Last Name'} onChange={setLastName} />
          <Input required={true} id={'description'} type={'text'} placeholder={'Description'} value={description} label={'Description'} onChange={setDescription} />
          <Input required={true} id={'password'} type={'password'} placeholder={'Password'} value={password} label={'Password'} onChange={setPassword} />

          <Button block variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default CreateUserForm;
