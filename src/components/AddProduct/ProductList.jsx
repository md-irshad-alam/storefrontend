import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import style from '../../ModuleCss/Add_Product.module.css';
import data from '../Data';
import { toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
function Product_List() {
  const [filterdata, setFilterdata] = useState([]);
  const [items, setItems] = useState(data);
  const [query, setQuery] = useState('');

  const [selcetdCato, setselectcato] = useState('');
  const [selcetColor, setselctColor] = useState('');
  const [selcetdType, setselectType] = useState('');
  const { id } = useParams();
  console.log(id);
  const history = useNavigate();

  // const handleSearch = () => {
  //   const lowercaseValue = query.toLowerCase();
  //   const searchResult =
  //     filterdata.length != 0
  //       ? filterdata.filter((item) =>
  //           item.type.toLowerCase().includes(lowercaseValue)
  //         )
  //       : data.filter((item) =>
  //           item.type.toLowerCase().includes(lowercaseValue)
  //         );
  //   setFilterdata(searchResult);
  // };
  // const CancelSearch = () => {
  //   window.location.reload();
  // };

  const handleCategory = (event) => {
    const category = event.target.value;
    const filteredCategory =
      filterdata.length != 0
        ? filterdata.filter((item) => item['catogery '] === category)
        : data.filter((item) => item['catogery '] === category);
    if (filteredCategory.length === 0) {
      toast.warn('No Product categories is Found ');
    }

    setFilterdata(filteredCategory);
    setselectcato(category);
  };

  const handleColor = (event) => {
    const color = event.target.value;
    const filteredColor =
      filterdata.length != 0
        ? filterdata.filter((item) => item.color === color)
        : data.filter((item) => item.color === color);
    console.log(filteredColor);
    if (filteredColor.length === 0) {
      toast.warn('No Products Color found ');
    }
    setFilterdata(filteredColor);
    setselctColor(color);
  };

  const handleType = (event) => {
    const type = event.target.value;
    const filteredType = items.filter((item) => item.type === type);

    setFilterdata(filteredType);
    setselectType(type);
  };

  const handleReset = () => {
    setQuery('');
    setFilterdata([]);
    setselctColor(' ');
    setselectType(' ');
    setselectcato('');
  };
  const handleviewproduct = (id) => {
    history(`/view_product/id/${id}`);
  };

  return (
    <div className='container mt-8'>
      <div className='card w-midcard m-auto p-4'>
        <Card.Title>Product List</Card.Title>
        <div className='row mb-4'>
          <div className='col'>
            <Form.Select value={selcetdCato} onChange={handleCategory}>
              <option value=''>Select Category</option>
              <option value='food'>Food</option>
              <option value='drink'>Drink</option>
              <option value='sweet'>Sweet</option>
            </Form.Select>
          </div>
          <div className='col'>
            <Form.Select onChange={handleColor} value={selcetColor}>
              <option value=''>Select Color</option>
              <option value='Indigo'>Indigo</option>
              <option value='Puce'>Puce</option>
            </Form.Select>
          </div>
          <div className='col'>
            <Form.Select onChange={handleType} value={selcetdType}>
              <option value=''>Select Type</option>
              <option value='tea'>tea</option>
              <option value='chocolate'>chocolate</option>
            </Form.Select>
          </div>
          <div className='flex items-center justify-end gap-x-4 pl-4'>
            <Button
              variant='secondary'
              onClick={handleReset}
              className='float-right mb-4 mt-4'
            >
              Reset Filter
            </Button>
            <Button variant='danger'>Cancel</Button>
          </div>
        </div>
        <div className='table '>
          <thead>
            <tr>
              <th scope='col'>S.No.</th>
              <th scope='col'>Category</th>
              <th scope='col'>Color</th>
              <th scope='col'>Type</th>
              <th scope='col'>Weight (kg)</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterdata.length > 0
              ? filterdata.map((items, id) => {
                  return (
                    <tr key={id}>
                      <th scope='col'>{id === 0 ? 1 : id + 1}</th>
                      <td>{items.catogery}</td>
                      <td>{items.color}</td>
                      <td>{items.type}</td>
                      <td>{items.weight}</td>
                      <td>Yes</td>
                    </tr>
                  );
                })
              : items.map((items, id) => {
                  return (
                    <tr key={id}>
                      <th scope='col'>{id === 0 ? 1 : id + 1}</th>
                      <td>{items.catogery}</td>
                      <td>{items.color}</td>
                      <td>{items.type}</td>
                      <td>{items.weight}</td>
                      <td>
                        <div className='flex justify-center items-center gap-x-3'>
                          <FiEdit
                            color='green'
                            onClick={(e) => history('/update_product')}
                          />
                          <AiOutlineEye
                            onClick={(e) => handleviewproduct(items.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            {/* {items.length > 0 ? (
              items.map((items, id) => {
                return (
                  <tr key={id}>
                    <th scope="col">{id === 0 ? 1 : id + 1}</th>
                    <td>{items.catogery}</td>
                    <td>{items.color}</td>
                    <td>{items.type}</td>
                    <td>{items.weight}</td>
                    <td>Yes</td>
                  </tr>
                );
              })
            ) : (
              <tbody>
                <p text-variant="danger" className="text-warning">
                  No Data Found
                </p>
              </tbody>
            )} */}

            {/* <tr>
                    <th scope='col'>1</th>
                    <td>A-60</td>
                    <td>Black</td>
                    <td>Fusion</td>
                    <td>80.345</td>
                    <td>Yes</td>
                </tr> */}
          </tbody>
        </div>
      </div>
    </div>
  );
}

export default Product_List;
