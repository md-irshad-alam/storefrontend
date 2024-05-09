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

function Country() {
  const [query, setquery] = useState('');
  const [data, setdata] = useState([]);
  const [items, setitem] = useState([]);
  const [country, setCountry] = useState('');
  const [isActive, setActive] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [editId, setEditId] = useState('');
  const [modelval, setmodelval] = useState('');
  const history = useNavigate();
  const Fetchdata = () => {
    axios
      .get(`https://backend-hofa.onrender.com/api/country/get-country`)
      .then((res) => {
        setdata(res.data.countries);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlesubmit = () => {
    if (country.length > 1) {
      axios
        .post('https://backend-hofa.onrender.com/api/country/add-country', {
          country,
          isActive,
        })
        .then((responce) => {
          console.log(responce.data.country._id);
          localStorage.setItem('countryId', responce.data.country._id);
          Fetchdata();
          setCountry('');
          toast.success(responce.data.message);
        })
        .catch((error) => {
          toast.error('faild to add country');
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
              item.country.toLowerCase().includes(word)
            )
          )
        : [];
    setitem(searchResult);
  };

  const editcountry = () => {
    axios
      .put(
        `https://backend-hofa.onrender.com/api/country/update-country/${editId}`,
        {
          country,
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
    const { country, _id } = item;
    setEditId(_id);
    setSmShow(true);
    setmodelval(country);
  };

  const deletecountry = (id) => {
    axios
      .delete(
        `https://backend-hofa.onrender.com/api/country/delete-country/${id}`
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
      <h4>Add Country</h4>
      <Card className='p-4 mb-4 mt-4'>
        <Row>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type='text'
                placeholder='Country'
                onChange={(event) => setCountry(event.target.value)}
                name='country'
                value={country}
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
                <th className='flex items-center '>
                  <Form.Control
                    type='text'
                    placeholder='search'
                    onChange={(e) => setquery(e.target.value)}
                    size='sm'
                    className='search_input'
                  />
                  Country
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {getdata !== undefined
                ? getdata.map((item, index) => {
                    return (
                      <tr>
                        <td>{index === 0 ? index + 1 : index + 1}</td>
                        <td>{item.country}</td>
                        <td className='flex flex-row gap-x-2 justify-center'>
                          <Button size='sm' onClick={() => handlemodal(item)}>
                            <BiEdit />
                          </Button>
                          <Button
                            size='sm'
                            variant='danger'
                            onClick={() => deletecountry(item._id)}
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
                  defaultValue={modelval}
                  placeholder='Country'
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Form.Group>
            </Col>

            <div className='flex justify-end gap-x-4 mt-4'>
              <Button variant='primary' onClick={() => editcountry()}>
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

export default Country;
