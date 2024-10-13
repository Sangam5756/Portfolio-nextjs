// app/page.js

"use client"; // Mark as Client Component

import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/hello");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>{data ? data.message : "Loading..."}</p>
      {data?.course?.map((course) => (
        <p>{course?._id}{course?.title}{course?.price}</p>
      ))}
    </div>
  );
};

export default Home;
