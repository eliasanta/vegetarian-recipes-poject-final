import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Category from "../components/Category";
import axios from "axios";
import Loading from "../components/Loading";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const [isPending, setIsPending] = useState(false);
  let { type } = useParams();

  const getCuisine = async (type) => {
    try {
      setIsPending(true);

      const recepies = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=15&cuisine=${type}`
      );
      setIsPending(false);
      setCuisine(recepies.data.results);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        alert(error.message);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      }
      console.log(error.config);
    }
  };
  useEffect(() => {
    getCuisine(type);
  }, [type]);

  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
}

export default Cuisine;
