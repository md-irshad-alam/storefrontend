import React from "react";
import { Container, Row, Card, Col, Form, Button } from "react-bootstrap";
import SizeWeight from "./AddProduct/Size&weight";

function Add_Stdwt() {
  return (
    <Container>
      <h4>Add Standard Weights</h4>
      <Card className="p-4 mt-4 mb-4">
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Article</Form.Label>
              <Form.Select>
                <option value={"article1"}>article 1</option>
                <option value={"article2"}>article 2</option>
                <option value={"article3"}>article 3</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select>
                <option value={"category1"}>Category 1</option>
                <option value={"category2"}>Category 2</option>
                <option value={"category3"}>Category 3</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Col className="mt-4 flex gap-x-4">
          <Button>search</Button>
          <Button variant="danger">Cancel</Button>
        </Col>
      </Card>
      <Card className="p-4">
        <SizeWeight />
      </Card>
    </Container>
  );
}

export default Add_Stdwt;
