import { FunctionComponent } from 'react';
import { Row, Alert, AlertProps } from 'react-bootstrap';

type Props = {
  text: string | null;
  variant: AlertProps['variant'];
};

const NotificationAlert: FunctionComponent<Props> = ({ text, variant }) => {
  if (!text) {
    return <></>;
  }
  return (
    <Row className="justify-content-md-center mt-3">
      <Alert variant={variant}>{text}</Alert>
    </Row>
  );
};

export default NotificationAlert;
