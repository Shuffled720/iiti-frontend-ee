import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";

export default function LabPage() {
  const [labs, setLabs] = useState([]);
  const [isError, setIsError] = useState([]);
  useEffect(() => {
    axios
      .get("https://rupal17.pythonanywhere.com/api/research/labs/read")
      .then((response) => setLabs(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setLabs("Not Available");
    }
  }, [isError]);
  console.log(labs);
  return (
    <div>
      <Container sx={{ py: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" color="primary" textAlign="center">
            Major Laboratories
          </Typography>
          <Typography variant="h5" color="teritiary" textAlign="center">
            Department of Electrical Engineering
          </Typography>
        </motion.div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
          >
            <Box sx={{ borderTop: "7px solid #105297", px: 5 }}>
              <hr />
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
          >
            <Box sx={{ borderTop: "7px solid black", px: 4 }}>
              <hr />
            </Box>
          </motion.div>
        </Box>

        <br />
        <br />
        {labs.map((item, i) => (
          <>
            <Typography>
              <a style={{ color: "#105297" }} href={item.link}>
                {item.name}
              </a>
              - led by {item.person}
            </Typography>
          </>
        ))}
      </Container>
    </div>
  );
}
