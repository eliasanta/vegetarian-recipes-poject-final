import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry..</h2>
      <div>Your link isn't correct</div>
      <div>
        Click
        <Link to="/">
          {" "}
          <u>HERE</u>{" "}
        </Link>
        to back in the Home Page
      </div>
    </div>
  );
};
