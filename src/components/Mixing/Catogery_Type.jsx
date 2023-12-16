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
  const [color, setcolor] = useState('');
  const [isActive, setActive] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [editId, setEditId] = useState('');
  const history = useNavigate();
  const Fetchdata = () => {
    axios
      .get(`http://localhost:3100/api/color/get-color`)
      .then((res) => {
        setdata(res.data.colors);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handlesubmit = () => {
    if (color.length > 1) {
      axios
        .post('http://localhost:3100/api/color/add-color', {
          color,
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
            searchWords.every((word) => item.color.toLowerCase().includes(word))
          )
        : [];
    setitem(searchResult);
  };
  const editColor = () => {
    axios
      .put(`http://localhost:3100/api/color/update-color/${editId}`, {
        color,
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

  const deleteColor = (id) => {
    axios
      .delete(`http://localhost:3100/api/color/delete-color/${id}`)
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
      <h4>Add Colors</h4>
      <Card className='p-4 mb-4 mt-4'>
        <Row>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>Color</Form.Label>
              <Form.Control
                type='text'
                placeholder='Color'
                onChange={(event) => setcolor(event.target.value)}
                name='color'
                value={color}
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
                  Color
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
                        <td>{item.color}</td>
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
                            onClick={() => deleteColor(item._id)}
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
            Edit Color
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className='mt-4'>
              <Form.Group className='flex gap-x-4 items-center'>
                <Form.Label>Color </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Color'
                  name='color'
                  onChange={(event) => setcolor(event.target.value)}
                />
              </Form.Group>
            </Col>

            <div className='flex gap-x-4 mt-4 m-auto justify-center'>
              <Button variant='primary' onClick={() => editColor()}>
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

export default Catogery_Type;
