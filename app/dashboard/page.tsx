"use client";

import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch('api/profile', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setData(data))
  }, []);
  return(
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>

      <ul>
        <li>{data?.user?.email}</li>
        <li>{data?.message}</li>
      </ul>
    </div>
  )
}