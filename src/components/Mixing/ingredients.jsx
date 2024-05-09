import React from 'react';
import { useReducer } from 'react';
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

import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { BiEdit } from 'react-icons/bi';
import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';

function Ingredients() {
  const [smShow, setSmShow] = useState(false);
  const [query, setquery] = useState('');
  const [data, setdata] = useState([]);
  const [Ingredient, setgredient] = useState('');
  const [Details, setdetails] = useState('');
  const [graidId, setid] = useState();
  const [items, setitem] = useState([]);
  const [isActive, setActive] = useState(false);
  const [modelva11, setmodelval1] = useState('');
  const [modelva12, setmodelval2] = useState('');
  const history = useNavigate();

  const handlechange = (event) => {
    setinputval({ [event.target.name]: event.target.value });
  };

  const Fetchdata = () => {
    axios
      .get('https://backend-hofa.onrender.com/api/Ingredient/get-Ingredient')
      .then((res) => {
        setdata(res.data.Ingredients);
      })
      .catch((error) => toast.error('someting went to wrong '));
  };

  const handlesubmit = () => {
    axios
      .post('https://backend-hofa.onrender.com/api/Ingredient/add-Ingredient', {
        Ingredient,
        Details,
        isActive,
      })
      .then((res) => {
        toast.success(res.data.message);
        Fetchdata();
        setgredient('');
        setdetails('');
      })
      .catch((error) => {
        console.log(error.responce);
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
              item.Ingredient.toLowerCase().includes(word)
            )
          )
        : [];
    setitem(searchResult);
  };

  const handlemodal = (item) => {
    const { Ingredient, Details, _id } = item;
    setid(_id);
    setSmShow(true);
    setmodelval1(Ingredient);
    setmodelval2(Details);
  };

  const handleCountryedit = () => {
    axios
      .put(
        `https://backend-hofa.onrender.com/api/Ingredient/update-Ingredient/${graidId}`,
        {
          Ingredient,
          Details,
        }
      )
      .then((res) => {
        console.log(res);
        Fetchdata();
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Already exit, please try with new ');
      });
    setSmShow(false);
  };

  const handledelete = (id) => {
    axios
      .delete(
        `https://backend-hofa.onrender.com/api/Ingredient/delete-Ingredient/${id}`
      )
      .then((res) => {
        toast.success(res.data.message);
        Fetchdata();
      })
      .catch((error) => toast.error(error.data.responce.message));
  };

  const searchvalue = query ? items : data;
  console.log(searchvalue);

  useEffect(() => {
    handlesearch();
  }, [query]);

  useEffect(() => {
    Fetchdata();
  }, []);

  return (
    <Container>
      <h4>Add Ingredient</h4>
      <Card className='p-4 mb-4 mt-4'>
        <Row>
          <Col md={12} lg={6} className='mb-4'>
            <Form.Group>
              <Form.Label>
                Ingredient <span className='text-red-600'>*</span>{' '}
              </Form.Label>
              <Form.Control
                type='text'
                onChange={(e) => setgredient(e.target.value)}
                name='Ingredient'
                value={Ingredient}
              />
            </Form.Group>
          </Col>
          <Col md={12} lg={6} className=''>
            <Form.Group>
              <Form.Label>
                Details <span className='text-red-600'>*</span>{' '}
              </Form.Label>
              <Form.Control
                type='text'
                onChange={(event) => setdetails(event.target.value)}
                name='Details'
                value={Details}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className='flex gap-x-4 justify-end items-center mt-4'>
          <Button onClick={() => handlesubmit()}>save</Button>
          <Button variant='danger' onClick={(e) => history('/')}>
            cancel
          </Button>
        </div>
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
                  ingredients
                </th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {searchvalue.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.Ingredient}</td>
                    <td>{item.Details}</td>
                    <td className='flex flex-row gap-x-2 justify-center'>
                      <Button size='sm' onClick={() => handlemodal(item)}>
                        <BiEdit />
                      </Button>
                      <Button
                        size='sm'
                        variant='danger'
                        onClick={() => handledelete(item._id)}
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
            Edit Ingredient
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className='mt-4'>
              <Form.Group className='flex gap-x-4 items-center'>
                <Form.Label>Ingredient</Form.Label>
                <Form.Control
                  type='text'
                  defaultValue={modelva11}
                  onChange={(e) => setgredient(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className='mt-4'>
              <Form.Group className='flex gap-x-4 items-center'>
                <Form.Label>Details</Form.Label>
                <Form.Control
                  type='text'
                  defaultValue={modelva12}
                  onChange={(e) => setdetails(e.target.value)}
                />
              </Form.Group>
            </Col>

            <div className='flex justify-end gap-x-4 mt-4'>
              <Button variant='primary' onClick={() => handleCountryedit()}>
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

export default Ingredients;
