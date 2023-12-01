import React, { useState } from 'react';

const DummyData = [
  { articleCode: '001', article: 'Article 1', category: 'Category A', size: 'M', qty: 10 },
  { articleCode: '002', article: 'Article 2', category: 'Category B', size: 'L', qty: 15 },
  // Add more dummy data as needed
];

const AdjustStock = () => {
  const [data, setData] = useState(DummyData);
  const [filters, setFilters] = useState({
    article: '',
    category: '',
    store: '',
  });
  const [adjustQty, setAdjustQty] = useState(); // Define adjustQty state

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const handleCancelFilters = () => {
    setFilters({
      article: '',
      category: '',
      store: '',
    });
  };

  const filteredData = data.filter((item) => {
    return (
      item.article.includes(filters.article) &&
      item.category.includes(filters.category) &&
      true
    );
  });

  const handleAdjustQty = (articleCode, adjustQty) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.articleCode === articleCode
          ? { ...item, qty: item.qty + adjustQty }
          : item
      )
    );
    setAdjustQty(0); // Reset adjustQty after adjustment
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-2">
      <input
        type="text"
        placeholder="Search article..."
        value={filters.article}
        onChange={(e) => handleFilterChange('article', e.target.value)}
        className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="sm:col-span-1">
      <button onClick={handleCancelFilters} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
      </div>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden"></div>
      <table className="min-w-full text-left text-sm font-light rounded">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr className="bg-slate-200">
            <th scope='col' className='px-4 py-2'>Article Code</th>
            <th scope='col' className='px-4 py-2'>Article</th>
            <th scope='col' className='px-4 py-2'>Category</th>
            <th scope='col' className='px-4 py-2'>Size</th>
            <th scope='col' className='px-4 py-2'>Qty</th>
            <th scope='col' className='px-4 py-2'>Adjust Qty</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.articleCode} className='border-b dark:border-neutral-500'>
              <td className='whitespace-nowrap px-4 py-2'>{item.articleCode}</td>
              <td className='whitespace-nowrap px-4 py-2'>{item.article}</td>
              <td className='whitespace-nowrap px-4 py-2'>{item.category}</td>
              <td className='whitespace-nowrap px-4 py-2'>{item.size}</td>
              <td className='whitespace-nowrap px-4 py-2'>{item.qty}</td>
              <td className='whitespace-nowrap px-4 py-2'>
                <div className="flex gap-2 items-center">
                <input
                  type="number"
                  value={adjustQty}
                  onChange={(e) => setAdjustQty(Number(e.target.value))}
                  className="px-2 block rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button onClick={() => handleAdjustQty(item.articleCode, adjustQty)}>
                  Adjust
                </button>
                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
};

export default AdjustStock;
