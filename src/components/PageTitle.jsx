import React from "react";
import { ReactPhotoCollage } from "react-photo-collage";
import { Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";



const PageTitle = (props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" color="primary" textAlign="center">
          {props.title}
        </Typography>
        {/* <Typography variant="h5" color="teritiary" textAlign="center">
          Department of Electrical Engineering
        </Typography> */}
      </motion.div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
          viewport={{ once: true }}
        >
          <Box
            borderColor={"primary.main"}
            sx={{ borderTop: "7px solid", px: 5 }}
          >
            <hr />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
          viewport={{ once: true }}
        >
          <Box sx={{ borderTop: "7px solid black", px: 4 }}>
            <hr />
          </Box>
        </motion.div>
      </Box>
      <br />
      <br />
    </>
  );
};

export default PageTitle;
