import { FaPizzaSlice, FaHamburger, FaPepperHot } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiSnail } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Category() {
  return (
    <div>
      <h3 className="title-cuisine">
        Found anything...? take inspiration from some of the best cuisine in the
        world!
      </h3>
      <div className="list">
        <SLink className="sLink" to={"/cuisine/Italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </SLink>
        <SLink className="sLink" to={"/cuisine/French"}>
          <GiSnail />
          <h4>French</h4>
        </SLink>

        <SLink className="sLink" to={"/cuisine/American"}>
          <FaHamburger />
          <h4>American</h4>
        </SLink>
        <SLink className="sLink" to={"/cuisine/Thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </SLink>
        <SLink className="sLink" to={"/cuisine/Chinese"}>
          <GiChopsticks />
          <h4>Chinese</h4>
        </SLink>
        <SLink className="sLink" to={"/cuisine/Indian"}>
          <FaPepperHot />
          <h4>Indian</h4>
        </SLink>
      </div>
    </div>
  );
}
const SLink = styled(NavLink)`
  &.active {
    background: linear-gradient(35deg, #cece04bd, #73a606);
  }
`;

export default Category;
