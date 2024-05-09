import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from '../../ModuleCss/Table.module.css';
import {
  Card,
  CardTitle,
  Col,
  Container,
  Row,
  Form,
  Table,
  Button,
} from 'react-bootstrap';

import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
function ProductModule() {
  const val = [{ category: 'name' }];
  const [rows1, setTable1Rows] = useState([{ id: 1 }]);
  const [rows2, setTable2Rows] = useState([{ id: 1 }]);
  const [table1Data, settable1] = useState('');
  const [table2Data, settable2] = useState('');

  const handleAddRowTable1 = () => {
    const newRow = { id: rows1.length + 1 };
    setTable1Rows([...rows1, newRow]);
  };

  const handleRemoveRowTable1 = () => {
    if (rows1.length > 1) {
      const updatedRows = rows1.slice(0, -1);
      setTable1Rows(updatedRows);
    }
  };

  const handleAddRowTable2 = () => {
    const newRow = { id: rows2.length + 1 };
    setTable2Rows([...rows2, newRow]);
  };

  const handleRemoveRowTable2 = () => {
    if (rows2.length > 1) {
      const updatedRows = rows2.slice(0, -1);
      setTable2Rows(updatedRows);
    }
  };

  const handleChangeTable1 = (e, rowId) => {
    // Update the data for the first table
    const updatedTable1Data = { ...table1Data };
    updatedTable1Data[rowId] = {
      ...updatedTable1Data[rowId],
      [e.target.name]: e.target.value,
    };
    // setTable1Data(updatedTable1Data);
  };

  const handleChangeTable2 = (e, rowId) => {
    // Update the data for the second table
    const updatedTable2Data = { ...table2Data };
    updatedTable2Data[rowId] = {
      ...updatedTable2Data[rowId],
      [e.target.name]: e.target.value,
    };
    // setTable2Data(updatedTable2Data);
  };
  return (
    <Container className='p-4'>
      <h4>Add Product Module</h4>
      <Card className='p-4 mt-4'>
        <Row className='mb-4'>
          <Col lg={6} md={6} className='mb-4'>
            <Form.Group as={Col}>
              <Form.Label> Article Code </Form.Label>
              <Form.Control type='text' required placeholder='' />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} className='mb-4'>
            <Form.Group as={Col}>
              <Form.Label>Article Name </Form.Label>
              <Form.Control type='text' required placeholder='' />
            </Form.Group>
          </Col>

          <Col lg={6} md={6} className='mb-4'>
            <Form.Group>
              <Form.Label> Group </Form.Label>
              <Form.Select aria-Label='Default select example'>
                <option>select menu</option>
                <option value='1'>Clarks</option>
                <option value='2'>1300 Series</option>
                <option value='3'>Keen</option>
                <option value='4'>NNZ & Sister Concern</option>
                <option value='5'>Others</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col lg={6} md={6} className='mb-4'>
            <Form.Group>
              <Form.Label>Category </Form.Label>
              <Form.Select aria-Label='Default select example'>
                <option>select menu</option>
                {val.map((itesm) => {
                  return <option>{itesm.category}</option>;
                })}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col lg={6} md={6} className='mb-4'>
            <Form.Group>
              <Form.Label> Heel Cate </Form.Label>
              <Form.Select aria-Label='Default select example'>
                <option>select menu</option>
                <option value='1'>Clarks</option>
                <option value='2'>1300 Series</option>
                <option value='3'>Keen</option>
                <option value='4'>NNZ & Sister Concern</option>
                <option value='5'>Others</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col lg={6} md={6} className='mb-4'>
            <Form.Group>
              <Form.Label> ForePart </Form.Label>
              <Form.Select aria-Label='Default select example'>
                <option>select menu</option>
                <option value='1'>Clarks</option>
                <option value='2'>1300 Series</option>
                <option value='3'>Keen</option>
                <option value='4'>NNZ & Sister Concern</option>
                <option value='5'>Others</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col lg={6} md={6} className='mb-4'>
            <Form.Group>
              <Form.Label> UOM</Form.Label>
              <Form.Select aria-Label='Default select example'>
                <option>select menu</option>
                <option value='1'>Pair</option>
                <option value='2'>PCS</option>
                <option value='3'>Kg</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col lg={6} md={6} className='mb-4'>
            <Form.Group>
              <Form.Label> Hardness</Form.Label>
              <Form.Control type='text' required placeholder='' />
            </Form.Group>
          </Col>

          <Col lg={6} md={6} className='mb-4'>
            <Form.Group>
              <Form.Label> Price </Form.Label>
              <Form.Control type='number' placeholder='' required />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} className='mb-4'>
            <Form.Group>
              <Form.Label>GSTIN (%) </Form.Label>
              <Form.Control type='text' required placeholder='' />
            </Form.Group>
          </Col>

          <Col lg={6} md={6} className='mb-4'>
            <Form.Group>
              <Form.Label> HSN</Form.Label>
              <Form.Control type='text' required placeholder='' />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} className='mb-4'>
            <Form.Group>
              <Form.Label> Remarks </Form.Label>
              <Form.Control as='textarea' rows1={1} required placeholder='' />
            </Form.Group>
          </Col>

          <Col lg={6} md={6} className='mb-4'>
            <Form.Group
              as={Col}
              className='md=4'
              controlId='validationCustom01'
            >
              <Form.Label> Type </Form.Label>
              <Form.Select aria-Label='Default select example'>
                <option>select menu</option>
                <option value='1'>Out Sole</option>
                <option value='2'>Fhylon</option>
                <option value='3'>Mid Sole</option>
                <option value='3'>Row Meterial</option>
                <option value='3'>Lab Item</option>
                <option value='3'>Finished Product</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col lg={6} md={6} className='mb-4'>
            <Form.Group
              as={Col}
              className='md=4'
              controlId='validationCustom01'
            >
              <Form.Label> Image </Form.Label>
              <Form.Control type='file' />
            </Form.Group>
          </Col>

          <div className='line'></div>

          <h4 className='mb-4 mt-4 text-gray-500 font-normal'>
            Add Mid Sole Parts
          </h4>
          <Col className=' mb-4'>
            <Table className={style.table}>
              <thead>
                <tr>
                  <th scope='col'>S.No</th>
                  <th scope='col'>Article Code</th>
                  <th scope='col'>Article</th>
                  <th scope='col'>Article Details</th>
                  <th scope='col'>Qty</th>
                </tr>
              </thead>
              <tbody>
                {rows1.map((items, index) => {
                  return (
                    <tr>
                      <td>1</td>
                      <td>
                        <Form.Select>
                          <option value='001'>001</option>
                          <option value='002'>002</option>
                        </Form.Select>
                      </td>
                      <td>
                        <Form.Select>
                          <option value='baitfish'>baitfish</option>
                          <option value='woodand'>woodand</option>
                        </Form.Select>
                      </td>
                      <td>Baitfish, P-60, o/s-Black </td>
                      <td>
                        <Form.Control type='number' />
                      </td>
                      <td>
                        <Button
                          onClick={
                            index === 0
                              ? handleAddRowTable1
                              : handleRemoveRowTable1
                          }
                          key={index}
                          size='sm'
                          variant={index === 0 ? 'primary' : 'danger'}
                        >
                          {index === 0 ? '+' : '-'}
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>

          <div className='line'></div>
          <Col className='mb-4 mt-4' lg={4}>
            <h5 className='mb-4'>Rates</h5>
            {rows2.map((items, index) => {
              return (
                <>
                  <Row key={index}>
                    <Col>
                      <Form.Label>Size</Form.Label>
                      <Form.Control
                        type='number'
                        placeholder=''
                        onChange={(e) => handleChangeTable2(e, items.id)}
                      />
                    </Col>
                    <Col>
                      <Form.Label>Rate</Form.Label>
                      <div className='flex items-center gap-x-4'>
                        <Form.Control
                          type='number'
                          placeholder=''
                          onChange={(e) => handleChangeTable2(e, items.id)}
                        />
                        <Button
                          onClick={
                            index === 0
                              ? handleAddRowTable2
                              : handleRemoveRowTable2
                          }
                          key={index}
                          size='sm'
                          variant={index === 0 ? 'primary' : 'danger'}
                        >
                          {index === 0 ? '+' : '-'}
                        </Button>
                      </div>
                    </Col>

                    {/* <Col lg={4} md={4}></Col> */}
                  </Row>
                </>
              );
            })}
          </Col>

          <Col lg={8} className='mb-4 mt-4 '>
            <h5>Create Midsole</h5>
            <Table className={style.table2}>
              <thead>
                <tr>
                  <th scope='col'>Article 1</th>
                  <th scope='col'> Qty</th>
                  <th scope='col'>Article 2</th>
                  <th scope='col'> Qty</th>
                  <th scope='col'>Req. Midsole Qty</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Article 1</td>
                  <td>10</td>
                  <td>Article 22</td>
                  <td>10</td>
                  <td>
                    <Form.Control type='number' />
                  </td>
                  <td>
                    <button className='pl-3 pr-3 pt-2 pb-2 bg-green-400'>
                      create
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ProductModule;
