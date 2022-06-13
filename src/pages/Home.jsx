import Category from "../components/Category";
import Veggie from "../components/Veggie";
import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Category />
      <Veggie />
    </motion.div>
  );
}

export default Home;
