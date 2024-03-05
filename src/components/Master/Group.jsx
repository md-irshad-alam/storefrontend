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
import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
function GroupMaster() {
  const [query, setquery] = useState('');
  const [data, setdata] = useState([]);
  const [items, setitem] = useState([]);
  const [group_name, setArticleGroupMaster] = useState('');
  const [isActive, setActive] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [editId, setEditId] = useState('');
  const [modelval, setmodelval] = useState('');
  const history = useNavigate();
  const Fetchdata = () => {
    axios
      .get(
        `http://localhost:3100/api/ArticleGroupMaster/get-ArticleGroupMaster`
      )
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
    if (group_name.length > 1) {
      axios
        .post(
          'http://localhost:3100/api/ArticleGroupMaster/add-ArticleGroupMaster',
          {
            group_name,
            isActive,
          }
        )
        .then((responce) => {
          Fetchdata();
          setArticleGroupMaster('');
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
              item.group_name.toLowerCase().includes(word)
            )
          )
        : [];
    setitem(searchResult);
  };

  const editArticleGroupMaster = () => {
    axios
      .put(
        `http://localhost:3100/api/ArticleGroupMaster/update-ArticleGroupMaster/${editId}`,
        {
          group_name,
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
    const { group_name, _id } = item;
    setEditId(_id);
    setSmShow(true);
    setmodelval(group_name);
  };

  const deleteArticleGroupMaster = (id) => {
    axios
      .delete(
        `http://localhost:3100/api/ArticleGroupMaster/delete-ArticleGroupMaster/${id}`
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
      <h4>Add Group</h4>
      <Card className='p-4 mb-4 mt-4'>
        <Row>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>Group Name </Form.Label>
              <Form.Control
                type='text'
                placeholder='group'
                onChange={(e) => setArticleGroupMaster(e.target.value)}
                name='color'
                value={group_name}
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
              <tr className=''>
                <th>S.No.</th>

                <th className='flex items-center'>
                  <input
                    type='text'
                    placeholder='search'
                    onChange={(e) => setquery(e.target.value)}
                    className='search_input'
                  />
                  Group Name
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

                      <td>{item.group_name}</td>
                      <td className='flex flex-row gap-x-2 justify-center'>
                        <Button size='sm' onClick={() => handlemodal(item)}>
                          <BiEdit />
                        </Button>
                        <Button
                          size='sm'
                          variant='danger'
                          onClick={() => deleteArticleGroupMaster(item._id)}
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
            Edit Group
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className='mt-4'>
              <Form.Group className='flex justify-center gap-x-2 items-center'>
                <Form.Label className='w-1/2'>Group Name </Form.Label>
                <Form.Control
                  type='text'
                  defaultValue={modelval}
                  onChange={(e) => setArticleGroupMaster(e.target.value)}
                />
              </Form.Group>
            </Col>

            <div className='flex justify-center gap-x-4 mt-4'>
              <Button
                variant='primary'
                onClick={() => editArticleGroupMaster()}
              >
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

export default GroupMaster;
