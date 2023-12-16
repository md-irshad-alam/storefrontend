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

function Currency() {
  const [query, setquery] = useState('');
  const [data, setdata] = useState([]);
  const [items, setitem] = useState([]);
  const [isActive, setActive] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [editId, setEditId] = useState('');
  const [Currencyname, setCurrency] = useState();
  const [currencies, setnewcurecy] = useState();
  const history = useNavigate();

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        `https://currencyapi-net.p.rapidapi.com/currencies`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              'c5249bd4bcmsh09c8503b48def54p1d659bjsna7980db23b56',
            'X-RapidAPI-Host': 'currencyapi-net.p.rapidapi.com',
          },
        }
      );
      const data = await response.json();
      const ds = data.currencies;
      setCurrency(ds);
    } catch (error) {
      console.error(error);
    }
  };
  const handlecurecnychange = (event) => {
    let selectedKey = event.target.value;
    const selectedVal = Currencyname[selectedKey];
    const Currencydata = {
      Symbol: selectedKey,
      Currency: selectedVal,
    };
    setnewcurecy(Currencydata);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const Fetchdata = () => {
    axios
      .get(`http://localhost:3100/api/currency/get-Currency`)
      .then((res) => {
        setdata(res.data.countries);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handlesubmit = () => {
    const { Symbol, Currency } = currencies;
    if (Currency.length > 1) {
      axios
        .post('http://localhost:3100/api/currency/add-Currency', {
          Currency,
          Symbol,
          isActive,
        })
        .then((responce) => {
          Fetchdata();
          toast.success(responce.data.message);
        })
        .catch((error) => {
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
              item.Currency.toLowerCase().includes(word)
            )
          )
        : [];
    setitem(searchResult);
  };

  const editCurrency = () => {
    const { Currency, Symbol } = currencies;
    axios
      .put(`http://localhost:3100/api/currency/update-Currency/${editId}`, {
        Currency,
        Symbol,
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

  const deleteCurrency = (id) => {
    axios
      .delete(`http://localhost:3100/api/currency/delete-Currency/${id}`)
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
      <h4>Add Currencys</h4>
      <Card className='p-4 mb-4 mt-4'>
        <Row>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>Currency</Form.Label>
              <Form.Select onChange={handlecurecnychange}>
                <option>choose Currency</option>
                {Currencyname !== undefined
                  ? Object.entries(Currencyname).map(([key, value]) => {
                      return (
                        <option value={key} key={key}>
                          {value}
                        </option>
                      );
                    })
                  : ''}
              </Form.Select>
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
                <th>Symbol</th>
                <th>Currency</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {getdata !== undefined &&
                getdata.map((items, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{items.Symbol}</td>
                      <td>{items.Currency}</td>
                      <td className='flex flex-row gap-x-2 justify-center'>
                        <Button
                          size='sm'
                          onClick={() => handlemodal(items._id)}
                        >
                          <BiEdit />
                        </Button>
                        <Button
                          size='sm'
                          variant='danger'
                          onClick={() => deleteCurrency(items._id)}
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
        size='md'
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby='example-modal-sizes-title-sm'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-sm'>
            Edit Currency
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className='mt-4'>
              <Form.Group className='flex gap-x-4 items-center'>
                <Form.Label>Currency</Form.Label>
                <Form.Select onChange={handlecurecnychange}>
                  <option>choose Currency</option>
                  {Currencyname !== undefined
                    ? Object.entries(Currencyname).map(([key, value]) => {
                        return (
                          <option value={key} key={key}>
                            {value}
                          </option>
                        );
                      })
                    : ''}
                </Form.Select>
              </Form.Group>
            </Col>

            <div className='flex gap-x-4 mt-4 m-auto justify-center'>
              <Button variant='primary' onClick={() => editCurrency()}>
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

export default Currency;
