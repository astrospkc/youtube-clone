import React from "react";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <>
      <div className="text-red-600 text-2xl">Test</div>
      <div className="text-white hover:cursor-pointer">
        <Link to="/">Home</Link>
      </div>
      <Footer />
    </>
  );
};

export default Test;
