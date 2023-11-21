import React, { useState } from 'react'
import { Header } from '../components'
import CustomerList from '../components/CustomerTabs/CustomerList';
import AddCustomer from '../components/CustomerTabs/AddCustomer';

const Customers = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div>
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Customers" />
        <div className="px-5 py-3 border-b border-gray-900/10 flex gap-5">
          <button
            className={activeContentIndex === 0 ? "border-b-2 border-sky-400 px-4 py-2" : "px-4 py-2"}
            onClick={() => setActiveContentIndex(0)}
          >
            Customer List
          </button>
          <button
            className={activeContentIndex === 1 ? "border-b-2 border-sky-400 px-4 py-2" : "px-4 py-2"}
            onClick={() => setActiveContentIndex(1)}
          >
            Add Customer
          </button>
        </div>
        <div className="py-5 px-4">
          {activeContentIndex === 0 && <CustomerList/>}
          {activeContentIndex === 1 && <AddCustomer/>}
        </div>
      </div>
    </div>
  )
}

export default Customers