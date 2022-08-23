import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const [stick, setStick] = useState(false);
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleSearch = () => {
    navigate(`/search/${value}`);
    setValue("");
  };
  const handleSubmit = () => {
    navigate(`/search/${value}`);
    setValue("");
  };
  const handleScroll = () => {
    let windowHeight = window.scrollY;
    if (windowHeight > 100) {
      setStick(true);
    } else {
      setStick(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={
        stick
          ? "flex items-center justify-between p-4 w-full bg-white shadow-md fixed top-0 left-0 z-[1000] transition-all"
          : "flex items-center justify-between p-4 w-full bg-white shadow-md"
      }>
      <Link to="/">
        <h1 className="text-red-600 text-3xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div className="flex items-center gap-5">
        <div className="text-black font-medium">
          <NavLink to="/movieslist">Movies List</NavLink>
        </div>
        <div className="text-black font-medium">
          <NavLink to="/tvshow">TV Shows</NavLink>
        </div>
        <div className="text-black font-medium">
          <NavLink to="/collections">Collections</NavLink>
        </div>
      </div>
      <div className="flex items-center relative">
        <form action="" className="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search movies "
            className="px-4 py-2 md:w-[300px] w-[200px] bg-white border text-black placeholder:text-sm rounded"
          />
        </form>
        <div
          className="absolute top-[50%] right-[5%] -translate-y-[50%] bg-transparent"
          onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 dark:text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#000"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div className="w-[50px] h-[28px] p-1 rounded-2xl bg-black">
        <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
      </div>
    </div>
  );
};
