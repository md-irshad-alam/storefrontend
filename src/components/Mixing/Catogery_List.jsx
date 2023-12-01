import React, { useEffect, useState } from 'react';
import { Form, Card, FloatingLabel, Button, Table } from 'react-bootstrap';
import style from '../../ModuleCss/Add_Product.module.css';
import data from '../Data';
import { toast } from 'react-toastify';
function Catogery_List() {
  const [filterdata, setFilterdata] = useState([]);
  const [items, setItems] = useState(data); // Assuming 'data' is your default data source
  const [query, setQuery] = useState('');
  const [itemdata, setItemdata] = useState([]);
  const [selcetdCato, setselectcato] = useState('');
  const [selcetColor, setselctColor] = useState('');
  const [selcetdType, setselectType] = useState('');

  const handleSearch = () => {
    const lowercaseValue = query.toLowerCase();
    const searchResult =
      filterdata.length != 0
        ? filterdata.filter((item) =>
            item.type.toLowerCase().includes(lowercaseValue)
          )
        : data.filter((item) =>
            item.type.toLowerCase().includes(lowercaseValue)
          );

    setFilterdata(searchResult);
  };
  const CancelSearch = () => {
    window.location.reload();
  };

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

  return (
    <div className='container mt-8'>
      <div className='card w-midcard m-auto p-4'>
        <Card.Title>Product Category List</Card.Title>
        <div className='row mb-4 mt-4'>
          <div className='col-8'>
            <Form.Control
              type='text'
              placeholder='Search'
              className=' mr-sm-2'
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className='col-4'>
            <div className='row'>
              <div className='col'>
                <Button variant='secondary' onClick={handleSearch}>
                  Search
                </Button>
              </div>
              <div className='col'>
                <Button variant='danger' onClick={CancelSearch}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-4'>
          <Card.Title>
            <Button
              variant='secondary'
              onClick={handleReset}
              className='float-right mb-4 mt-4'
            >
              Reset Filter
            </Button>
          </Card.Title>
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
                      <td>Yes</td>
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

export default Catogery_List;
