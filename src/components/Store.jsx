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
} from 'react-bootstrap';

import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
function Store() {
  const [store_name, setStore] = useState('');
  const [remarks, setRemarks] = useState('');
  const [isActive, setActive] = useState(false);
  const [query, setquery] = useState('');

  const [data, setdata] = useState([]);
  const [items, setitem] = useState([]);
  const history = useNavigate();

  const handlesubmit = () => {
    axios
      .post('https://erp-backend-ditn.onrender.com/api/store/add-store', {
        store_name,
        remarks,
        isActive,
      })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handlesearch = () => {
    if (query.length > 1) {
      const lowercaseValue = query.toLowerCase();
      const searchResult =
        data.length != 0
          ? data.filter((item) =>
              data.store_name.toLowerCase().includes(lowercaseValue)
            )
          : data.filter((item) =>
              item.store_name.toLowerCase().includes(lowercaseValue)
            );
      setitem(searchResult);
    }
  };

  const editStore = () => {
    axios
      .put('http://localhost:3100/api/store/update-store', {
        store_name,
      })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    axios
      .get('https://erp-backend-ditn.onrender.com/api/store/get-store')
      .then((res) => {
        setdata(res.data);
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  }, [data]);

  useEffect(() => {
    handlesearch();
  }, [query]);

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
                </tr>
              </thead>
              <tbody>
                {/* {searchvalue.length !== 0 ? (
                  searchvalue.map((item, index) => {
                    return (
                      <tr>
                        <td>{index === 0 ? index + 1 : index}</td>
                        <td>{item.store}</td>
                        <td>{item.remarks}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="text-center ">No Data Found</tr>
                )} */}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Store;
