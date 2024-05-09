import React from 'react';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
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

import axios from 'axios';

function Catogery_Type() {
  const [query, setquery] = useState('');
  const [data, setdata] = useState([]);
  const [items, setitem] = useState([]);
  const [Type, setType] = useState('');
  const [isActive, setActive] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [editId, setEditId] = useState('');
  const [modelval, setmodalval] = useState('');
  const history = useNavigate();
  const Fetchdata = () => {
    axios
      .get(`https://backend-hofa.onrender.com/api/Type/get-Type`)
      .then((res) => {
        console.log(res.data);
        setdata(res.data.countries);
      })
      .catch((error) => {
        console.log('fetch error', error);
      });
  };

  const handlesubmit = () => {
    axios
      .post('https://backend-hofa.onrender.com/api/Type/add-Type', {
        Type,
        isActive,
      })
      .then((responce) => {
        Fetchdata();
        toast.success(responce.data.message);
        setType('');
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handlesearch = () => {
    const lowercaseValue = query.toLowerCase();
    const searchWords = lowercaseValue.split(' ');
    const searchResult =
      data.length !== 0
        ? data.filter((item) =>
            searchWords.every((word) => item.Type.toLowerCase().includes(word))
          )
        : [];
    setitem(searchResult);
  };
  const editType = () => {
    axios
      .put(`https://backend-hofa.onrender.com/api/Type/update-Type/${editId}`, {
        Type,
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

  const handlemodal = (item) => {
    const { Type, _id } = item;
    setEditId(_id);
    setSmShow(true);
    setmodalval(Type);
  };

  const deleteType = (id) => {
    axios
      .delete(`https://backend-hofa.onrender.com/api/Type/delete-Type/${id}`)
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
      <h4>Add Category Type</h4>
      <Card className='p-4 mb-4 mt-4'>
        <Row>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control
                type='text'
                placeholder='Type'
                onChange={(event) => setType(event.target.value)}
                name='Type'
                value={Type}
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
                <th className='flex items-center gap-x-2 justify-around m-auto '>
                  <Form.Control
                    type='text'
                    placeholder='search'
                    onChange={(e) => setquery(e.target.value)}
                    size='sm'
                    style={{ width: '50%' }}
                  />
                  Type
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {getdata !== undefined
                ? getdata.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.Type}</td>
                        <td className='flex flex-row gap-x-2 justify-center'>
                          <Button size='sm' onClick={() => handlemodal(item)}>
                            <BiEdit />
                          </Button>
                          <Button
                            size='sm'
                            variant='danger'
                            onClick={() => deleteType(item._id)}
                          >
                            <AiOutlineDelete />
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                : ''}
            </tbody>
          </Table>
        </Row>
      </Card>
      <Modal
        size='md'
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby='example-modal-sizes-title-sm'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-sm'>
            Edit Category Type
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className='mt-4 w-full'>
              <Form.Group className='flex gap-x-5 w-full items-center'>
                <Form.Label>Category Type </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Type'
                  defaultValue={modelval}
                  name='Type'
                  onChange={(event) => setType(event.target.value)}
                />
              </Form.Group>
            </Col>

            <div className='flex gap-x-4 mt-4 m-auto justify-center'>
              <Button variant='primary' onClick={() => editType()}>
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

export default Catogery_Type;
