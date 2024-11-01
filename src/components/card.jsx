import React from 'react'

export default function Card() {
  return (
    <div 
    className='bg-slate-100 h-3/4 w-2/4 rounded-lg p-5 flex justify-center items-center'
    >
        
        <div >
        <h2 className='text-[40px] text-gray-600 font-extrabold  '>
                <span className='text-blue-700'>Fancy </span>
                string</h2>
        <input type='text' placeholder='enter string' className='mx-auto w-full p-2 rounded'/>
        <button className='px-4 py-2 bg-blue-500 rounded text-white w-full my-4'>
            Fancy string
        </button>
        </div>
         
    </div>
  )
}
