import React from 'react'

export default function PageIndexing() {
  return (
    <main className='h-20 w-full p-2'>
    <div className='h-full w-full flex justify-center items-center gap-2 shadow-inset-xl rounded-xl bg-gray-50'>
      <button className='text-gray-400'>Previous</button>
      <ul className='flex h-full justify-center items-center gap-2'>
        <li className='text-blue-700'>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <button>Next</button>

    </div>
    </main>
  )
}
