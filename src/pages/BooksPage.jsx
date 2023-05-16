import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../api";
const BooksPage = () => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState([false]);
  useEffect(() => {
    axios
      .get(`${api}/achievements/books/read`, {
        mode: "cors",
      })
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setData("Not Available");
    }
  }, [isError]);
  console.log(data);
  return (
    <>
      <Container sx={{ py: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" color="primary" textAlign="center">
            Books Published
          </Typography>
          <Typography variant="h5" color="teritiary" textAlign="center">
            Department of Electrical Engineering
          </Typography>
        </motion.div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
            viewport={{ once: true }}
          >
            <Box borderColor={"primary.main"} sx={{ borderTop: "7px solid", px: 5 }}>
              <hr />
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
            viewport={{ once: true }}
          >
            <Box sx={{ borderTop: "7px solid black", px: 4, pb: 3 }}>
              <hr />
            </Box>
          </motion.div>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img alt="books_png" src="/Images/books.png" width={"60%"} />
        </Box>

        {/* {data?.map((item, key) => ( */}
        {/* {item.year}
                  {item.name}
                  {item.author} */}
        <br />
        {data?.map((item, key) => (
          <>
            <Grid
              container
              justifyContent="space-between"
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Typography mt={1} color={"primary.main"} fontWeight={600}>
                  {item.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontSize={14} color="gray">
                  {item.year}
                </Typography>
              </Grid>
            </Grid>
            <Typography fontSize={12} mb={1}>
              {item.author}
            </Typography>

            <hr color="rgb(50,50,50,.1)" />
          </>
        ))}
      </Container>
    </>
  );
};

export default BooksPage;
