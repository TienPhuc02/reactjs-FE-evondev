// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";

const HackerNewsWithReducer = () => {
  const [query, setQuery] = useState("");
  const [arrHackerNew, setArrHackerNew] = useState([]);
  const [loading, setLoading] = useState(false);
  const callHackerNew = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query}`
    );
    console.log(res);
    if (res && res.data) {
      setArrHackerNew(res.data.hits);
    }
    setLoading(false);
  };
  const handleFetching = () => {
    const input = document.querySelector("input");
    const value = input.value;
    setQuery(value);
  };
  useEffect(() => {
    callHackerNew();
  }, [query]);
  return (
    <div className="hacker-new-container w-[1000px] mx-auto mt-[20px] border shadow-lg rounded-xl p-5 ">
      <div className="flex heading mb-[20px]">
        <input
          type="text "
          className="input border shadow-lg rounded-xl p-5 w-[70%] font-semibold"
        />
        <div
          onClick={(e) => handleFetching(e)}
          className="bg-blue-500 ml-5 w-[20%] items-center justify-center flex p-2 cursor-pointer  rounded-xl text-white font-semibold "
        >
          Fetching
        </div>
      </div>
      {loading === true ? (
        <div className="loading flex justify-center items-center">
          <button
            type="button"
            className="bg-indigo-500 rounded-xl flex justify-center font-semibold text-white items-center p-3"
            disabled
          >
            <svg
              viewBox="0 0 24 24"
              className="animate-spin h-6 w-6 border-white  border-4  border-r-transparent mr-2 rounded-full"
            ></svg>
            Processing...
          </button>
        </div>
      ) : (
        arrHackerNew.length > 0 &&
        arrHackerNew.map((item, index) => {
          return (
            <div key={index} className="inline-block mr-2">
              <div className="bg-slate-200 item-content mt-[20px] p-3 rounded-lg inline-block">
                {item.title}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default HackerNewsWithReducer;
