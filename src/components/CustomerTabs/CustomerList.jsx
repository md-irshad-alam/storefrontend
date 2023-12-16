import React, { useEffect, useState } from 'react';
import { Link, UNSAFE_useScrollRestoration, useParams } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillFileTextFill } from 'react-icons/bs';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const CustomerList = () => {
  const [customer_name, setCustomerName] = useState('');
  const [country, setCountry] = useState('');
  const [filteredData, setFilteredData] = useState();
  const [customerData, setcustomerData] = useState();
  const [state, setState] = useState('');
  const [filterdata, setfilter] = useState({
    country: '',
    state: '',
    customer_name: '',
  });
  useEffect(() => {
    axios
      .get('http://localhost:3100/api/customer/getAll-customer')
      .then((res) => {
        console.log(res.data);

        setcustomerData(res.data.customer);
        setFilteredData(res.data.customer);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handlefiltechange = (event) => {
    const { name, value } = event.target;
    setfilter((prev) => ({ ...prev, [name]: value }));
  };
  const handleSearch = () => {
    const { state, customer_name, country } = filterdata;
    console.log(state, customer_name, country);
    const updatedData = customerData.filter((item) => {
      const nameMatch =
        customer_name === '' ||
        item.customer_name.toLowerCase().includes(customer_name.toLowerCase());
      const countryMatch =
        country === '' ||
        item.bill_address.country.toLowerCase().includes(country.toLowerCase());
      const statematch =
        state === '' ||
        item.bill_address.state.toLowerCase().includes(state.toLowerCase());

      return nameMatch && countryMatch && statematch;
    });
    console.log(updatedData);
    if (updatedData.length != 0) {
      setFilteredData(updatedData);
    } else {
      toast.warn('item not found !');
    }
  };

  const cancelfilter = () => {
    setfilter({});
    setFilteredData(customerData);
  };

  return (
    <div className='px-4 py-4'>
      <div className='mb-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className='sm:col-span-1'>
          <label
            htmlFor='customer-name'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Customer Name
          </label>
          <select
            className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
            onChange={handlefiltechange}
            name='customer_name'
          >
            <option disabled>---choose option---</option>
            {customerData !== undefined &&
              customerData.map((item) => (
                <>
                  <option key={item.Id} value={item.customer_name}>
                    {item.customer_name}
                  </option>
                </>
              ))}
          </select>
        </div>
        <div className='sm:col-span-1'>
          <label
            htmlFor='country-name'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Country Name
          </label>
          <select
            className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
            onChange={handlefiltechange}
            name='country'
          >
            <option disabled>---choose option---</option>
            {customerData !== undefined &&
              customerData.map((item) => (
                <>
                  <option key={item.Id} value={item.bill_address.country}>
                    {item.bill_address.country}
                  </option>
                </>
              ))}
          </select>
        </div>
        <div className='sm:col-span-1'>
          <label
            htmlFor='country-name'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            State Name
          </label>
          <select
            className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
            onChange={handlefiltechange}
            name='state'
          >
            <option disabled>---Choose option---</option>
            {customerData !== undefined &&
              customerData.map((item) => (
                <>
                  <option key={item.Id} value={item.bill_address.state}>
                    {item.bill_address.state}
                  </option>
                </>
              ))}
          </select>
        </div>
        <br />
        <div className='sm:col-span-4 flex flex-row gap-x-2'>
          <Button size='sm' onClick={handleSearch}>
            Search
          </Button>
          <Button size='sm' variant='danger' onClick={cancelfilter}>
            Cancel
          </Button>
        </div>
      </div>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left text-sm font-light rounded'>
              <thead className='border-b font-medium dark:border-neutral-500'>
                <tr className='bg-slate-200'>
                  <th scope='col' className='px-4 py-2'>
                    Id
                  </th>
                  <th scope='col' className='px-4 py-2'>
                    Customer Name
                  </th>
                  <th scope='col' className='px-4 py-2'>
                    District
                  </th>
                  <th scope='col' className='px-4 py-2'>
                    country
                  </th>
                  <th scope='col' className='px-4 py-2'>
                    State
                  </th>
                  <th scope='col' className='px-4 py-2'>
                    Contact No.
                  </th>
                  <th scope='col' className='px-4 py-2'>
                    view
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData !== undefined
                  ? filteredData.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b dark:border-neutral-500 `}
                      >
                        <td className='whitespace-nowrap px-4 py-2 font-medium'>
                          {index + 1}
                        </td>
                        <td className='whitespace-nowrap px-4 py-2'>
                          {item.initials + ' ' + item.customer_name}
                        </td>

                        <td className='whitespace-nowrap px-4 py-2'>
                          {item.bill_address.district}
                        </td>
                        <td className='whitespace-nowrap px-4 py-2'>
                          {item.bill_address.country}
                        </td>
                        <td className='whitespace-nowrap px-4 py-2'>
                          {item.bill_address.state}
                        </td>
                        <td className='whitespace-nowrap px-4 py-2'>
                          {item.bill_address.phone}
                        </td>

                        <td className='whitespace-nowrap px-4 py-2'>
                          <div className='flex gap-4'>
                            <Link to={`/edit-customer/${item._id}`}>
                              <AiFillEdit className='text-sky-400 text-lg' />
                            </Link>
                            <Link to={`/view-customer/${item.Id}`}>
                              <BsFillFileTextFill className='text-sky-400 text-lg' />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))
                  : ''}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
