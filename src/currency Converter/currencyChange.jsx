import React from 'react'

 const currencyChange = () => {
  return (
    // <div className='grid sm:grid-cols-3 gap-3'>
    // {/* cyan is color between blue and green
    // slate is lightest pallets of color*/}
    //   <div className='min-h-[120px] rounded-lg shadow-sm bg-slate-800  text-cyan-50 '><p>hello world</p></div>
    //   <div className='min-h-[120px] rounded-lg shadow-sm bg-slate-400'><p>good morning!!</p></div>
    //   <div className='min-h-[120px] rounded-lg shadow-sm bg-slate-300'><p>good morning!!</p></div>
    // </div>
    <div className='grid sm:grid-cols-3 gap-3 bg-red-200'>
    {/* cyan is color between blue and green
    slate is lightest pallets of color*/}
      <div className='min-h-[120px] rounded-lg shadow-sm bg-slate-800  text-cyan-50 '><p>hello world</p></div>
      <div className='min-h-[120px] rounded-lg shadow-sm bg-slate-400'><p>good morning!!</p></div>
      <div className='min-h-[120px] rounded-lg shadow-sm bg-slate-300'><p>good morning!!</p></div>
    </div>
  )
}
export default currencyChange
