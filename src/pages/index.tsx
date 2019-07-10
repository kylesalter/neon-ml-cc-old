// import { Link } from 'gatsby';
import React from 'react';
import classNames from 'classNames';
import {
  Button,
  ButtonGroup,
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Progress,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  Container,
} from 'reactstrap';

import Layout from '../components/layout';

const IndexPage: React.FC = props => {
  return (
    <Layout location={props.location}>
      <Container>
        <Row>
          <Col xs="12">
            <Card>
              <CardBody style={{ width: '100%' }}>
                <CardTitle tag="h2">Welcome to Neon! 💚</CardTitle>
                <CardSubtitle>The best MapleLegends guild ever.</CardSubtitle>
                <CardText>
                  <p style={{ paddingTop: '10px' }}>
                    Welcome to Neon, a gaming community for{' '}
                    <a href="https://maplelegends.com">MapleLegends</a>.
                  </p>
                  <p>
                    Our community is full and welcoming of players of all levels
                    and skill. Our goal is to become the best bossing guild on
                    MapleLegends and are actively seeking compatible members!
                  </p>
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody style={{ width: '100%' }}>
                <CardTitle tag="h2">Join our Discord! 💚</CardTitle>
                <CardSubtitle>We don't bite.</CardSubtitle>
                <CardText>
                  <p style={{ paddingTop: '10px' }}>
                    If you are a considerate member of the MapleLegends
                    community, like to communicate over voice, and enjoy a
                    dedicated MapleLegends gaming atmosphere, we'd love to talk
                    to you.
                  </p>
                  <iframe
                    src="https://discordapp.com/widget?id=597656508490055691&theme=dark"
                    width="100%"
                    allowTransparency
                    style={{ height: 'calc(50vh)' }}
                    frameBorder="0"
                  ></iframe>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
