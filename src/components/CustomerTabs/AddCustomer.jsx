import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCustomer = () => {
  const [formData, setFormData] = useState({});
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [selectCountry, setSelectCountry] = useState('');
  const [sameAsAbove, setSameAsAbove] = useState(false);

  const navigate = useNavigate();

  /* creating the random Id's */
  const randomId = Math.floor(Math.random() * 100);
  /* creating the random Id's */

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch(
        'https://referential.p.rapidapi.com/v1/country?fields=iso_a2&limit=250',
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              'eff51e33a2msh3c4977c37096d34p117ce3jsnad1634fb6450',
            'X-RapidAPI-Host': 'referential.p.rapidapi.com',
          },
        }
      );

      const data = await res.json();
      setCountryData(data);
    };

    getCountries();
  }, []);

  const handleCountryChange = async (e) => {
    setSelectCountry(e.target.value);
    setFormData((prevState) => ({ ...prevState, country: e.target.value }));

    /* handling the state api */
    const res = await fetch(
      `https://referential.p.rapidapi.com/v1/state?iso_a2=${e.target.value}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'eff51e33a2msh3c4977c37096d34p117ce3jsnad1634fb6450',
          'X-RapidAPI-Host': 'referential.p.rapidapi.com',
        },
      }
    );

    const data = await res.json();
    setStateData(data);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    toast.success('Added Customer Successfully.');
    setTimeout(() => {
      navigate(`/edit-customer/${randomId}`);
    }, 2000);
  };

  /* this logic is not working properly */

  const handleSameAsAbove = () => {
    setSameAsAbove((prev) => !prev);

    if (!sameAsAbove) {
      setFormData({
        ...formData,
        shipAddress: formData.address,
        shipCountry: formData.country,
        shipState: formData.state,
        shipDistrict: formData.district,
        shipPoliceStation: formData['police-station'],
        ship_postalCode: formData['postal-code'],
        shipEmail: formData.email,
        shipMobile: formData['bill-mobile'],
        shipGSTNo: formData['GST No.'],
        shipTINNo: formData['Tin No.'],
        shipPan: formData.pan,
        shipPhone: formData['bill-phone'],
      });
      console.log(formData);
    } else {
      setFormData({
        ...formData,
        shipAddress: '',
        shipCountry: '',
        shipState: '',
        shipDistrict: '',
        shipPoliceStation: '',
        ship_postalCode: '',
        shipEmail: '',
        shipMobile: '',
        shipGSTNo: '',
        shipTINNo: '',
        shipPan: '',
        shipPhone: '',
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-2xl font-semibold leading-7 text-gray-900'>
            Personal Information
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Use a permanent address where you can receive mail.
          </p>

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
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
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
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                  onChange={handleChange}
                  className='px-1.5 focus:outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
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
                  name='customerCode'
                  type='text'
                  autoComplete='customerCode'
                  onChange={handleChange}
                  className='px-1.5 focus:outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
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
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                  autoComplete='country'
                  onChange={handleCountryChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option selected>select country</option>
                  {countryData.map((item) => (
                    <option key={item.key} value={item.iso_a2}>
                      {item.value}
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
                  autoComplete='state'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  {stateData.map((item) => (
                    <option key={item.key} value={item.value}>
                      {item.value}
                    </option>
                  ))}
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
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='police-station'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Police Station
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='police-station'
                  id='police-station'
                  autoComplete='police-station'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                  type='text'
                  name='postal-code'
                  id='postal-code'
                  autoComplete='postal-code'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                  type='text'
                  name='bill-mobile'
                  id='bill-mobile'
                  autoComplete='bill-mobile'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                  name='GST No.'
                  id='GST No.'
                  autoComplete='GST No.'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                  name='Tin No.'
                  id='Tin No.'
                  autoComplete='Tin No.'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                  type='text'
                  name='bill-phone'
                  id='bill-phone'
                  autoComplete='bill-phone'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='font-semibold leading-7 text-gray-900 text-2xl'>
            Ship to Details.
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Ship the package to the customer
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <div className='flex items-center gap-x-3'>
                <input
                  id='same-as-above'
                  name='same-as-above'
                  type='radio'
                  checked={sameAsAbove}
                  onChange={handleSameAsAbove}
                  className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                />
                <label
                  htmlFor='push-everything'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  same as bill to details
                </label>
              </div>
            </div>
            <div className='sm:col-span-4'>
              <label
                htmlFor='shipAddress'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Address
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='shipAddress'
                  id='shipAddress'
                  autoComplete='shipAddress'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <br></br>
            <div className='sm:col-span-2'>
              <label
                htmlFor='shipCountry'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Country
              </label>
              <div className='mt-2'>
                <select
                  id='shipCountry'
                  name='shipCountry'
                  autoComplete='shipCountry'
                  onChange={handleCountryChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option selected>select country</option>
                  {countryData.map((item) => (
                    <option key={item.key} value={item.iso_a2}>
                      {item.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='shipState'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                State
              </label>
              <div className='mt-2'>
                <select
                  id='shipState'
                  name='shipState'
                  autoComplete='shipState'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  {stateData.map((item) => (
                    <option key={item.key} value={item.value}>
                      {item.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='shipDistrict'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                District
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='shipDistrict'
                  id='shipDistrict'
                  autoComplete='shipDistrict'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='ship_police-station'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Police Station
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='ship_police-station'
                  id='ship_police-station'
                  autoComplete='ship_police-station'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='ship_postal-code'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                ZIP / Postal code
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='ship_postal-code'
                  id='ship_postal-code'
                  autoComplete='ship_postal-code'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='shipEmail'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email
              </label>
              <div className='mt-2'>
                <input
                  type='email'
                  name='shipEmail'
                  id='shipEmail'
                  autoComplete='shipEmail'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='ship-mobile'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Mobile
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='ship-mobile'
                  id='ship-mobile'
                  autoComplete='ship-mobile'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='ship-GST No.'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                GST No.
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='ship-GST No.'
                  id='ship-GST No.'
                  autoComplete='ship-GST No.'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='ship-Tin No.'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                TIN No.
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='ship-Tin No.'
                  id='ship-Tin No.'
                  autoComplete='ship-Tin No.'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='ship-pan'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Pan
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='ship-pan'
                  id='ship-pan'
                  autoComplete='ship-pan'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='ship-phone'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Phone
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='ship-phone'
                  id='ship-phone'
                  autoComplete='ship-phone'
                  onChange={handleChange}
                  className='px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <button
            type='button'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Add Customer
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddCustomer;
