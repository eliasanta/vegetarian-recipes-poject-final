import "./style/App.css";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { motion } from "framer-motion";

import { VeggieProvider } from "./context/veggieContext";

function App() {
  return (
    <VeggieProvider>
      <Router>
        <div className="nav-logo-search">
          <Nav
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="nav-title">
              <GiForkKnifeSpoon style={{ color: "black" }} />
              <Link className="title-font" to={"/"}>
                Vegelicious
              </Link>
            </div>
          </Nav>
          <Search className="search" />
        </div>
        <Pages />
      </Router>
    </VeggieProvider>
  );
}

const Nav = styled(motion.div)`
  display: flex;
  aligned-item: center;
  justify-content: space-around;
  svg {
    font-size: 2rem;
    margin-right: 1rem;
  }
`;

export default App;
