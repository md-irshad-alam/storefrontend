import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {
  Container,
  FormGroup,
  InputGroup,
  Row,
  Col,
  Card,
  Form,
  Button,
} from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Country from '../Master/Country';
import { v4 as uuidv4 } from 'uuid';
const AddCustomer = () => {
  const [billDetails, setFormData] = useState({});
  const [shipDetails, setbillmData] = useState({});
  const [formdata, setmaindata] = useState({});
  const [countries, setcountry] = useState([]);
  const [countries2, setcountry2] = useState([]);
  const [states, setStates] = useState([]);
  const [states2, setStates2] = useState([]);
  const [uniqueid, setUUId] = useState('');
  const [sameAsAbove, setsameas] = useState(false);
  const [initials, setinitilas] = useState('');
  const [customer_name, set_Custumer] = useState('');
  const [currency, setCurency] = useState('');
  const [company, setCompany] = useState('');
  const [customer_code, setcustumer] = useState('');
  const [validError, setValiderror] = useState('');
  const [samedata, setsamedata] = useState([]);
  const navigate = useNavigate();

  /* creating the random Id's */
  const randomId = Math.floor(Math.random() * 100);
  /* creating the random Id's */

  const handleChange = (e) => {
    setFormData((formdata) => ({
      ...formdata,
      [e.target.name]: e.target.value,
    }));
  };

  const handlemainchange = (event) => {
    setmaindata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const billdetailsChange = (event) => {
    setbillmData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };
  const addbilladdress = () => {
    try {
      if (typeof billDetails === 'object' && billDetails.length != 0) {
        const {
          address,
          country,
          district,
          state,
          postal_code,
          email,
          mobile,
          gstin,
          tin_no,
          pan,
          phone,
        } = billDetails;

        axios
          .post('https://backend-hofa.onrender.com/api/customer/bill-address', {
            address,
            country,
            district,
            state,
            postal_code,
            email,
            mobile,
            gstin,
            tin_no,
            pan,
            phone,
          })
          .then((res) => {
            localStorage.setItem('billId', res.data.bill_details._id);
            toast.success('billing address added ');
          })
          .catch((error) => toast.error('Faild to add billing addres'));
      } else {
        toast.warn('invalid input');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addshipaddress = () => {
    try {
      if (typeof billDetails === 'object' && billDetails.length != 0) {
        const {
          address,
          country,
          district,
          state,
          postal_code,
          email,
          mobile,
          gstin,
          tin_no,
          pan,
          phone,
        } = shipDetails;

        axios
          .post('https://backend-hofa.onrender.com/api/customer/ship-address', {
            address,
            country,
            district,
            state,
            postal_code,
            email,
            mobile,
            gstin,
            tin_no,
            pan,
            phone,
          })
          .then((res) => {
            console.log(res);
            localStorage.setItem('shipId', res.data.ship_address._id);
            toast.success('shiping address added');
          })
          .catch((error) => toast.error('faild to add ship address'));
      } else {
        toast.warn('invalid input');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      if (typeof formdata === 'object' && formdata.length != 0) {
        const {
          initials,
          customer_name,
          currency,
          contact_person,
          contact_mobile,
          contact_phone,
          fax,
          company,
        } = formdata;
        const ship_address = localStorage.getItem('shipId');
        const bill_address = localStorage.getItem('billId');

        axios
          .post('https://backend-hofa.onrender.com/api/customer/add-customer', {
            initials,
            customer_name,
            currency,
            customer_code: uniqueid,
            contact_person,
            contact_mobile,
            contact_phone,
            fax,
            company,
            bill_address,
            ship_address,
          })
          .then((res) => {
            navigate('/customers');
            toast.success(res.data.message);
            // localStorage.removeItem('billId');
            // localStorage.removeItem('shipId');
          })
          .catch((err) => toast.error(err.response.data.message));
      } else {
        toast.warn('invalid input');
      }
    } catch (error) {
      toast.error('something went wrong');
    }
  };

  const handleSameAsAbove = () => {};
  useEffect(() => {
    axios
      .get('https://backend-hofa.onrender.com/api/country/get-country')
      .then((res) => setcountry(res.data.countries))
      .catch((error) => console.log(`Fatching error, ${error}`));
  }, []);

  useEffect(() => {
    axios
      .get('https://backend-hofa.onrender.com/api/state/get-stateMaster')
      .then((res) => setStates(res.data.countries))
      .catch((error) => console.log(`Fatching error, ${error}`));
  }, []);
  useEffect(() => {
    axios
      .get('https://backend-hofa.onrender.com/api/country/get-country')
      .then((res) => setcountry2(res.data.countries))
      .catch((error) => console.log(`Fatching error, ${error}`));
  }, []);

  useEffect(() => {
    axios
      .get('https://backend-hofa.onrender.com/api/state/get-stateMaster')
      .then((res) => {
        setStates2(res.data.countries);
        console.log(res.data.countries);
      })
      .catch((error) => console.log(`Fatching error, ${error}`));
  }, []);

  const handleCountryChange = (event) => {
    let { name, value } = event.target;
    setFormData((formdata) => ({
      ...formdata,
      [name]: value,
    }));
    console.log(billDetails);
  };

  const handleStateChange = (event) => {
    let { name, value } = event.target;

    setFormData((formdata) => ({
      ...formdata,
      [name]: value,
    }));
  };

  const handleCountryChange2 = (event) => {
    setbillmData((formdata) => ({
      ...formdata,
      [event.target.name]: event.target.value,
    }));
  };

  const handleStateChange2 = (event) => {
    setbillmData((formdata) => ({
      ...formdata,
      [event.target.name]: event.target.value,
    }));
  };
  const handlesameasinput = () => {
    if (typeof billDetails === 'object' && billDetails.length != 0) {
      setsameas(!sameAsAbove);

      if (sameAsAbove === true) {
        setsamedata(billDetails);
      } else {
        setsamedata({});
      }
    } else {
    }
  };
  useEffect(() => {}, [sameAsAbove]);
  useEffect(() => {
    const uniqueId = uuidv4();
    setUUId(uniqueId);
  }, []);
  const d = false;
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
        </div>

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

        <div className='border-b border-gray-900/10 pb-12 mt-4 mb-4'>
          <h2 className='font-semibold leading-7 text-gray-900 text-2xl'>
            Ship to Details.
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Ship the package to the customer
          </p>

          {/* <h1>asdfsdfsdjfhasjkfh</h1> */}
          {samedata.length !== 0 ? (
            <div className='mt-10  grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 '>
              <div className='sm:col-span-4'>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='same-as-above'
                    name='same-as-above'
                    type='radio'
                    checked={sameAsAbove}
                    style={{ color: sameAsAbove ? 'green' : 'white' }}
                    onClick={() => handlesameasinput()}
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
                    name='address'
                    id='shipAddress'
                    autoComplete='shipAddress'
                    value={samedata.address}
                    onChange={billdetailsChange}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                    name='country'
                    onChange={handleCountryChange2}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option selected value={samedata.country}>
                      {samedata.country}
                    </option>
                    {countries2.map((country) => (
                      <option key={country.cca2} value={country.value}>
                        {country.value}
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
                    name='state'
                    autoComplete='shipState'
                    onChange={handleStateChange2}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option value={samedata.state} disabled>
                      {samedata.state}
                    </option>
                    {states2.length != 0
                      ? states2.map((state) => (
                          <option key={state.key} value={state.value}>
                            {state.value}
                          </option>
                        ))
                      : ''}
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
                    name='district'
                    value={samedata.district}
                    id='shipDistrict'
                    autoComplete='district'
                    onChange={billdetailsChange}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='ship_police-station'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Station
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='station'
                    id='ship_police-station'
                    autoComplete='ship_police-station'
                    onChange={billdetailsChange}
                    value={samedata.station}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='postal_code'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  ZIP / Postal code
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='postal_code'
                    id='ship_postal-code'
                    autoComplete='ship_postal-code'
                    onChange={billdetailsChange}
                    value={samedata.postal_code}
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
                    id='shipEmail'
                    autoComplete='email'
                    value={samedata.email}
                    onChange={billdetailsChange}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='mobile'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Mobile
                </label>
                <div className='mt-2'>
                  <input
                    type='tel'
                    name='mobile'
                    id='ship-mobile'
                    autoComplete='ship-mobile'
                    onChange={billdetailsChange}
                    value={samedata.mobile}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='gstin'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  GST No.
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='gstin'
                    id='ship-GST No.'
                    autoComplete='gstin'
                    value={samedata.gstin}
                    onChange={billdetailsChange}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='tin_no'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  TIN No.
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='tin_no'
                    id='ship-Tin No.'
                    autoComplete='tin_no'
                    value={samedata.tin_no}
                    onChange={billdetailsChange}
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
                    id='ship-pan'
                    autoComplete='pan'
                    onChange={billdetailsChange}
                    value={samedata.pan}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Phone
                </label>
                <div className='mt-2'>
                  <input
                    type='tel'
                    name='phone'
                    id='ship-phone'
                    autoComplete='phone'
                    value={samedata.phone}
                    onChange={billdetailsChange}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className='mt-10  grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 '>
              <div className='sm:col-span-4'>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='same-as-above'
                    name='same-as-above'
                    type='radio'
                    checked={sameAsAbove}
                    onClick={() => handlesameasinput()}
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
                    name='address'
                    id='shipAddress'
                    autoComplete='shipAddress'
                    onChange={billdetailsChange}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                    name='country'
                    onChange={handleCountryChange2}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option selected>select country</option>
                    {countries2.map((country) => (
                      <option key={country.cca2} value={country.value}>
                        {country.value}
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
                    name='state'
                    autoComplete='shipState'
                    onChange={handleStateChange2}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    {states2.length != 0
                      ? states2.map((state) => (
                          <option key={state.key} value={state.value}>
                            {state.value}
                          </option>
                        ))
                      : ''}
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
                    name='district'
                    id='shipDistrict'
                    autoComplete='district'
                    onChange={billdetailsChange}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='ship_police-station'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Station
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='station'
                    id='ship_police-station'
                    autoComplete='ship_police-station'
                    onChange={billdetailsChange}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='postal_code'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  ZIP / Postal code
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='postal_code'
                    id='ship_postal-code'
                    autoComplete='ship_postal-code'
                    onChange={billdetailsChange}
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
                    id='shipEmail'
                    autoComplete='email'
                    onChange={billdetailsChange}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='mobile'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Mobile
                </label>
                <div className='mt-2'>
                  <input
                    type='tel'
                    name='mobile'
                    id='ship-mobile'
                    autoComplete='ship-mobile'
                    onChange={billdetailsChange}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='gstin'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  GST No.
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='gstin'
                    id='ship-GST No.'
                    autoComplete='gstin'
                    onChange={billdetailsChange}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='tin_no'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  TIN No.
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='tin_no'
                    id='ship-Tin No.'
                    autoComplete='tin_no'
                    onChange={billdetailsChange}
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
                    id='ship-pan'
                    autoComplete='pan'
                    onChange={billdetailsChange}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Phone
                </label>
                <div className='mt-2'>
                  <input
                    type='tel'
                    name='phone'
                    id='ship-phone'
                    autoComplete='phone'
                    onChange={billdetailsChange}
                    className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
          )}

          <Row>
            <Col className='col-12'>
              <Button
                size='sm'
                className='mt-3 block w-fit pl-2 pr-2'
                onClick={() => addshipaddress()}
              >
                Add shiping address
              </Button>
            </Col>
          </Row>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-3'>
            <label
              htmlFor='phone'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Contact Person
            </label>
            <div className='mt-2'>
              <input
                type='tel'
                name='contact_person'
                id='ship-phone'
                autoComplete='phone'
                onChange={handlemainchange}
                className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='mobile'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Mobile *
            </label>
            <div className='mt-2'>
              <input
                type='tel'
                name='contact_mobile'
                id='ship-phone'
                autoComplete='phone'
                onChange={handlemainchange}
                className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='fax'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              FAX
            </label>
            <div className='mt-2'>
              <input
                type='tel'
                name='fax'
                id='ship-phone'
                autoComplete='phone'
                onChange={handlemainchange}
                className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='contact_phone'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Phone
            </label>
            <div className='mt-2'>
              <input
                type='tel'
                name='contact_phone'
                id='ship-phone'
                autoComplete='phone'
                onChange={handlemainchange}
                className='px-1.5 block w-full rounded-md border-1 border-gray-600 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
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
