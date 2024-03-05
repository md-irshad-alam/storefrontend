import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
function AddShipdetails() {
  return (
    <div className='border-b border-gray-900/10 pb-12 mt-4 mb-4'>
      <h2 className='text-2xl font-semibold leading-7 text-gray-900'>
        Bill to Details Form.
      </h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Bill your product to sent the package.
      </p>

      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className='sm:col-span-4'>
          <label
            htmlFor='address'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Address
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='address'
              id='address'
              autoComplete='address'
              onChange={handleChange}
              className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <br></br>
        <div className='sm:col-span-2'>
          <label
            htmlFor='country'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Country
          </label>
          <div className='mt-2'>
            <select
              id='country'
              name='country'
              onChange={handleCountryChange}
              className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
            >
              <option selected>select country</option>
              {countries.map((ele) => (
                <option key={country.cca2} value={ele.country}>
                  {ele.country}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='sm:col-span-2'>
          <label
            htmlFor='state'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            State
          </label>
          <div className='mt-2'>
            <select
              id='state'
              name='state'
              onChange={handleStateChange}
              className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
            >
              {states.length != 0
                ? states.map((state) => (
                    <option key={state.key} value={state}>
                      {state.value}
                    </option>
                  ))
                : ''}
            </select>
          </div>
        </div>

        <div className='sm:col-span-3'>
          <label
            htmlFor='district'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            District
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='district'
              id='district'
              autoComplete='district'
              onChange={handleChange}
              className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div className='sm:col-span-3'>
          <label
            htmlFor='police-station'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Station
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='station'
              id='police-station'
              autoComplete='police-station'
              onChange={handleChange}
              className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div className='sm:col-span-2'>
          <label
            htmlFor='postal-code'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            ZIP / Postal code
          </label>
          <div className='mt-2'>
            <input
              type='number'
              name='postal_code'
              id='postal_code'
              autoComplete='postal-code'
              onChange={handleChange}
              className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-3'>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Email
          </label>
          <div className='mt-2'>
            <input
              type='email'
              name='email'
              id='email'
              autoComplete='email'
              onChange={handleChange}
              className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-2'>
          <label
            htmlFor='bill-mobile'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Mobile
          </label>
          <div className='mt-2'>
            <input
              type='tel'
              name='mobile'
              id='bill-mobile'
              autoComplete='bill-mobile'
              onChange={handleChange}
              className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-3'>
          <label
            htmlFor='GST No.'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            GST No.
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='gstin'
              id='GST No.'
              autoComplete='GST No.'
              onChange={handleChange}
              className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-3'>
          <label
            htmlFor='Tin No.'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            TIN No.
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='tin_no'
              id='Tin No.'
              autoComplete='Tin No.'
              onChange={handleChange}
              className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-3'>
          <label
            htmlFor='pan'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Pan
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='pan'
              id='pan'
              autoComplete='pan'
              onChange={handleChange}
              className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-3'>
          <label
            htmlFor='bill-phone'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Phone
          </label>
          <div className='mt-2'>
            <input
              type='tel'
              name='phone'
              id='bill-phone'
              autoComplete='phone'
              onChange={handleChange}
              className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
      </div>
      <Row className=' justify-center'>
        <Col className='col-12'>
          <Button
            size='sm'
            className='mt-3 block w-fit pl-2 pr-2'
            onClick={() => addbilladdress()}
          >
            Add billing address
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default AddShipdetails;
