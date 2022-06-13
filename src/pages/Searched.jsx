import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

function Searched() {
  const [searchedRecepies, setSearchedRecepies] = useState([]);
  let { search } = useParams();

  const getSearched = async (searched) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searched}`
    );
    const recepies = await data.json();
    console.log(recepies.results);
    setSearchedRecepies(recepies.results);
  };
  useEffect(() => {
    getSearched(search);
  }, [search]);
  return (
    <div className="grid">
      {searchedRecepies.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title}></img>
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
