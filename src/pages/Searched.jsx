import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import axios from "axios";
import Loading from "../components/Loading";

function Searched() {
  const [searchedRecepies, setSearchedRecepies] = useState([]);
  const [isPending, setIsPending] = useState(false);
  let { search } = useParams();

  const getSearched = async (searched) => {
    setIsPending(true);
    const recepies = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searched}`
    );
    setIsPending(false);
    setSearchedRecepies(recepies.data.results);
  };
  useEffect(() => {
    getSearched(search);
  }, [search]);
  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
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
      )}
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
