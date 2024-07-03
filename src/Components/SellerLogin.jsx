/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import PasswordChecker from './PasswordChecker';

const SellerDashboard = () => {
  const [color, setColor] = useState("olive");

  return (
    <>
      <PasswordChecker />
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-end top-4 right-4 gap-3'>
          <div className='flex flex-col bg-white shadow-lg px-3 py-2 rounded-3xl'>
            <button 
              className='outline-none px-3 py-1 mb-2 rounded-full text-black shadow-lg font-bold' 
              style={{ backgroundColor: '#4c1d95' }}
              onClick={() => setColor('#4c1d95')}
            >
              Dark Purple
            </button>
            <button 
              className='outline-none px-3 py-1 mb-2 rounded-full text-black shadow-lg font-bold' 
              style={{ backgroundColor: '#6d28d9' }}
              onClick={() => setColor('#6d28d9')}
            >
              Deep Violet
            </button>
            <button 
              className='outline-none px-3 py-1 mb-2 rounded-full text-black shadow-lg ' 
              style={{ backgroundColor: '#06b6d4' }}
              onClick={() => setColor('#06b6d4')}
            >
              Bright Cyan
            </button>
            <button 
              className='outline-none px-3 py-1 mb-2 rounded-full text-black shadow-lg ' 
              style={{ backgroundColor: '#a5f3fc' }}
              onClick={() => setColor('#a5f3fc')}
            >
              Pale Cyan
            </button>
            <button 
              className='outline-none px-3 py-1 mb-2 rounded-full text-black shadow-lg ' 
              style={{ backgroundColor: '#e5e5e5' }}
              onClick={() => setColor('#e5e5e5')}
            >
              Light Gray
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerDashboard;
