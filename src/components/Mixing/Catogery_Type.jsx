import React from "react";
import { Form, Card, FloatingLabel, Button, Table } from "react-bootstrap";
function Catogery_Type() {
  return (
    <div className="container mt-8">
      <Card.Title>Add Category Type</Card.Title>
      <div className="card w-midcard m-auto p-4">
        <div className="row mb-4">
          <div className="col-8">
            <Form.Control type="text" />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col">
                <Button variant="secondary">save</Button>
              </div>
              <div className="col">
                <Button variant="danger">Cancel</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </div>
          <div className="col">
            <Button variant="primary">Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catogery_Type;
