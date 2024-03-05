import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
function AddBilladdress() {
  return (
    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
      <div className='sm:col-span-1'>
        <label
          htmlFor='initials'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Initials
        </label>
        <div className='mt-2'>
          <select
            id='initials'
            name='initials'
            autoComplete='initials'
            onChange={handlemainchange}
            className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
          >
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
      </div>

      <div className='sm:col-span-3'>
        <label
          htmlFor='customer_name'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Customer Name
        </label>
        <div className='mt-2'>
          <input
            type='text'
            name='customer_name'
            id='customer_name'
            autoComplete='customer_name'
            onChange={handlemainchange}
            className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <div className='sm:col-span-3'>
        <label
          htmlFor='company'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Company
        </label>
        <div className='mt-2'>
          <input
            id='company'
            name='company'
            type='text'
            autoComplete='company'
            onChange={handlemainchange}
            className='px-1.5 focus:outline-none block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <div className='sm:col-span-3'>
        <label
          htmlFor='currency'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Currency
        </label>
        <div className='mt-2'>
          <select
            id='currency'
            name='currency'
            autoComplete='currency'
            onChange={handlemainchange}
            className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
          >
            <option>Rupees</option>
            <option>Dollar</option>
            <option>Euro</option>
          </select>
        </div>
      </div>

      <div className='sm:col-span-2'>
        <label
          htmlFor='customerCode'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Customer Code
        </label>
        <div className='mt-2'>
          <input
            id='customerCode'
            name='customer_code'
            value={uniqueid}
            disabled
            type='text'
            autoComplete='customerCode'
            onChange={handlemainchange}
            className='px-1.5 focus:outline-none block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
    </div>
  );
}

export default AddBilladdress;
