import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Card,
  Col,
  Form,
  Button,
  Table,
} from 'react-bootstrap';
import style from '../ModuleCss/Table.module.css';
import { toast } from 'react-toastify';

function Add_Stdwt() {
  const [tabledata, settabledata] = useState([]);
  const [rows, setRows] = useState([{ id: 1 }]);

  // const { setTabledata, tabledata } = useStateContext(MyContext);

  const handleAddRow = () => {
    const newRow = { id: rows.length + 1 };
    setRows([...rows, newRow]);
  };
  const handleRemoveRow = () => {
    if (rows.length > 1) {
      const updatedRows = rows.slice(0, -1); // Remove the last row
      setRows(updatedRows);
    }
  };

  const handleChange = (e, rowId) => {
    console.log(rowId);
    // Create a new array with the updated data for the specific row
    const updatedTableData = { ...tabledata };
    updatedTableData[rowId] = {
      ...updatedTableData[rowId],
      [e.target.name]: e.target.value,
    };
    console.log(updatedTableData);

    settabledata(updatedTableData);
  };

  return (
    <Container>
      <h4>Add Standard Weights</h4>
      <Card className='p-4 mt-4 mb-4'>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Article</Form.Label>
              <Form.Select>
                <option value={'article1'}>article 1</option>
                <option value={'article2'}>article 2</option>
                <option value={'article3'}>article 3</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select>
                <option value={'category1'}>Category 1</option>
                <option value={'category2'}>Category 2</option>
                <option value={'category3'}>Category 3</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Col className='mt-4 flex gap-x-4'>
          <Button>search</Button>
          <Button variant='danger'>Cancel</Button>
        </Col>
      </Card>
      <Card className='p-4'>
        <Table className={style.table} bordered>
          <thead className={style.tablehead}>
            <tr>
              <th scope='col'>Size</th>
              <th scope='col'>Out-Size</th>
              <th scope='col'>Mould</th>
              <th scope='col'>Outsole Wt(kg)</th>
              <th scope='col'>Boootm Wt(kg)</th>
              <th scope='col'>Logo(L) Wt(kg)</th>
              <th scope='col'>Logo(R) Wt(kg)</th>
              <th scope='col'>Side Wall & Logo Wt(kg)</th>
              <th scope='col'>Group ID</th>
              <th scope='col'>WL-22-1</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr>
                <td>
                  <Form.Control
                    type='number'
                    name='size'
                    onChange={(e) => handleChange(e, row.id)}
                  />
                </td>
                <td>
                  <Form.Control
                    type='number'
                    name='out-size'
                    onChange={(e) => handleChange(e, row.id)}
                  />
                </td>
                <td>
                  <Form.Control
                    type='number'
                    name='mould '
                    onChange={(e) => handleChange(e, row.id)}
                  />
                </td>
                <td>
                  <Form.Control
                    type='number'
                    name='outsole'
                    onChange={(e) => handleChange(e, row.id)}
                  />
                </td>
                <td>
                  <Form.Control
                    type='number'
                    name='bottomsole'
                    onChange={(e) => handleChange(e, row.id)}
                  />
                </td>
                <td>
                  <Form.Control
                    type='number'
                    name='logoL'
                    onChange={(e) => handleChange(e, row.id)}
                  />
                </td>
                <td>
                  <Form.Control
                    type='number'
                    name='logoR'
                    onChange={(e) => handleChange(e, row.id)}
                  />
                </td>
                <td>
                  <Form.Control
                    type='number'
                    name='sideWall'
                    onChange={(e) => handleChange(e, row.id)}
                  />
                </td>
                <td>
                  <Form.Control
                    type='number'
                    name='groupId'
                    onChange={(e) => handleChange(e, row.id)}
                  />
                </td>
                <td>
                  <Form.Control
                    type='number'
                    name='wl'
                    onChange={(e) => handleChange(e, row.id)}
                  />
                </td>
                <td>
                  <Button
                    size='sm'
                    key={index}
                    onClick={index === 0 ? handleAddRow : handleRemoveRow}
                    variant={index === 0 ? 'primary' : 'danger'}
                  >
                    {index === 0 ? '+' : '-'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className='  flex flex-row m-auto mt-3 gap-x-2'>
          <Button size='md'>submit</Button>
          <Button variant='danger' size='md'>
            Cancel
          </Button>
        </div>
      </Card>
      <div className='  w-full m-auto gap-x-2'></div>
    </Container>
  );
}

export default Add_Stdwt;
