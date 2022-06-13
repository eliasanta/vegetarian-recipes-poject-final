/* VEGGIE CONTEXT WITH LOCAL STORAGE */
import React, { useState, useEffect, createContext } from "react";
import url from "../components/Api";
import axios from "axios";

export const VeggieContext = createContext();

export const VeggieProvider = (props) => {
  const [veggieRecipes, setVeggieRecipes] = useState([]);

  useEffect(() => {
    getVeggieRecipes();
  }, []);

  const getVeggieRecipes = async () => {
    const check =
      localStorage.getItem(
        "veggie"
      ); /* check if veggie was saved in local storage */

    if (check) {
      /* if there is take it, transform it in a object and put in popular*/
      setVeggieRecipes(JSON.parse(check));
    } else {
      try {
        //if false take the fetch
        //fetch calls with API key and 9 recipes as response
        const response = await axios.get(url.veggieRecipesUrl);

        localStorage.setItem("veggie", JSON.stringify(response.data.recipes)); //add popular in local Storage
        setVeggieRecipes(response.data.recipes);
        /* console.log(data.recipes); */
      } catch (e) {
        console.log("sorry there is this problem", e.message);
      }
    }
  };
  return (
    <VeggieContext.Provider value={[veggieRecipes]}>
      {props.children}
    </VeggieContext.Provider>
  );
};
