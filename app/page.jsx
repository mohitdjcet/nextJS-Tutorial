"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  //GET User
  const fetchUser = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data.data);
  };

  //Load Data
  useEffect(() => {
    fetchUser();
  }, []);

  //Create User or Update User
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Update User
    if (editId) {
      await fetch(`/api/users/${editId}`, {
        method: "PUT",
        headers: {
          "Context-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });
      alert("User Updated");
      setEditId(null);
      setName("");
      setEmail("");
      fetchUser();
    } else {
      //Add user
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

      fetchUser();
    }
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user._id);
  };
  return (
    <div>
      <h1>{editId ? "Updated User" : "Create User"}</h1>
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

        <button type="submit">{editId ? "Update User" : "Create User"}</button>
      </form>

      <hr />

      <h2>Users List</h2>
      {users.map((user) => (
        <div key={user._id}>
          {user.name} - {user.email}
          <button onClick={() => handleEdit(user)}>Edit User</button>
        </div>
      ))}
    </div>
  );
}
