import { useEffect, useState } from "react"

export default function Home(){
    const [users,setUsers]= useState();

    useEffect(()=>{
        fetch("/api/users")
            .then(res=> res.json())
            .then(data=> setUsers(data.user))
    },[])
    return (
        <div>
            <h1>User Data</h1>
            {
                users && users.map(user=>(
                    <p key={user.id}>{user.name}</p>
                ))
            }
        </div>
    )
}