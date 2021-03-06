import React, { Component, Fragment, ReactNode } from 'react';
import { Topbar } from '../Topbar/Topbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { Container, Row, Col } from 'reactstrap';

import './Layout.scss';

interface IProps {
  children: ReactNode;
  username?: string;
}

export const Layout = (props: IProps) => (
  <Fragment>
    <Topbar username={props.username} />
    <Container className="mx-0 p-0 margin">
      <Row className="h-100">
        {props.username && (
          <Col md={2}>
            <Sidebar />
          </Col>
        )}
        <Col>{props.children}</Col>
      </Row>
    </Container>
  </Fragment>
);
