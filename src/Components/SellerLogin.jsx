/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

const SellerDashboard = () => {
  const [color, setColor] = useState("olive");

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 h-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl'>
          <button 
            className='outline-none px-3 py-1 rounded-full text-black shadow-lg' 
            style={{ backgroundColor: '#4c1d95' }}
            onClick={() => setColor('#4c1d95')}
          >
            Dark Purple
          </button>
          {/*2nd button*/ }
          <button 
            className='outline-none px-3 py-1 rounded-full text-black shadow-lg' 
            style={{ backgroundColor: '#6d28d9' }}
            onClick={() => setColor('#6d28d9')}
          >
             Deep Violet
          </button>
          {/*3rd button*/}
          <button 
            className='outline-none px-3 py-1 rounded-full text-black shadow-lg' 
            style={{ backgroundColor: '#06b6d4' }}
            onClick={() => setColor('#06b6d4')}
          >
            Bright Cyan
          </button>
          {/*4rth color*/}
          <button 
            className='outline-none px-3 py-1 rounded-full text-black shadow-lg' 
            style={{ backgroundColor: '#a5f3fc' }}
            onClick={() => setColor('#a5f3fc')}
          >
            Pale Cyan
          </button>
          {/*5th color */}
          <button 
            className='outline-none px-3 py-1 rounded-full text-black shadow-lg' 
            style={{ backgroundColor: '#e5e5e5' }}
            onClick={() => setColor('#e5e5e5')}
          >
            Light Gray
          </button>
        </div>
      </div>
    </div>
  );
};


export default SellerDashboard;
