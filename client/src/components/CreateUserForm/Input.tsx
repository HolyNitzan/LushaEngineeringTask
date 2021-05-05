import { FunctionComponent } from 'react';
import { Form } from 'react-bootstrap';

type Props = {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  label: string;
  required: boolean;
  onChange: (value: string) => void;
};

const Input: FunctionComponent<Props> = ({ id, type, required, placeholder, value, label, onChange }) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control required={required} type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    </Form.Group>
  );
};

export default Input;
