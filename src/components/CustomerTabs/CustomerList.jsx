import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillEdit } from "react-icons/ai";
import { BsFillFileTextFill } from 'react-icons/bs'


const dummyData = [
  { Id: 1, name: 'virat Kohli', country: 'India', state: 'Delhi' },
  { Id: 2, name: 'Glenn Maxwell', country: 'Australia', state: 'Melbourne' },
  { Id: 3, name: 'Ab Devillers', country: 'South Africa', state: 'cape Town' },
  { Id: 4, name: 'chris Gayle', country: 'Westindies', state: 'Gayle Island' },
  { Id: 5, name: 'Rohit Sharma', country: 'India', state: 'Mumbai' },
  { Id: 6, name: 'Steven Smith', country: 'Australia', state: 'sydney' },
  { Id: 7, name: 'Kl Rahul', country: 'India', state: 'Bangalore' },
]


const CustomerList = () => {
  const [customerName , setCustomerName] = useState('');
  const [country, setCountry] = useState('');
  const [filteredData, setFilteredData] = useState(dummyData);

  const handleSearch = () => {
    // Filter data based on selected options
    const updatedData = dummyData.filter(item => {
      const nameMatch = customerName === '' || item.name.toLowerCase().includes(customerName.toLowerCase());
      const countryMatch = country === '' || item.country.toLowerCase() === country.toLowerCase();
      
      return nameMatch && countryMatch;
    });

    // Update the state with the filtered data
    setFilteredData(updatedData);
  };
 

  return (
    <div className="px-4 py-4">
      <div className="mb-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-1">
          <label htmlFor="customer-name" className="block text-sm font-medium leading-6 text-gray-900">
            Customer Name
          </label>
          <select 
          className="px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6"
          onChange={(e) => setCustomerName(e.target.value)}
          >
            {dummyData.map((item) => (
              <option key ={item.Id}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="country-name" className="block text-sm font-medium leading-6 text-gray-900">
            Country Name
          </label>
          <select 
          className="px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:max-w-xs sm:text-sm sm:leading-6"
          onChange={(e) => setCountry(e.target.value)}
          >
            {dummyData.map((item) => (
              <option key ={item.Id}>{item.country}</option>
            ))}
          </select>
        </div>
        <br/>
        <div className="sm:col-span-4">
          <button className="bg-red-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light rounded">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr className="bg-slate-200">
                  <th scope="col" className="px-4 py-2">Id</th>
                  <th scope="col" className="px-4 py-2">Customer Name</th>
                  <th scope="col" className="px-4 py-2">District</th>
                  <th scope="col" className="px-4 py-2">country</th>
                  <th scope="col" className="px-4 py-2">State</th>
                  <th scope="col" className="px-4 py-2">Contact No.</th>
                  <th scope="col" className="px-4 py-2">view</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className={`border-b dark:border-neutral-500 `}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium">{item.Id}</td>
                    <td className="whitespace-nowrap px-4 py-2">{item.name}</td>
                    <td className="whitespace-nowrap px-4 py-2">{item.Id}</td>
                    <td className="whitespace-nowrap px-4 py-2">{item.country}</td>
                    <td className="whitespace-nowrap px-4 py-2">{item.Id}</td>
                    <td className="whitespace-nowrap px-4 py-2">{item.state}</td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <div className="flex gap-4">
                        <Link to={`/edit-customer/${item.Id}`} >
                          <AiFillEdit className="text-sky-400 text-lg" />
                        </Link>
                        <Link to={`/view-customer/${item.Id}`}>
                          <BsFillFileTextFill className="text-sky-400 text-lg" />
                        </Link>
                      </div>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerList