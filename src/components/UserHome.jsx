import React from 'react'
import ProductBox from './ProductBox'

export default function UserHome() {
  return (
    <section className='h-screen w-full bg-red-00 p-2 flex justify-center items-center'>
      <article className='p-3 h-full w-3/4 rounded-xl shadow-inset-xl bg-gray-100 overflow-scroll flex justify-center items-start'>
        <main className='sm:grid grid-cols-4 w-full'>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        <ProductBox/>
        </main>
      </article>
    </section>
  )
}
