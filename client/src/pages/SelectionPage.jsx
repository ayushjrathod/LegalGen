import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/features.json";

const SelectionPage = () => {
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (id) => {
    setShowMore((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="h-screen">
      <div className="flex flex-wrap justify-center">
        {data.map((item) => (
          <div className=" w-72 m-2 p-4 bg-gray-200 border-2 rounded-xl" key={item.id}>
            <h2 className="font-Asap mb-2 p-2 rounded-md font-semibold">{item.name}</h2>
            <p className="my-4 rounded-md p-2">
              {showMore[item.id] ? item.description : `${item.description.substring(0, 100)}...`}
              <button className=" text-blue-700" onClick={() => toggleShowMore(item.id)}>
                {showMore[item.id] ? "Show Less" : "Show More"}
              </button>
            </p>
            <Link
              className="font-Asap text-xl p-2 rounded-md w-80 justify-center top-[10px] text-white text-[25px] font-semibold bg-slate-950 px-5 py-1"
              to={`/select/${item.shortName}`}
            >
              Generate
            </Link>
            {/*
            <p>{item.link}</p>
            <p>{item.image}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectionPage;
