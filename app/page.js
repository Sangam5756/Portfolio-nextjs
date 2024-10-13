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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">FETCHING DATA FROM MONGODB</h1>
      <p className="text-lg text-gray-600 mb-8">
        {data ? data.message : "Loading..."}
      </p>
      <div className="grid grid-cols-1 gap-4 w-full max-w-lg">
        {data?.course?.map((course) => (
          <div key={course._id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
            <p className="text-gray-600">Price: ${course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
