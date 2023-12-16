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
import { AiOutlineDelete } from 'react-icons/ai';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { BiEdit } from 'react-icons/bi';
import axios from 'axios';
function UOM() {
  const [smShow, setSmShow] = useState(false);
  const [query, setquery] = useState('');
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();
  const [UOM, setuom] = useState('');
  const [items, setitem] = useState([]);
  const [uomId, setid] = useState();
  const [modelval, setmodalval] = useState('');
  const [isActive, setActive] = useState(false);
  const history = useNavigate();

  const Fetchdata = () => {
    axios
      .get('http://localhost:3100/api/UOM/get-UOM')
      .then((res) => {
        setdata(res.data.countries);
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  const handlesubmit = () => {
    if (UOM) {
      axios
        .post('http://localhost:3100/api/UOM/add-UOM', {
          UOM,
          isActive,
        })
        .then((responce) => {
          Fetchdata();
          toast.success(responce.data.message);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
        });
    } else {
      toast.warn('invalid input ');
    }
  };

  const handlesearch = () => {
    const lowercaseValue = query.toLowerCase();
    const searchWords = lowercaseValue.split(' ');
    const searchResult =
      data.length !== 0
        ? data.filter((item) =>
            searchWords.every((word) => item.UOM.toLowerCase().includes(word))
          )
        : [];

    setitem(searchResult);
  };

  const handlemodal = (id) => {
    setid(id);
    setSmShow(true);
  };

  const handleCountryedit = () => {
    axios
      .put(`http://localhost:3100/api/UOM/update-UOM/${uomId}`, {
        UOM,
      })
      .then((res) => {
        toast.success(res.data.message);
        setSmShow(false);
        Fetchdata();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  const handledelete = (id) => {
    axios
      .delete(`http://localhost:3100/api/UOM/delete-UOM/${id}`)
      .then((res) => {
        toast.success(res.data.message);
        Fetchdata();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    handlesearch();
  }, [query]);

  useEffect(() => {
    Fetchdata();
  }, []);

  const searchvalue = query ? items : data;

  return (
    <Container>
      <h4>Add UOM</h4>
      <Card className='p-4 mb-4 mt-4'>
        <Row>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>UOM</Form.Label>
              <Form.Control
                type='text'
                placeholder='UOM'
                onChange={(event) => setuom(event.target.value)}
                name='UOM'
                value={UOM}
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
              <tr className='  '>
                <th>S.No.</th>
                <th className='flex items-center '>
                  <Form.Control
                    type='text'
                    placeholder='search'
                    onChange={(e) => setquery(e.target.value)}
                    size='sm'
                    className='search_input'
                  />
                  UOM
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {Array.isArray(searchvalue) &&
                searchvalue.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>

                      <td>{item.UOM}</td>
                      <td>
                        <Button
                          size='sm'
                          onClick={() => handlemodal(item._id)}
                          className='me-2'
                        >
                          <BiEdit />
                        </Button>
                        <Button
                          size='sm'
                          variant='danger'
                          onClick={() => handledelete(item._id)}
                          className='me-2'
                        >
                          <AiOutlineDelete />
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
                  onChange={(e) => setuom(e.target.value)}
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

export default UOM;
