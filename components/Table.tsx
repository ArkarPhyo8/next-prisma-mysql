"use client";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [workerData, setWorkerData] = useState([]);
  console.log(workerData);

  const getWorkDataFromApi = async () => {
    const res = await fetch("http://localhost:3000/blogs");
    const data = await res.json();
    setWorkerData(data);
  };
  useEffect(() => {
    getWorkDataFromApi();
  }, []);
  return (
    <div className="bg-[#41b5dc] max-w-[70%] mx-auto">
      <table className="border-[#0a0101] border-collapse border-2 w-full">
        <thead className="bg-[#056323]">
          <tr>
            <th className="border border-slate-600 ">ID .</th>
            <th className="border border-slate-600 ">Name</th>
            <th className="border border-slate-600 ">Email</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Table;
