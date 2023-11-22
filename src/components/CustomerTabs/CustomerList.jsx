import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillEdit} from "react-icons/ai";
import {BsFillFileTextFill} from 'react-icons/bs'



const CustomerList = () => {

  const dummyData = [
    {Id:1, name:'virat Kohli', country:'India' , state:'Delhi'},
    {Id:2, name:'Glenn Maxwell', country:'Australia' , state:'Melbourne'},
    {Id:3, name:'Ab Devillers', country:'South Africa' , state:'cape Town'},
    {Id:4, name:'chris Gayle', country:'Westindies' , state:'Gayle Island'},
    {Id:5, name:'Rohit Sharma', country:'India' , state:'Mumbai'},
    {Id:6, name:'Steven Smith', country:'Australia' , state:'sydney'},
    {Id:7, name:'Kl Rahul', country:'India' , state:'Bangalore'},
  ]


  return (
    <div className="px-4 py-4">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light rounded">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr className="bg-slate-200">
                  <th scope="col" className="px-4 py-2">Id</th>
                  <th scope="col" className="px-4 py-2">Customer Name</th>
                  <th scope="col" className="px-4 py-2">country</th>
                  <th scope="col" className="px-4 py-2">State</th>
                  <th scope="col" className="px-4 py-2">view</th>
                 
                </tr>
              </thead>
              <tbody>
                {dummyData.map((item, index) => (
                  <tr key={index} className={`border-b dark:border-neutral-500 `}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium">{item.Id}</td>
                    <td className="whitespace-nowrap px-4 py-2">{item.name}</td>
                    <td className="whitespace-nowrap px-4 py-2">{item.country}</td>
                    <td className="whitespace-nowrap px-4 py-2">{item.state}</td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <div className="flex gap-4">
                      <Link to={`/edit-customer/${item.Id}`} >
                        <AiFillEdit className="text-sky-400 text-lg"/>
                      </Link>
                      <Link to={`/view-customer/${item.Id}`}>
                        <BsFillFileTextFill className="text-sky-400 text-lg"/>
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