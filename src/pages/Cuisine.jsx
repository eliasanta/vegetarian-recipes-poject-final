import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Category from "../components/Category";
import Loading from "../components/Loading";
import useClientApi from "../api/useClientApi";

function Cuisine() {
  let { type } = useParams();
  const { data, loading } = useClientApi(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=15&cuisine=${type}`
  );

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Category />
          <h2 className="random-title">Here a list :</h2>
          <motion.div
            className="grid"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {data?.results.map((item) => {
              return (
                <div className="card card--style" key={item.id}>
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
