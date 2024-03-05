import React, { useState, useRef, useContext } from 'react';
import { Form, Col, FloatingLabel, Row } from 'react-bootstrap';
import { saveProduct } from '../../contexts/User';
import { useStateContext } from '../../contexts/ContextProvider';
function ForProductionRef() {
  const { prodData, SetProductionRef } = useStateContext();

  const handleInputFun = (e) => {
    SetProductionRef({ ...prodData, [e.target.name]: e.target.value });
  };

  return (
    <div className='container-fluid'>
      <h4 className='card-title text-left text-lg mb-4'>
        For Production Reference
      </h4>
      <Row className='mb-4'>
        <Col lg={6} md={6} className='mb-4'>
          <Form.Label>Logo (R) </Form.Label>
          <Form.Control
            type='text'
            required
            placeholder=''
            onChange={handleInputFun}
            name='logo_rs'
          />
        </Col>
        <Col lg={6} md={6} className='mb-4'>
          <Form.Label> Logo (L)</Form.Label>
          <Form.Control
            type='text'
            onChange={handleInputFun}
            name='logo_ls'
            required
            placeholder=''
          />
        </Col>

        <Col lg={6} md={6} className='mb-4'>
          <Form.Label>Outsole Color </Form.Label>
          <Form.Control
            type='text'
            required
            placeholder=''
            onChange={handleInputFun}
            name='outsoles'
          />
        </Col>
        <Col lg={6} md={6} className='mb-4'>
          <Form.Label>Mid Sole color </Form.Label>
          <Form.Control
            type='text'
            required
            placeholder=''
            onChange={handleInputFun}
            name='midsoles'
          />
        </Col>

        <Col lg={6} md={6} className='mb-4'>
          <Form.Label>Bottom Color </Form.Label>
          <Form.Control
            type='text'
            required
            placeholder=''
            onChange={handleInputFun}
            name='bottoms'
          />
        </Col>
        <Col lg={6} md={6} className='mb-4'>
          <Form.Label>Side Wall Color </Form.Label>
          <Form.Control
            type='text'
            required
            placeholder=''
            onChange={handleInputFun}
            name='sidewall_color'
          />
        </Col>

        <Col lg={6} md={6} className='mb-4'>
          <Form.Label> Heel Color</Form.Label>
          <Form.Control
            type='text'
            required
            placeholder=''
            onChange={handleInputFun}
            name='heels'
          />
        </Col>
        <Col lg={6} md={6} className='mb-4' l>
          <Form.Label>Fore Color </Form.Label>
          <Form.Control
            type='text'
            required
            placeholder=''
            onChange={handleInputFun}
            name='fores'
          />
        </Col>

        <Col lg={6} md={6} className='mb-4'>
          <Form.Label>Side Wall & Logo </Form.Label>
          <Form.Control
            type='text'
            required
            placeholder=''
            onChange={handleInputFun}
            name='sidewall_colors'
          />
        </Col>
        <Col lg={6} md={6} className='mb-4'>
          <Form.Label>Remarks </Form.Label>
          <Form.Control
            type='text'
            required
            placeholder=''
            onChange={handleInputFun}
            name='remarkss'
          />
        </Col>
      </Row>
    </div>
  );
}

export default ForProductionRef;
