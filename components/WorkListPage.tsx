import React from "react";

const WorkListPage = () => {
  return (
    <div>
      <form action="" className="flex flex-wrap gap-4 items-center">
        <div className="">
          <label className="mr-3 text-2xl font-semibold" htmlFor="Name">
            Name
          </label>
          <input
            className="border-cyan-600 border-2 px-5 py-1 text-xl font-medium outline-none rounded-md"
            type="text"
          />
        </div>
        <div className="">
          <label className="mr-3 text-2xl font-semibold" htmlFor="Name">
            Email
          </label>
          <input
            className="border-cyan-600 border-2 px-5 py-1 text-xl font-medium outline-none rounded-md"
            type="email"
            placeholder="....@gmail.com"
          />
        </div>

        <button className="bg-[#04051b] text-cyan-100 text-2xl font-semibold border-cyan-950 border-2 px-3 py-1 rounded hover:bg-[#0a1937] hover:scale-105">
          Add
        </button>
      </form>
    </div>
  );
};

export default WorkListPage;
