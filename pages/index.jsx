// import { useState,useEffect } from "react"

// export default function Home(){
//     const [users,setUsers]= useState([]);

//     useEffect(()=>{
//         async function fetchData(){
//             const res = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await res.json();
//             setUsers(data)
//         }
//         fetchData();
//     },[])
//     return(
//         <div>
//             <h1>User Lists (CSR)</h1>
//             {
//                 users.map((user)=>(
//                     <p key={user.id}>{user.name}</p>
//                 ))
//             }
//         </div>
//     )
// }

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
    revalidate: 10, //ISR
  };
}

export default function Home({ users }) {
  return (
    <div>
      <h1>User Lists (SSG+ISR)</h1>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
