import React, { FunctionComponent, useEffect, useState } from 'react';
import { Col, Row, } from 'react-bootstrap';
import UserGridLayout from '../../components/UserGrid/UserGridLayout';
import ShowMore from '../../components/ShowMore/ShowMore';
import { Props } from './types';

const Home: FunctionComponent<Props> = ({ fetchUsers, users }) => {
  const [paginationItem, setPaginationItem] = useState<number>(1);

  useEffect(() => {
    fetchUsers(0);
  }, [fetchUsers]);

  useEffect(() => {
    return () => {

    }
  }, [fetchUsers]);

  const handleChangePaginationItem = () => {
    if (users.users.length === users.count) {
      fetchUsers(paginationItem);
      return;
    }
    fetchUsers(paginationItem);
    setPaginationItem(paginationItem + 1);
  };

  if (users.count < 1) {
    return <EmptyUsers />;
  }

  return (
    <>
      <Row className="justify-content-md-center">
        <Col className="text-center">
          <h1>Users Screen</h1>
        </Col>
      </Row>
      <UserGridLayout users={users.users} />
      <ShowMore
        handleShowMore={handleChangePaginationItem}
      />
    </>
  );
};

const EmptyUsers: FunctionComponent = () => {
  return (
    <>
      <Row>
        <Col className="text-center">
          <h1>Users Screen</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p>No users found, try to add them from Create User screen</p>
        </Col>
      </Row>
    </>
  );
};

export default Home;
