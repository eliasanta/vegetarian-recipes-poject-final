import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
/* import Loading from "../components/Loading"; */
import LoadingLottie from "components/LoadingLottie";
import useClientApi from "../api/useClientApi";

function Recipe() {
  let { name } = useParams();

  const { data, loading } = useClientApi(
    `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
  );
  const [activeTab, setActiveTab] = useState("instructions");

  return (
    <div>
      {loading ? (
        <LoadingLottie />
      ) : (
        <DetailWrapped className="detailWrapped">
          <div className="detail">
            <div>
              <h2>{data?.title}</h2>
            </div>
            <div>
              <img className="image-info" src={data?.image} alt={data?.title} />
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
                <h3 dangerouslySetInnerHTML={{ __html: data?.summary }}></h3>
                <h2>Recipe</h2>
                <h3
                  dangerouslySetInnerHTML={{ __html: data?.instructions }}
                ></h3>
              </div>
            )}
            {activeTab === "ingredients" && (
              <ul>
                {data?.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            )}
          </Info>
        </DetailWrapped>
      )}
    </div>
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
