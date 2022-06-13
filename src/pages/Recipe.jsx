import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  useEffect(() => {
    fetchDetails(params.name); /* altro modo per usare params */
  }, [params.name]);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  return (
    <DetailWrapped className="detailWrapped">
      <div className="detail">
        <div>
          <h2>{details.title}</h2>
        </div>
        <div>
          <img className="image-info" src={details.image} alt={details.title} />
        </div>
      </div>
      <Info>
        <div className="buttons">
          <Btn
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Btn>
          <Btn
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Btn>
        </div>
        {activeTab === "instructions" && (
          <div className="info-section">
            <h2>Summary</h2>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h2>Recipe</h2>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapped>
  );
}
const DetailWrapped = styled.div`
  .active {
    background: linear-gradient(35deg, #639259, #049307);
    color: white;
  }
`;

const Btn = styled.button`
  padding: 1rem 2rem;
  margin-top: 1rem;
  margin-right: 2rem;
  color: #044c0b;
  backgroud: white;
  border-radius: 0.5rem;
  border: 2px solid black;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 1rem;
`;

export default Recipe;
