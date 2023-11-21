import React from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  CardHeader,
} from "react-bootstrap";

function AddEmployee() {
  return (
    <Container>
      <Card className="lg md:xl:w-soloForm p-4 m-auto relative top-20 sm:border-none">
        <h4 className="card-header">Add Employee</h4>
        <Row>
          <Col lg={6} md={6} className="mt-4">
            <Form.Group>
              <Form.Label>Employee Name: </Form.Label>
              <Form.Control type="text" placeholder="Employee Name" />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} className="mt-4">
            <Form.Group>
              <Form.Label>Card No. </Form.Label>
              <Form.Control type="text" placeholder="Employee Name" />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} className="mt-4">
            <Form.Group>
              <Form.Label>Designation </Form.Label>
              <Form.Select>
                <option value={"passer"}>Passer</option>
                <option value={"Operator"}>Operator</option>
                <option value={"Supervisor"}>Supervisor</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col lg={6} md={6} className="mt-4">
            <Form.Group>
              <Form.Label>Category </Form.Label>
              <Form.Select>
                <option value={"passer"}>Opt 1</option>
                <option value={"Operator"}>Opt 2</option>
                <option value={"Supervisor"}>Opt 3</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <div className="flex justify-center gap-x-4 mt-4">
          <Button variant="primary">Submit</Button>
          <Button variant="danger">Cancel</Button>
        </div>
      </Card>
    </Container>
  );
}

export default AddEmployee;
