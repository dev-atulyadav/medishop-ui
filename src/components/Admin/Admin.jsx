import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Section from './Section'

export default function Admin() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Section/>
    </>
  )
}
