import React from "react";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div>
      <h1 className="pageNotFound"> Oops!</h1>
      <h2 className="notExist">This page does not exist!</h2>
      <div className="take-me-home">
        <a href="/" className="takemehome">
          Take me home!
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
