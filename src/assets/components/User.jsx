

export default function User({user}) {
    return (
        <div className='user'>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
        </div>
    )
}