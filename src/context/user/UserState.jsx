import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserState(props) {
    const [data, setData] = useState([]);
  return (
    <UserContext.Provider value={data}>
      {props.children}
    </UserContext.Provider>
  )
}
