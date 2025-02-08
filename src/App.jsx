import {useState } from 'react'

import './App.css'
import User from './components/User';

const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
  ];

function App() {
    const [name,setName]=useState("");
    const [age,setAge]=useState("")
    const [userData,setUsersData]=useState(users)

    const handleSubmit=(event)=> {
        event.preventDefault()
        setUsersData((userData)=> 
        [...userData,{name,age,id:Math.random()}]);
        setName(""); // Clear input fields
        setAge("");
    }
        
  return (
    <>
      {userData.map((user)=>(
        <User key={user.id} user={user} userData={userData} setUsersData={setUsersData}/>
      ))}
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={(event)=>
         setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="text" value={age} onChange={(event)=>
         setAge(event.target.value)}  />
      </div>
      <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
