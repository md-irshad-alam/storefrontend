import React from 'react';
import { useState } from 'react';
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
function Add_employee_cato() {
  const [smShow, setSmShow] = useState(false);
  const [query, setquery] = useState('');
  const [data, setdata] = useState([]);

  const [EmployeeCategory, setEmployeeCategory] = useState('');
  const [items, setitem] = useState([]);
  const [EmployeeCategoryId, setid] = useState();
  const [modelval, setmodalval] = useState('');
  const [isActive, setActive] = useState(false);
  const history = useNavigate();

  const Fetchdata = () => {
    axios
      .get('http://localhost:3100/api/EmployeeCategory/get-EmployeeCategory')
      .then((res) => {
        console.log(res.data);
        setdata(res.data.EmployeeCategorys);
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  const handlesubmit = () => {
    if (EmployeeCategory) {
      axios
        .post(
          'http://localhost:3100/api/EmployeeCategory/add-EmployeeCategory',
          {
            EmployeeCategory,
            isActive,
          }
        )
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
            searchWords.every((word) =>
              item.EmployeeCategory.toLowerCase().includes(word)
            )
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
      .put(
        `http://localhost:3100/api/EmployeeCategory/update-EmployeeCategory/${EmployeeCategoryId}`,
        {
          EmployeeCategory,
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
  const handledelete = (id) => {
    axios
      .delete(
        `http://localhost:3100/api/EmployeeCategory/delete-EmployeeCategory/${id}`
      )
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
      <h4>Add Employee Category</h4>
      <Card className='p-4 mb-4 mt-4'>
        <Row>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>Category *</Form.Label>
              <Form.Control
                type='text'
                placeholder='Category '
                onChange={(event) => setEmployeeCategory(event.target.value)}
                name='EmployeeCategory'
                value={EmployeeCategory}
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
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {Array.isArray(searchvalue) &&
                searchvalue.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.EmployeeCategory}</td>
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
            Edit Employee Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className='mt-4'>
              <Form.Group className='flex gap-x-4 items-center'>
                <Form.Label>Category </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Category '
                  onChange={(e) => setEmployeeCategory(e.target.value)}
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

export default Add_employee_cato;
