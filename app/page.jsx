"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  //GET User
  const fetchUser = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data.data);
    console.log(data.data);
  };

  //Load Data
  useEffect(() => {
    fetchUser();
  }, []);

  //Create User
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Context-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();
    console.log(data);
    alert("User Created");

    setName("");
    setEmail("");
  };
  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Create User</button>
      </form>

      <hr />

      <h2>Users List</h2>
      {users.map((user) => (
        <div key={user._id}>
          {user.name}-{user.email}
        </div>
      ))}
    </div>
  );
}
