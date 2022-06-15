import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    //put input in the Url
    navigate("/searched/" + input);
  };
  return (
    <ErrorBoundary>
      <form onSubmit={submitHandler}>
        <div className="form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)} //update value
            placeholder="Search"
          ></input>
        </div>
      </form>
    </ErrorBoundary>
  );
}

export default Search;
