import React, { FunctionComponent } from 'react';
import Navigation from '../Navigation/Navigation';
import { Container } from 'react-bootstrap';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Container fluid style={containerStyle}>
        <Navigation />
        {children}
      </Container>
      <div style={bottomStyle} id="bottom"></div>
    </>
  );
};

const containerStyle = {
  minHeight: '100vh',
  flex: 1,
};

const bottomStyle = {
  height: '1px'
}

export default Layout;
