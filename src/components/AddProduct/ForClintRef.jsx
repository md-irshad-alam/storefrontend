import React, { useState, useRef, useContext } from "react";
import { Form, Col, FloatingLabel, Row } from "react-bootstrap";

import { useStateContext } from "../../contexts/ContextProvider";

function ForClintRef() {
  const { ClintData, SetClintRef } = useStateContext();
  const handleInputFun = (e) => {
    SetClintRef({ ...ClintData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid">
      <h4 className="card-title text-left text-lg mb-4">
        For Client's Reference
      </h4>

      <Row className="mb-4">
        <Col lg={6} md={6} className="mb-4">
          <Form.Label>Logo (R) </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder=""
            onChange={handleInputFun}
            name="logoR"
          />
        </Col>
        <Col lg={6} md={6} className="mb-4">
          <Form.Label> Logo (L)</Form.Label>
          <Form.Control
            type="text"
            onChange={handleInputFun}
            name="logoL"
            required
            placeholder=""
          />
        </Col>

        <Col lg={6} md={6} className="mb-4">
          <Form.Label>Outsole Color </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder=""
            onChange={handleInputFun}
            name="outsolecol"
          />
        </Col>
        <Col lg={6} md={6} className="mb-4">
          <Form.Label>Mid Sole color </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder=""
            onChange={handleInputFun}
            name="midSoleCol"
          />
        </Col>

        <Col lg={6} md={6} className="mb-4">
          <Form.Label>Bottom Color </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder=""
            onChange={handleInputFun}
            name="bottomCol"
          />
        </Col>
        <Col lg={6} md={6} className="mb-4">
          <Form.Label>Side Wall Color </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder=""
            onChange={handleInputFun}
            name="sideWallCol"
          />
        </Col>

        <Col lg={6} md={6} className="mb-4">
          <Form.Label> Heel Color</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder=""
            onChange={handleInputFun}
            name="heelCol"
          />
        </Col>
        <Col lg={6} md={6} className="mb-4" l>
          <Form.Label>Fore Color </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder=""
            onChange={handleInputFun}
            name="forecol"
          />
        </Col>

        <Col lg={6} md={6} className="mb-4">
          <Form.Label>Side Wall & Logo </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder=""
            onChange={handleInputFun}
            name="sideWall"
          />
        </Col>
        <Col lg={6} md={6} className="mb-4">
          <Form.Label>Remarks </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder=""
            onChange={handleInputFun}
            name="remarks"
          />
        </Col>
      </Row>
    </div>
  );
}

export default ForClintRef;
