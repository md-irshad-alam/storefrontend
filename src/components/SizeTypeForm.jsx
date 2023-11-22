import React from "react";
import { Form, Row, Col, Card, FloatingLabel } from "react-bootstrap";

function SizeTypeForm() {
  return (
    <div className="mt-4 mb-4">
      <div className="row mb-4">
        <Card.Title>
          <Form.Group>
            <Form.Check type="radio" label="SINGLE" width="0px" />
          </Form.Group>
        </Card.Title>
        <div className="col">
          <Form.Label>Size</Form.Label>
          <Form.Control type="number" required />
        </div>
        <div className="col">
          <Form.Label>Rate</Form.Label>
          <Form.Control type="number" required />
        </div>
        <div className="col">
          <Form.Label>Mould</Form.Label>
          <Form.Control type="number" required />
        </div>
        <div className="col">
          <Form.Label>Outsole Wt.(kg)</Form.Label>
          <Form.Control type="number" required />
        </div>
        <div className="col">
          <Form.Label>Side Wall Wt.(kg)</Form.Label>
          <Form.Control type="number" required />
        </div>

        <div className="col">
          <Form.Label>Bottom Wt.(kg)</Form.Label>
          <Form.Control type="number" required />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <Form.Label>Logo(L) Wt(kg)</Form.Label>
          <Form.Control type="file" required />
        </div>
        <div className="col">
          <Form.Label>Logo(R) Wt(kg)</Form.Label>
          <Form.Control type="file" required />
        </div>
        <div className="col">
          <Form.Label>Side Wall & Logo Wt(kg)</Form.Label>
          <Form.Control type="file" required />
        </div>
        <div className="col">
          <Form.Label>Group ID</Form.Label>
          <Form.Control type="number" required />
        </div>
        <div className="col">
          <Form.Label>WL-22-1</Form.Label>
          <Form.Control type="number" required />
        </div>
      </div>
      {/* second input/output */}
      <div className="row mb-4">
        <Card.Title>
          <Form.Group>
            <Form.Check type="radio" label="INNER/OUTER" width="0px" />
          </Form.Group>
        </Card.Title>
        <div className="col">
          <Form.Label>Size</Form.Label>
          <Form.Control type="number" required />
        </div>
        <div className="col">
          <Form.Label>Rate</Form.Label>
          <Form.Control type="number" required />
        </div>
        <div className="col">
          <Form.Label>Mould</Form.Label>
          <Form.Control type="number" required />
        </div>
        <div className="col">
          <Form.Label>Outsole Wt.(kg)</Form.Label>
          <Form.Control type="number" required />
        </div>
        <div className="col">
          <Form.Label>Side Wall Wt.(kg)</Form.Label>
          <Form.Control type="number" required />
        </div>

        <div className="col">
          <Form.Label>Bottom Wt.(kg)</Form.Label>
          <Form.Control type="number" required />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <Form.Label>Logo(L) Wt(kg)</Form.Label>
          <Form.Control type="file" required />
        </div>
        <div className="col">
          <Form.Label>Logo(R) Wt(kg)</Form.Label>
          <Form.Control type="file" required />
        </div>
        <div className="col">
          <Form.Label>Side Wall & Logo Wt(kg)</Form.Label>
          <Form.Control type="file" required />
        </div>
        <div className="col">
          <Form.Label>Group ID</Form.Label>
          <Form.Control type="number" required />
        </div>
        <div className="col">
          <Form.Label>WL-22-1</Form.Label>
          <Form.Control type="number" required />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form.Group className="mb-4">
            <FloatingLabel label="No of pairs manufactured per hour">
              <Form.Control type="text" required placeholder="" />
            </FloatingLabel>
          </Form.Group>
        </div>
        <div className="col">
          <Form.Group className="mb-4">
            <FloatingLabel label="Target (22 Hrs)">
              <Form.Control type="text" required placeholder="" />
            </FloatingLabel>
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form.Group className="mb-4">
            <FloatingLabel label="Dummy Moulds">
              <Form.Control
                type="text"
                required
                placeholder="8-8, 6.5-7, 11/2, 8-8"
              />
            </FloatingLabel>
          </Form.Group>
        </div>
        <div className="col md-col-6">
          <Form.Group className="mb-4">
            <FloatingLabel label="Store">
              <Form.Select aria-label="Default select example">
                <option>select menu</option>
                <option value="1">Rm</option>
                <option value="2">PM</option>
                <option value="3">Main</option>
                <option value="4">Lab</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </div>
      </div>
      {/* <TableAccess/> */}
    </div>
  );
}

export default SizeTypeForm;
