import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    //put input in the Url
    navigate("/searched/" + input);
    setInput("");
  };
  return (
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
  );
}

export default Search;
