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
import { BiEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
function Heels() {
  const [query, setquery] = useState('');
  const [data, setdata] = useState([]);
  const [items, setitem] = useState([]);
  const [HeelCategory, setHeelCategory] = useState('');
  const [isActive, setActive] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [editId, setEditId] = useState('');
  const [modelval, setmodelval] = useState('');
  const history = useNavigate();
  const Fetchdata = () => {
    axios
      .get(`http://localhost:3100/api/HeelCategory/get-HeelCategory`)
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
    if (HeelCategory.length > 1) {
      axios
        .post('http://localhost:3100/api/HeelCategory/add-HeelCategory', {
          HeelCategory,
          isActive,
        })
        .then((responce) => {
          Fetchdata();
          toast.success(responce.data.message);
          setHeelCategory('');
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
            searchWords.every((word) =>
              item.HeelCategory.toLowerCase().includes(word)
            )
          )
        : [];
    setitem(searchResult);
  };

  const editHeelCategory = () => {
    axios
      .put(
        `http://localhost:3100/api/HeelCategory/update-HeelCategory/${editId}`,
        {
          HeelCategory,
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
    const { HeelCategory, _id } = item;
    setEditId(_id);
    setSmShow(true);
    setmodelval(HeelCategory);
  };

  const deleteHeelCategory = (id) => {
    axios
      .delete(
        `http://localhost:3100/api/HeelCategory/delete-HeelCategory/${id}`
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
      <h4>Heel Category</h4>
      <Card className='p-4 mb-4 mt-4'>
        <Row>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>Add Heel Category* </Form.Label>
              <Form.Control
                type='text'
                placeholder='heel'
                onChange={(e) => setHeelCategory(e.target.value)}
                name='color'
                value={HeelCategory}
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
                  Heel
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

                      <td>{item.HeelCategory}</td>
                      <td className='flex flex-row gap-x-2 justify-center'>
                        <Button size='sm' onClick={() => handlemodal(item)}>
                          <BiEdit />
                        </Button>
                        <Button
                          size='sm'
                          variant='danger'
                          onClick={() => deleteHeelCategory(item._id)}
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
            Edit HeelCategory
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className='mt-4'>
              <Form.Group className='flex gap-x-4 items-center'>
                <Form.Label>HeelCategory </Form.Label>
                <Form.Control
                  type='text'
                  defaultValue={modelval}
                  placeholder='HeelCategory'
                  onChange={(e) => setHeelCategory(e.target.value)}
                />
              </Form.Group>
            </Col>

            <div className='flex justify-end gap-x-4 mt-4'>
              <Button variant='primary' onClick={() => editHeelCategory()}>
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

export default Heels;
