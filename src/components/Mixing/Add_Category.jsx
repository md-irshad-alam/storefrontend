import React, { useEffect, useRef, useState } from 'react';
import {
  Form,
  Card,
  FloatingLabel,
  Button,
  Table,
  Row,
  Col,
} from 'react-bootstrap';
import style from '../../ModuleCss/Add_Product.module.css';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { addCategory, AddColor, addstore } from "../../Redux/Actions";

function Add_Category() {
  const [validated, setValidate] = useState(false);
  const [data, setdata] = useState({
    category: '',
    color: '',
    material: '',
    store: '',
  });
  const [rows, setRows] = useState([{ id: 1 }]);
  const [rows2, setRows2] = useState([{ id: 1 }]);
  const [color, setcolor] = useState([]);
  const [store, setstore] = useState([]);
  const [ingredientdata, setgredient] = useState([]);
  const [table1, settable1] = useState({});
  const [table2, settable2] = useState({});

  const dispatch = useDispatch();
  // const { setTabledata, tabledata } = useStateContext(MyContext);

  const getStore = () => {
    try {
      axios
        .get(`https://backend-hofa.onrender.com/api/store/get-store`)
        .then((res) => {
          setstore(res.data.stores);
        })
        .catch((error) => {
          console.warn('Fatching data faild  !');
        });
    } catch (error) {
      toast.error('someting went wrong!');
    }
  };
  const getColor = () => {
    try {
      axios
        .get(`https://backend-hofa.onrender.com/api/color/get-color`)
        .then((res) => {
          setcolor(res.data.colors);
        })
        .catch((error) => {
          console.warn('Fatching data faild  !');
        });
    } catch (error) {
      toast.error('someting went to wrong ');
    }
  };
  const getIngrediant = () => {
    try {
      axios
        .get('https://backend-hofa.onrender.com/api/Ingredient/get-Ingredient')
        .then((res) => {
          setgredient(res.data.Ingredients);
        })
        .catch((error) => toast.error('someting went to wrong '));
    } catch (error) {
      toast.error('someting went to wrong ');
    }
  };
  useEffect(() => {
    getColor();
    getStore();
    getIngrediant();
  }, []);

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
  const handleAddRow2 = () => {
    const newRow = { id: rows2.length + 1 };
    setRows2([...rows2, newRow]);
  };
  const handleRemoveRow2 = () => {
    // if (rows2.length > 1) {
    //   const updatedRows = rows2.slice(0, -1); // Remove the last row
    //   setRows2(updatedRows);
    // }
  };
  const handleinputChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  var price = {};
  const tabledata = useRef();

  const handletablechage = (e, rowId) => {
    const updatedTableData = { ...table1 };
    updatedTableData[rowId] = {
      ...updatedTableData[rowId],
      [e.target.name]: e.target.value,
    };
    settable1(updatedTableData);
    const price = table1[rowId];
  };

  const handletable1 = (e) => {
    settable2({ ...table2, [e.target.name]: e.target.value });
  };

  const handlesubmitForm = (e) => {
    try {
      const formData = new FormData(tabledata.current);
      const abcd = Object.fromEntries(formData.entries());
      if (abcd) {
        toast.success('Category was added ');
      } else {
        toast.success('Invalid input, Please try again! ');
      }
      // const {
      //   category,
      //   color,
      //   type,
      //   store,
      //   Ingredient,
      //   weight,
      //   phr,
      //   rate,
      //   flyAshRej,
      // } = abcd;
      // axios.post(
      //   'https://backend-hofa.onrender.com/api/AddCategory/add-AddCategory',
      //   {
      //     category,
      //     color,
      //     type,
      //     store,
      //     Ingredient,
      //     weight,
      //     phr,
      //     rate,
      //     flyAshRej,
      //   }
      // );
    } catch (error) {
      toast.warn('Faild to add category !');
    }
  };
  const calculateprice = () => {
    for (const key in table1) {
    }
  };
  return (
    <div className='container-fluid'>
      <Card className='lg md:xl:w-soloForm p-4 m-auto relative top-20 sm:border-none'>
        <h4 className='card-title  mb-4'>Add Category</h4>

        <Form noValidate validated={validated} ref={tabledata}>
          <Row>
            <Col lg={6} md={6} className='mb-4'>
              <Form.Group className=''>
                <Form.Label>Category </Form.Label>
                <Form.Control
                  type='text'
                  placeholder=''
                  required
                  onChange={handleinputChange}
                  name='category'
                />
              </Form.Group>
            </Col>

            <Col lg={6} md={6} className='mb-4'>
              <Form.Group>
                <Form.Label>Select Color</Form.Label>
                <Form.Select onChange={handleinputChange} name='color'>
                  {color !== undefined &&
                    color.map((item, index) => (
                      <option value={item.color}>{item.color}</option>
                    ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={6} md={6} className='mb-4'>
              <Form.Group>
                <Form.Label>Select Material </Form.Label>

                <Form.Select onChange={handleinputChange} name='material'>
                  <option value='rubber'>Rubber</option>
                  <option value='normal eva'>Normal EVA</option>
                  <option value='sheet'>Sheet</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={6} md={6} className='mb-4'>
              <Form.Group>
                <Form.Label>Select Store"</Form.Label>
                <Form.Select onChange={handleinputChange} name='store'>
                  {store !== undefined &&
                    store.map((item) => (
                      <option value={item.store_name}>
                        {item.store_name}{' '}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Table className={style.table}>
              <thead>
                <tr>
                  <th scope='col'>S.No.</th>
                  <th scope='col'>Ingredients</th>
                  <th scope='col'>Weight(kg)</th>
                  <th scope='col'>PHR</th>
                  <th scope='col'>Rate</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((item, index) => (
                  <tr>
                    <td scope='col'>{index}</td>
                    <td>
                      <Form.Select
                        name='Ingredient'
                        onChange={(e) => handletablechage(e, item.id)}
                      >
                        {ingredientdata !== undefined &&
                          ingredientdata.map((item) => {
                            return (
                              <>
                                <option value={item.Ingredient}>
                                  {item.Ingredient}
                                </option>
                              </>
                            );
                          })}
                      </Form.Select>
                    </td>
                    <td>
                      <Form.Control
                        name='weight'
                        onChange={(e) => handletablechage(e, item.id)}
                        type='number'
                        required
                      />
                    </td>
                    <td>
                      <Form.Control
                        type='number'
                        name='phr'
                        onChange={(e) => handletablechage(e, item.id)}
                        required
                      />
                    </td>
                    <td>
                      <Form.Control
                        type='number'
                        name='rate'
                        onChange={(e) => handletablechage(e, item.id)}
                        required
                      />
                    </td>
                    <td>
                      <Form.Control
                        type='number'
                        disabled
                        onChange={(e) => handletablechage(e, item.id)}
                        name='price'
                        value={price.length > 0 ? 0 : price.weight * price.rate}
                      />
                    </td>
                    <td>
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
                    </td>
                  </tr>
                ))}
                <tr className='bg-red-500 '>
                  <th colSpan={8}>Pakai chemicals</th>
                </tr>
                {rows2.map((item, index) => (
                  <tr key={index}>
                    <th scope='col'>2</th>
                    <td>
                      <Form.Select>
                        <option value='1'>SB-102</option>
                        <option value='1'>Zc-Ode</option>
                      </Form.Select>
                    </td>
                    <td>
                      <Form.Control type='number' required defaultValue={0} />
                    </td>
                    <td>
                      <Form.Control
                        type='number'
                        required
                        placeholder='abc'
                        onScroll={(e) => {
                          if (e.key === '-') {
                            e.preventDefault();
                          }
                        }}
                      />
                    </td>
                    <td>
                      <Form.Control type='number' required />
                    </td>
                    <td>78.30</td>
                    <td>
                      {' '}
                      <Button
                        size='sm'
                        key={index}
                        onClick={index === 0 ? handleAddRow2 : handleRemoveRow2}
                        variant={index === 0 ? 'primary' : 'danger'}
                      >
                        {index === 0 ? '+' : '-'}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className='flex justify-between border-pink w-fullWidth mt-2'>
                <b>Sub Total </b>
                <b className=''>78.300</b>
              </tfoot>
            </Table>
          </Row>
        </Form>
        <div className='flex gap-x-4 align-middle justify-center mt-4 mb-2'>
          <Button
            type='submit'
            variant='primary'
            onClick={() => handlesubmitForm()}
          >
            Submit form
          </Button>
          <Button type='submit' variant='danger'>
            Cancel
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Add_Category;
