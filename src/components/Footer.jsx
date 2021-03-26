import { Col, Container, Row } from "react-bootstrap";
import "../style/Footer.css";

const Footer = () => {
  return (
    <>
      {/* <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="row">
              <div className="col-4">Col1</div>
              <div className="col-4">col2</div>
              <div className="col-4">col3</div>
            </div>
            <div className="row">
              <div className="col text-align-right">
                <p>Text aligned</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Container fluid>
        <Row>
          <Col xs={{ span: 6, offset: 3 }}>
            <Row>
              <span>Icons Here</span>
            </Row>
            <Row>
              <Col xs={3}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti.
                </p>
              </Col>
              <Col xs={3}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti.
                </p>
              </Col>
              <Col xs={3}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti.
                </p>
              </Col>
              <Col xs={3}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>Bottom line</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
