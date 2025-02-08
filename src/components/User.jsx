

export default function User({user,userData,setUsersData}) {
    const handleDlete=()=> {
       setUsersData(prevUsersData => prevUsersData.filter((item)=>item.id !== user.id))
    }
    return (
        <div className='user'>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
            <button onClick={handleDlete} style={{backgroundColor:"red"}}>Delete</button>
        </div>
    )
}