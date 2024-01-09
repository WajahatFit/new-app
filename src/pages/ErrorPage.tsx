import React from "react";
import { Link } from "react-router-dom";
import "../styles/errorpage.css";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <div className="main">
        <div className="fof">
          <h1>Error 404</h1> <br></br>
          <h1>Page not found</h1>
          <Link to="/">
            <p className="mt-12 text-2xl text-violet-500 border-dashed border-2 border-violet-500 w-fit py-4 px-8 mx-auto hover:bg-violet-500 hover:text-white hover:text-2xl">
              TAKE ME HOME
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
