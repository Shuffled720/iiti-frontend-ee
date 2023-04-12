import { Container } from "@mui/material";
import React from "react";
import AboutUs from "./AboutUs";
import { motion } from "framer-motion";
import Events from "./Events";
const Body = () => {
  return (
    <>
      <Container>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
          viewport={{ once: true }}
        >
          <Events />
        </motion.div>
        <AboutUs />
      </Container>
    </>
  );
};

export default Body;
