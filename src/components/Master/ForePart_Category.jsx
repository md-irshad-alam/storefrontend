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
function ForePart_category() {
  const [query, setquery] = useState('');
  const [data, setdata] = useState([]);
  const [items, setitem] = useState([]);
  const [ForePartCategory, setforpart] = useState('');
  const [isActive, setActive] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [editId, setEditId] = useState('');
  const [modelval, setmodelval] = useState('');

  const history = useNavigate();
  const Fetchdata = () => {
    axios
      .get(
        `https://backend-hofa.onrender.com/api/ForePartCategory/get-ForePartCategory`
      )
      .then((res) => {
        console.log(res.data);
        setdata(res.data.countries);
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.response.data.message);
      });
  };
  const handlesubmit = () => {
    axios
      .post(
        'https://backend-hofa.onrender.com/api/ForePartCategory/add-ForePartCategory',
        {
          ForePartCategory,
          isActive,
        }
      )
      .then((responce) => {
        Fetchdata();
        setforpart('');
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
            searchWords.every((word) =>
              item.ForePartCategory.toLowerCase().includes(word)
            )
          )
        : [];
    setitem(searchResult);
  };

  const editForePartCategory = () => {
    axios
      .put(
        `https://backend-hofa.onrender.com/api/ForePartCategory/update-ForePartCategory/${editId}`,
        {
          ForePartCategory,
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setSmShow(false);
        Fetchdata();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handlemodal = (item) => {
    const { ForePartCategory, _id } = item;
    setEditId(_id);
    setSmShow(true);
    setmodelval(ForePartCategory);
  };

  const deleteForePartCategory = (id) => {
    axios
      .delete(
        `https://backend-hofa.onrender.com/api/ForePartCategory/delete-ForePartCategory/${id}`
      )
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
  }, []);
  const getdata = query ? items : data;
  return (
    <Container>
      <h4>ForePart Category</h4>
      <Card className='p-4 mb-4 mt-4'>
        <Row>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>ForePart Category</Form.Label>
              <Form.Control
                type='text'
                onChange={(ev) => setforpart(ev.target.value)}
                name='forpart'
                value={ForePartCategory}
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
              <tr className=' bg-red-500 '>
                <th>S.No.</th>

                <th className='flex items-center'>
                  <Form.Control
                    type='text'
                    placeholder='search'
                    onChange={(e) => setquery(e.target.value)}
                    size='sm'
                    className='search_input'
                  />
                  ForePart Category
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {getdata !== undefined &&
                getdata.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>

                      <td>{item.ForePartCategory}</td>
                      <td className='flex flex-row gap-x-2 justify-center'>
                        <Button size='sm' onClick={() => handlemodal(item)}>
                          <BiEdit />
                        </Button>
                        <Button
                          size='sm'
                          variant='danger'
                          onClick={() => deleteForePartCategory(item._id)}
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
            Edit ForePart Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className='mt-4'>
              <Form.Group className='flex gap-x-4 items-center'>
                <Form.Label>ForePart </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='ForePartCategory'
                  defaultValue={modelval}
                  onChange={(e) => setforpart(e.target.value)}
                />
              </Form.Group>
            </Col>

            <div className='flex justify-end gap-x-4 mt-4'>
              <Button variant='primary' onClick={() => editForePartCategory()}>
                Submit
              </Button>
              <Button variant='danger' onClick={() => setSmShow(false)}>
                Cancel
              </Button>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default ForePart_category;
