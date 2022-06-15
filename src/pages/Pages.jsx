import Home from "./Home";
import React from "react";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { NotFound } from "./NotFound";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ErrorBoundary from "../components/ErrorBoundary";

function Pages() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location}>
          <Route path="/" element={<Home />} />
          <Route
            path="/cuisine/:type"
            element={
              <ErrorBoundary>
                <Cuisine />
              </ErrorBoundary>
            }
          />
          {/* dynamic with:type*/}
          <Route
            path="/searched/:search" //search is what I put in the search bar
            element={
              <ErrorBoundary>
                <Searched />
              </ErrorBoundary>
            }
          />
          <Route
            path="/recipe/:name"
            element={
              <ErrorBoundary>
                <Recipe />
              </ErrorBoundary>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Pages;
