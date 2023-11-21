import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Form,
  Row,
  Table,
  Modal,
} from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

function EmployeeList() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const handleform = () => {
    console.log("btn clicked ");
    setSmShow(false);
  };
  return (
    <Container>
      <Card className="lg md:xl:w-soloForm p-4 m-auto relative top-20 sm:border-none">
        <Row className="mb-8">
          <Col md={4} className="mt-4">
            <Form.Label>Employee Name</Form.Label>
            <Form.Group>
              <Form.Select>
                <option value={"emp1"}>Emp 1</option>
                <option value={"emp2"}>Emp 1</option>
                <option value={"emp3"}>Emp 1</option>
                <option value={"emp4"}>Emp 1</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4} className="mt-4">
            <Form.Label>mployee Code</Form.Label>
            <Form.Group>
              <Form.Select>
                <option value={"emp1"}>Emp 1</option>
                <option value={"emp2"}>Emp 1</option>
                <option value={"emp3"}>Emp 1</option>
                <option value={"emp4"}>Emp 1</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4} className="mt-4">
            <Form.Label>Designation</Form.Label>
            <Form.Group>
              <Form.Select>
                <option value={"emp1"}>Emp 1</option>
                <option value={"emp2"}>Emp 1</option>
                <option value={"emp3"}>Emp 1</option>
                <option value={"emp4"}>Emp 1</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <div className="flex justify-center gap-x-4  border-none mt-4">
            <Button variant="primary">Search</Button>
            <Button variant="danger">Cancel</Button>
          </div>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Card No.</th>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td> 001</td>
              <td> emp 1</td>
              <td> Supervisor</td>
              <td> normal</td>
              <td>
                {/* <FaEdit onClick={() => setSmShow(true)} className="me-2" /> */}
                <Button
                  size="sm"
                  onClick={() => setSmShow(true)}
                  className="me-2"
                >
                  <FaEdit />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>

      <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Edit Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className="mt-4">
              <Form.Group>
                <Form.Label>Employee Name: </Form.Label>
                <Form.Control type="text" placeholder="Employee Name" />
              </Form.Group>
            </Col>
            <Col md={6} className="mt-4">
              <Form.Group>
                <Form.Label>Card No. </Form.Label>
                <Form.Control type="text" placeholder="Employee Name" />
              </Form.Group>
            </Col>
            <Col md={6} className="mt-4">
              <Form.Group>
                <Form.Label>Designation </Form.Label>
                <Form.Select>
                  <option value={"passer"}>Passer</option>
                  <option value={"Operator"}>Operator</option>
                  <option value={"Supervisor"}>Supervisor</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="mt-4">
              <Form.Group>
                <Form.Label>Category </Form.Label>
                <Form.Select>
                  <option value={"passer"}>Opt 1</option>
                  <option value={"Operator"}>Opt 2</option>
                  <option value={"Supervisor"}>Opt 3</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <div className="flex justify-end gap-x-4 mt-4">
              <Button variant="primary">Submit</Button>
              <Button variant="danger">Cancel</Button>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default EmployeeList;
