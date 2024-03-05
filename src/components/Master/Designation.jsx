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
function Designation() {
  const [smShow, setSmShow] = useState(false);
  const [query, setquery] = useState('');
  const [data, setdata] = useState([]);
  const [designation, setdigination] = useState('');
  const [setId, setid] = useState();
  const [isActive, setActive] = useState(false);
  const [items, setitems] = useState([]);
  const [modelval, setmodelval] = useState('');
  const history = useNavigate();

  const handlesubmit = () => {
    axios
      .post('http://localhost:3100/api/designation/add-designation', {
        designation,
        isActive,
      })
      .then((res) => {
        toast.success(res.data.message);
        setdigination('');
        Fetchdata();
      })
      .catch((error) => {
        toast.error('Designation add successfully ');
      });
  };

  const Fetchdata = () => {
    axios
      .get('http://localhost:3100/api/designation/get-designation')
      .then((res) => {
        setdata(res.data.designations);
      })
      .catch((error) => console.log(error));
  };

  const hndleDelete = (id) => {
    axios
      .delete(` http://localhost:3100/api/designation/delete-designation/${id}`)
      .then((res) => {
        toast.success(res.data.message);
        Fetchdata();
      })
      .catch((error) => toast.error('Faild to Delete designation'));
  };

  const handleedit = () => {
    axios
      .put(
        `http://localhost:3100/api/designation/update-designation/${setId}`,
        {
          designation,
        }
      )
      .then((res) => {
        Fetchdata();
        setSmShow(false);
        toast.success(res.data.message);
      })
      .catch((error) => toast.error('faild to edit designation !'));
  };

  const handlesearch = () => {
    const lowercaseValue = query.toLowerCase();
    const searchWords = lowercaseValue.split(' ');
    const searchResult =
      data.length !== 0
        ? data.filter((item) =>
            searchWords.every((word) =>
              item.designation.toLowerCase().includes(word)
            )
          )
        : [];
    setitems(searchResult);
  };

  const handlemodal = (item) => {
    const { designation, _id } = item;
    setid(_id);
    setSmShow(true);
    setmodelval(designation);
  };

  const searchvalue = query ? items : data;

  useEffect(() => {
    handlesearch();
  }, [query]);

  useEffect(() => {
    Fetchdata();
  }, []);

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
                onChange={(e) => setdigination(e.target.value)}
                name='color'
                value={designation}
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
                    <tr key={index}>
                      <td>{index + 1}</td>

                      <td>{item.designation}</td>
                      <td className='flex flex-row gap-x-2 justify-center'>
                        <Button size='sm' onClick={() => handlemodal(item)}>
                          <BiEdit />
                        </Button>
                        <Button
                          size='sm'
                          variant='danger'
                          onClick={() => hndleDelete(item._id)}
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
                  defaultValue={modelval}
                  onChange={(e) => setdigination(e.target.value)}
                />
              </Form.Group>
            </Col>

            <div className='flex justify-end gap-x-4 mt-4'>
              <Button variant='primary' onClick={() => handleedit()} size='sm'>
                Submit
              </Button>
              <Button
                variant='danger'
                size='sm'
                onClick={() => setSmShow(false)}
              >
                Cancel
              </Button>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Designation;
