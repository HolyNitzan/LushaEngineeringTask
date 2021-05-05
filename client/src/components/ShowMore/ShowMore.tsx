import { FunctionComponent } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
  handleShowMore: () => void;
}

const ShowMore: FunctionComponent<Props>= ({handleShowMore}) => {
  return (
    <Row className="mt-2 d-flex flex-column justify-content-center text-center">
      <Col as={Button} onClick={handleShowMore} variant="outline-light">
        <h1 className="text-muted"> Show More </h1>
        <FontAwesomeIcon size={'3x'} icon={faArrowCircleDown} />
      </Col>
    </Row>
  )
}

export default ShowMore;
