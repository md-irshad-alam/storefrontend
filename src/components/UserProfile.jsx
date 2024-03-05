import React, { useContext } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/MyContxt';

const UserProfile = () => {
  const { currentColor } = useStateContext();
  const { loggedUser, logout } = useContext(AuthContext);
  const { email, mobile, fname, lname } = loggedUser ? loggedUser : {};
  console.log(loggedUser);
  const history = useNavigate();

  const token = false;

  const handlelogout = () => {};
  return (
    <div className='nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
      <>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-lg dark:text-gray-200'>
            User Profile
          </p>
          <Button
            icon={<MdOutlineCancel />}
            color='rgb(153, 171, 180)'
            bgHoverColor='light-gray'
            size='2xl'
            borderRadius='50%'
          />
        </div>
        <div className='flex gap-3 items-center mt-6 border-color border-b-1 pb-6'>
          <img
            className='rounded-full h-24 w-24'
            src={avatar}
            alt='user-profile'
          />
          <div className=' w-full'>
            <p className='font-semibold text-xl dark:text-gray-200'>
              {' '}
              {fname + ' ' + lname}
            </p>
            <p className='text-gray-500 text-sm dark:text-gray-400'>
              {' '}
              Administrator Details{' '}
            </p>
            <p className='f text-sm w-full '>
              {' '}
              Email Id : {email}
              <br />
              <span className='block'>Mobile : {mobile}</span>
            </p>
          </div>
        </div>
        <div></div>
        <div className='mt-5 flex items-center gap-x-4'>
          {loggedUser ? (
            <button
              onClick={() => logout()}
              className={
                token
                  ? ` w-1/3 bg-red-300 rounded-sm m-auto p-3 h-fit pl-3 pr-3 pt-1 pb-1 `
                  : 'w-1/3 rounded-sm m-auto p-3 h-fit pl-3 pr-3 pt-1 pb-1  bg-yellow-400 text-zinc-500  '
              }
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => history('/auth/login')}
              className=' w-1/3 bg-green-600 text-white active:bg-red-500 hover:bg-green-400 transition rounded-sm m-auto p-3 h-fit pl-3 pr-3 pt-1 pb-1'
            >
              login
            </button>
          )}
        </div>
      </>
      {/* ) : (
        
      )} */}
    </div>
  );
};

export default UserProfile;
