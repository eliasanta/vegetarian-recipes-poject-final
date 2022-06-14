import { Link } from "react-router-dom";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export const NotFound = () => {
  return (
    <div>
      <h3 style={{ marginTop: "4rem" }}>
        Sorry...your link isn't correct, search something{" "}
        <BsFillArrowUpSquareFill /> or Click
        <Link to="/">
          {" "}
          <u>HERE</u>{" "}
        </Link>
        to back in the Home Page
      </h3>
    </div>
  );
};
