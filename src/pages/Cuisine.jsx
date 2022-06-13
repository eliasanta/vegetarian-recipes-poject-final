import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Category from "../components/Category";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let { type } = useParams();

  const getCuisine = async (type) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=15&cuisine=${type}`
    );
    const recepies = await data.json();
    setCuisine(recepies.results);
  };
  useEffect(() => {
    getCuisine(type);
  }, [type]);

  return (
    <div>
      <Category />
      <h3 className="random-title">Here a list:</h3>
      <motion.div
        className="grid"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {cuisine.map((item) => {
          return (
            <div className="card" key={item.id}>
              <Link className="link" to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.title}></img>
                <h4>{item.title}</h4>
              </Link>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Cuisine;
