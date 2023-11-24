import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Card,
  Form,
  Col,
  Table,
  Button,
  Modal,
} from 'react-bootstrap';

import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
function Store() {
  const [store_name, setStore] = useState('');
  const [remarks, setRemarks] = useState('');
  const [isActive, setActive] = useState(false);
  const [search, setquery] = useState('');
  const [smShow, setSmShow] = useState(false);
  const [data, setdata] = useState([]);
  const [items, setitem] = useState([]);

  const [editId, setEditId] = useState();
  const history = useNavigate();

  const Fetchdata = () => {
    axios
      .get(`http://localhost:3100/api/store/get-store`)
      .then((res) => {
        setdata(res.data.stores);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handlesubmit = () => {
    axios
      .post('http://localhost:3100/api/store/add-store', {
        store_name,
        remarks,
        isActive,
      })
      .then((res) => {
        Fetchdata();
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handlesearch = () => {
    const lowercaseValue = search.toLowerCase();
    const searchWords = lowercaseValue.split(' ');

    const searchResult =
      data.length !== 0
        ? data.filter((item) =>
            searchWords.every((word) =>
              item.store_name.toLowerCase().includes(word)
            )
          )
        : [];

    setitem(searchResult);
  };

  const editStore = () => {
    axios
      .put(`http://localhost:3100/api/store/update-store/${editId}`, {
        store_name,
        remarks,
      })
      .then((res) => {
        toast.success(res.data.message);
        setSmShow(true);
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

  useEffect(() => {
    Fetchdata();
  }, []);

  useEffect(() => {
    handlesearch();
  }, [search]);

  const getdata = search ? items : data;

  return (
    <Container>
      <h4>Store</h4>
      <Card className='p-4 mt-4 mb-4'>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Store</Form.Label>
              <Form.Control
                onChange={(ev) => setStore(ev.target.value)}
                type='text'
                placeholder='store'
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>
                Remarks <span>location</span>
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='remarks / location'
                required
                onChange={(ev) => setRemarks(ev.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className='mt-4 flex gap-x-4'>
            <Button onClick={(e) => handlesubmit()}>submit</Button>
            <Button variant='danger' onClick={() => history('/')}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Card>
      <Card className='p-4'>
        <Row className='mt-4 lg: w-2/4 m-auto mb-4'>
          <Col>
            <Form.Control
              onChange={(e) => setquery(e.target.value)}
              type='text'
              placeholder='search'
              name='search'
            />
          </Col>
        </Row>
        <Row className='mt-4 w-3/4 m-auto '>
          <Col>
            <Table className='m-auto  '>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Store</th>
                  <th>Remarks</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {getdata.length !== 0 ? (
                  getdata.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index === 0 ? index + 1 : index}</td>
                        <td>{item.store_name}</td>
                        <td>{item.remarks}</td>
                        <td>
                          <Button
                            size='sm'
                            onClick={() => handlemodal(item._id)}
                            className='me-2'
                          >
                            <BiEdit />
                          </Button>
                          <Button>
                            <AiOutlineDelete />
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className='text-center '>No Data Found</tr>
                )}
              </tbody>
            </Table>
          </Col>
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
            Edit Store
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className='mt-4'>
              <Form.Group className='flex gap-x-4 items-center'>
                <Form.Label>Store </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Store'
                  name='store_name'
                  onChange={(event) => setStore(event.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className='mt-4'>
              <Form.Group className='flex gap-x-4 items-center'>
                <Form.Label>Remarks </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Remarks'
                  name='remarks'
                  onChange={(event) => setRemarks(event.target.value)}
                />
              </Form.Group>
            </Col>

            <div className='flex justify-end gap-x-4 mt-4'>
              <Button variant='primary' onClick={() => editStore()}>
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

export default Store;
