import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Table,
  Button,
  Modal,
} from 'react-bootstrap';

import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  AddCountry,
  AddDesignation,
  EditCountry,
  EditDesignation,
} from '../../Redux/Actions';

import { BiEdit } from 'react-icons/bi';
function Designation() {
  const [smShow, setSmShow] = useState(false);
  const [query, setquery] = useState('');
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();
  const [inputval, setinputval] = useState('');
  const [countryId, setid] = useState();
  const [modelval, setmodalval] = useState('');
  const history = useNavigate();

  const storedaa = useSelector((item) => item.designation);

  const handlechange = (event) => {
    const data = {
      id: Math.floor(100 + Math.random() * 900),
      designation: event.target.value,
    };
    setinputval(data);
  };

  const handlesubmit = () => {
    dispatch(AddDesignation(inputval));
    if (inputval.country.length > 1) {
      toast.success('Color added suessfully ', {
        position: 'bottom-right',
      });
    } else {
      toast.warn('invalid input ', {
        position: 'bottom-right',
      });
    }
  };
  const handlesearch = () => {
    const lowercaseValue = query.toLowerCase();
    const searchResult = storedaa.filter((item) =>
      item.designation.toLowerCase().includes(lowercaseValue)
    );

    setdata(searchResult);
  };
  const handlemodal = (id) => {
    setid(id);
    setSmShow(true);
  };

  const handleCountryedit = () => {
    dispatch(EditDesignation(countryId, modelval));
    setSmShow(false);
  };

  const searchvalue = query ? data : storedaa;
  console.log(searchvalue);
  useEffect(() => {
    handlesearch();
  }, [query]);
  return (
    <Container>
      <h4>Add Designation</h4>
      <Card className='p-4 mb-4 mt-4'>
        <Row>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type='text'
                placeholder='Designation'
                onChange={handlechange}
                name='color'
                value={inputval.color}
              />
            </Form.Group>
          </Col>
          <Col className='flex gap-x-4 justify-center mt-4' md={12} lg={6}>
            <Button onClick={() => handlesubmit()}>save</Button>
            <Button variant='danger' onClick={(e) => history('/')}>
              cancel
            </Button>
          </Col>
        </Row>
      </Card>
      <Card className='p-4 mt-4'>
        <Row>
          <Table bordered>
            <thead className='p-3 align-middle text-center'>
              <tr className=' bg-red-500 '>
                <th>S.No.</th>
                <th className='flex items-center '>
                  <Form.Control
                    type='text'
                    placeholder='search'
                    onChange={(e) => setquery(e.target.value)}
                    size='sm'
                    className='search_input'
                  />
                  Designation
                </th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {Array.isArray(searchvalue) &&
                searchvalue.map((item, index) => {
                  return (
                    <tr>
                      <td>{index === 0 ? index + 1 : index + 1}</td>

                      <td>{item.designation}</td>
                      <td>
                        <Button
                          size='sm'
                          onClick={() => handlemodal(item.id)}
                          className='me-2'
                        >
                          <BiEdit />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
      </Card>
      <Modal
        size='lg'
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby='example-modal-sizes-title-sm'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-sm'>
            Edit Country
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className='mt-4'>
              <Form.Group className='flex gap-x-4 items-center'>
                <Form.Label>Country </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Country'
                  onChange={(e) => setmodalval(e.target.value)}
                />
              </Form.Group>
            </Col>

            <div className='flex justify-end gap-x-4 mt-4'>
              <Button variant='primary' onClick={() => handleCountryedit()}>
                Submit
              </Button>
              <Button variant='danger'>Cancel</Button>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Designation;
