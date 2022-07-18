import React from "react";

import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import useClientApi from "api/useClientApi";

function Searched() {
  let { search } = useParams();

  const { data, loading } = useClientApi(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`
  );

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "-15px",
              marginTop: "50px",
            }}
          >
            Searched results :
          </h2>
          <div className="grid">
            {data?.results.map((item) => {
              return (
                <Card
                  className="card--style"
                  /* style={{ maxWidth: "300px", margin: "0 auto" }} */
                  key={item.id}
                >
                  <Link to={"/recipe/" + item.id}>
                    <img
                      className="searched--img"
                      src={item.image}
                      alt={item.title}
                    ></img>
                    <h4 style={{ textAlign: "center" }}>{item.title}</h4>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const Card = styled.div`
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
