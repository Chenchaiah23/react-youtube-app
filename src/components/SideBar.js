import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-56 col-span-2">
      <ul>
        <li className="py-1  hover:cursor-pointer font-bold hover:bg-gray-400 hover:rounded-xl">
          <Link to="/">Home</Link>
        </li>
        <li className="py-1  hover:cursor-pointer font-bold hover:bg-gray-400 hover:rounded-xl">
          Shorts
        </li>
        <li className="py-1  hover:cursor-pointer font-bold hover:bg-gray-400 hover:rounded-xl">
          Subscriptions
        </li>
      </ul>
      <hr className="py-3"/>
      <h1 className="font-bold">Explore</h1>
      <ul className="px-2">
        <li className="py-1  hover:cursor-pointer font-bold hover:bg-gray-400 hover:rounded-xl">
          Trending
        </li>
        <li className="py-1  hover:cursor-pointer font-bold hover:bg-gray-400 hover:rounded-xl">
          Shopping
        </li>
        <li className="py-1  hover:cursor-pointer font-bold hover:bg-gray-400 hover:rounded-xl">
          Music
        </li>
        <li className="py-1  hover:cursor-pointer font-bold hover:bg-gray-400 hover:rounded-xl">
          Movies
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
