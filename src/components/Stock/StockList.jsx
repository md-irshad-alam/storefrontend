import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function StockList() {
  const [stockData, setStockData] = useState([
    {
      articleCode: 'A001',
      article: 'Article 1',
      category: 'Category 1',
      color: 'Color 1',
      size: 'Size 1',
      quantity: 10,
      details: 'Details for Article 1',
    },
    {
      articleCode: 'A002',
      article: 'Article 1',
      category: 'Category 1',
      color: 'Color 1',
      size: 'Size 1',
      quantity: 10,
      details: 'Details for Article 1',
    },
    {
      articleCode: 'A003',
      article: 'Article 1',
      category: 'Category 1',
      color: 'Color 1',
      size: 'Size 1',
      quantity: 10,
      details: 'Details for Article 1',
    },
    {
      articleCode: 'A004',
      article: 'Article 1',
      category: 'Category 1',
      color: 'Color 1',
      size: 'Size 1',
      quantity: 10,
      details: 'Details for Article 1',
    },
    {
      articleCode: 'A005',
      article: 'Article 1',
      category: 'Category 1',
      color: 'Color 1',
      size: 'Size 1',
      quantity: 10,
      details: 'Details for Article 1',
    },
    // ... Add more items to the array.
  ]);

  const [filters, setFilters] = useState({
    articleCode: '',
    article: '',
    category: '',
    color: '',
    size: '',
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    // Perform the search operation based on the selected filters here.
    // For this example, we'll simply filter the stock data based on the article code.
    setStockData(
      stockData.filter((item) =>
        item.articleCode.toLowerCase().includes(filters.articleCode.toLowerCase())
      )
    );
  };

  const handleCancel = () => {
    setFilters({
      articleCode: '',
      article: '',
      category: '',
      color: '',
      size: '',
    });
    setStockData([
      {
        articleCode: 'A001',
        article: 'Article 1',
        category: 'Category 1',
        color: 'Color 1',
        size: 'Size 1',
        quantity: 10,
        details: 'Details for Article 1',
      },
      {
        articleCode: 'A002',
        article: 'Article 1',
        category: 'Category 1',
        color: 'Color 1',
        size: 'Size 1',
        quantity: 10,
        details: 'Details for Article 1',
      },
      {
        articleCode: 'A003',
        article: 'Article 1',
        category: 'Category 1',
        color: 'Color 1',
        size: 'Size 1',
        quantity: 10,
        details: 'Details for Article 1',
      },
      {
        articleCode: 'A004',
        article: 'Article 1',
        category: 'Category 1',
        color: 'Color 1',
        size: 'Size 1',
        quantity: 10,
        details: 'Details for Article 1',
      },
      {
        articleCode: 'A005',
        article: 'Article 1',
        category: 'Category 1',
        color: 'Color 1',
        size: 'Size 1',
        quantity: 10,
        details: 'Details for Article 1',
      },
      // ... Add more items to the array.
    ]);
  };

  const handleAdjustStock = () => {
    // Adjust the stock based on the adjusted quantity here.
    // For this example, we'll simply increase the quantity of each item in the filtered stock data.
    const updatedStockData = stockData.map((item) => ({
      ...item,
      quantity: item.quantity + 1,
    }));
    setStockData(updatedStockData);
  };
  return (
    <div className="container mx-auto">
      <div className="mt-10 mb-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-1">
          <label htmlFor="articleCode" className="block text-sm font-medium leading-6 text-gray-900">
            ArticleCode
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="articleCode"
              id="articleCode"
              autoComplete="articleCode"
              onChange={handleFilterChange}
              className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="article" className="block text-sm font-medium leading-6 text-gray-900">
            Article
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="article"
              value={filters.article}
              onChange={handleFilterChange}
              className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="article" className="block text-sm font-medium leading-6 text-gray-900">
            Category
            </label>
            <div className="mt-2">
            <input
              type="text"
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            </div>
        </div>
        <div className="sm:col-span-1">
          <label htmlFor='color' className="block text-sm font-medium leading-6 text-gray-900">
            Color
            </label>
            <div className="mt-2">
            <input
              type="text"
              name="color"
              value={filters.color}
              onChange={handleFilterChange}
              className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
            Size
            </label>
            <div className='mt-2'>
            <input
              type="text"
              name="size"
              value={filters.size}
              onChange={handleFilterChange}
              className="px-2 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

      </div>

      <div className="flex space-x-4">
        <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
        <button onClick={handleCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Cancel
        </button>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light rounded">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr className="bg-slate-200">
                  <th scope="col" className="px-4 py-2">Article Code</th>
                  <th scope="col" className="px-4 py-2">Article</th>
                  <th scope="col" className="px-4 py-2">Category</th>
                  <th scope="col" className="px-4 py-2">Color (ctg.)</th>
                  <th scope="col" className="px-4 py-2">Size</th>
                  <th scope="col" className="px-4 py-2">Qty</th>
                  <th scope="col" className="px-4 py-2">Article Details</th>
                  <th scope="col" className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {stockData.map((item) => (
                  <tr key={item.articleCode} className={`border-b dark:border-neutral-500 `}>
                    <td className="whitespace-nowrap px-4 py-2" >{item.articleCode}</td>
                    <td className="whitespace-nowrap px-4 py-2" >{item.article}</td>
                    <td className="whitespace-nowrap px-4 py-2" >{item.category}</td>
                    <td className="whitespace-nowrap px-4 py-2" >{item.color}</td>
                    <td className="whitespace-nowrap px-4 py-2" >{item.size}</td>
                    <td className="whitespace-nowrap px-4 py-2" >{item.quantity}</td>
                    <td className="whitespace-nowrap px-4 py-2" >{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4 mb-4 mr-4">
        <Link to="/adjust-stock">
        <button onClick={handleAdjustStock} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Adjust Stock
        </button>
        </Link>        
      </div>
    </div >
  );
}

export default StockList;