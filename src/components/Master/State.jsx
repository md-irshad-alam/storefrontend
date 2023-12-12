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
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import axios from 'axios';
function State() {
  const [query, setquery] = useState('');
  const [data, setdata] = useState([]);
  const [items, setitem] = useState([]);
  const [state, setstate] = useState('');
  const [isActive, setActive] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [editId, setEditId] = useState('');
  const [country, setCountry] = useState('');
  const [cntdata, setcntdata] = useState([]);
  const history = useNavigate();
  const Fetchdata = () => {
    axios
      .get(`http://localhost:3000/api/state/get-stateMaster`)
      .then((res) => {
        console.log(res.data);
        setdata(res.data.countries);
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.response.data.message);
      });
  };
  const Fetchcountry = () => {
    axios
      .get(`http://localhost:3000/api/country/get-country`)
      .then((res) => {
        setcntdata(res.data.countries);
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.response.data.message);
      });
  };

  const handlesubmit = () => {
    axios
      .post('http://localhost:3000/api/state/add-stateMaster', {
        state,
        country,
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
  };

  const handlesearch = () => {
    const lowercaseValue = query.toLowerCase();
    const searchWords = lowercaseValue.split(' ');
    const searchResult =
      data.length !== 0
        ? data.filter((item) =>
            searchWords.every((word) => item.state.toLowerCase().includes(word))
          )
        : [];
    setitem(searchResult);
  };

  const editState = () => {
    axios
      .put(`http://localhost:3000/api/state/update-stateMaster/${editId}`, {
        state,
        country,
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

  const handlemodal = (id) => {
    setEditId(id);
    setSmShow(true);
  };

  const deletestate = (id) => {
    axios
      .delete(`http://localhost:3000/api/state/delete-stateMaster/${id}`)
      .then((res) => {
        Fetchdata();
        toast.success(res.data.message);
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  useEffect(() => {
    handlesearch();
  }, [query]);

  useEffect(() => {
    Fetchdata();
    Fetchcountry();
  }, []);
  const getdata = query ? items : data;
  return (
    <Container>
      <h4>Add State</h4>
      <Card className='p-4 mb-4 mt-4'>
        <Row>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Select onChange={(e) => setCountry(e.target.value)}>
                <option value=''>Choose country</option>
                {cntdata !== undefined &&
                  cntdata.map((ele, id) => {
                    return <option value={ele.country}>{ele.country}</option>;
                  })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control
                type='text'
                placeholder='State'
                onChange={(e) => setstate(e.target.value)}
                name='color'
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
            <thead className='p-3 align-middle text-center bg-green-800'>
              <tr>
                <td colSpan={4}>
                  <Form.Control
                    type='text'
                    placeholder='search'
                    onChange={(e) => setquery(e.target.value)}
                    size='sm'
                  />
                </td>
              </tr>
              <tr className=' bg-red-500 '>
                <th>S.No.</th>
                <th>Country</th>
                <th>State</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {getdata !== undefined
                ? getdata.map((item, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.country}</td>
                        <td>{item.state}</td>
                        <td className='flex flex-row gap-x-2 justify-center'>
                          <Button
                            size='sm'
                            onClick={() => handlemodal(item._id)}
                          >
                            <BiEdit />
                          </Button>
                          <Button
                            size='sm'
                            variant='danger'
                            onClick={() => deletestate(item._id)}
                          >
                            <AiOutlineDelete />
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                : 'loding...'}
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
            Edit state
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className='mt-4'>
              <Form.Group className='flex gap-x-4 items-center'>
                <Form.Label>state </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='state'
                  onChange={(e) => setstate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className='mt-4'>
              <Form.Group className='flex gap-x-4 items-center'>
                <Form.Label>Country </Form.Label>
                <Form.Select onChange={(e) => setCountry(e.target.value)}>
                  <option value=''>Choose country</option>
                  {cntdata !== undefined &&
                    cntdata.map((ele, id) => {
                      return <option value={ele.country}>{ele.country}</option>;
                    })}
                </Form.Select>
              </Form.Group>
            </Col>

            <div className='flex justify-end gap-x-4 mt-4'>
              <Button variant='primary' onClick={() => editState()}>
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

export default State;
