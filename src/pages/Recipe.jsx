import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const [isPending, setIsPending] = useState(false);
  let params = useParams();

  useEffect(() => {
    fetchDetails(params.name); /* another way to use params */
  }, [params.name]);

  const fetchDetails = async (name) => {
    try {
      setIsPending(true);
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();
      setIsPending(false);
      setDetails(detailData);
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
  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
        <DetailWrapped className="detailWrapped">
          <div className="detail">
            <div>
              <h2>{details.title}</h2>
            </div>
            <div>
              <img
                className="image-info"
                src={details.image}
                alt={details.title}
              />
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
                <h3
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></h3>
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
