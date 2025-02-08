import { useState } from 'react'

import './App.css'
import User from './assets/components/User';

const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
    { id: 4, name: "David", age: 22 }
  ];

function App() {
  return (
    <>
      {users.map((user)=>(
        <User key={user.id} user={user}/>
      ))}
    </>
  )
}

export default App
