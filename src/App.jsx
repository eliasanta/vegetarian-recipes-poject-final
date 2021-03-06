import "./App.scss";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { motion } from "framer-motion";
import { VeggieProvider } from "./context/veggieContext";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <VeggieProvider>
      <Router>
        <div className="nav-logo-search">
          <ErrorBoundary>
            <Nav
              animate={{
                scale: [1, 1.3, 1.3, 1.3, 1],
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{ duration: 1 }}
            >
              <div className="nav-title">
                <GiForkKnifeSpoon style={{ color: "black" }} />
                <Link className="title-font" to={"/"}>
                  Vegelicious
                </Link>
              </div>
            </Nav>
          </ErrorBoundary>
          <ErrorBoundary>
            <Search className="search" />
          </ErrorBoundary>
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
