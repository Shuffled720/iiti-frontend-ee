import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { api, image_api } from "../api";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
const BooksPage = () => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState([false]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`${api}/achievements/${params.achievement}/read`, {
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
        <PageTitle
          title={`${
            params.achievement === "books"
              ? "Books Published"
              : params.achievement === "students"
              ? "Students Achievement"
              : params.achievement === "faculty"
              ? "Faculty Achievement"
              : ""
          }`}
        />
        <br />
        {data?.map((item, key) => (
          <>
            <Grid
              container
              justifyContent="left"
              direction="row"
              alignItems="center"
              spacing={2}
            >
              {item.image ? (
                <Grid item>
                  <img
                    src={`${image_api}${item.image}`}
                    alt={item.image}
                    width={50}
                  />
                </Grid>
              ) : (
                <></>
              )}

              <Grid item>
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
                    <Typography mt={1} color={"primary.main"} fontWeight={600}>
                      {item.roll_no}
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
                <br />
                <Typography fontSize={12} mb={1}>
                  {item.publication}
                </Typography>
              </Grid>
            </Grid>
            <Typography color={"primary.main"} >
              {item.award}
            </Typography>
            <hr color="rgb(50,50,50,.1)" />
          </>
        ))}
      </Container>
    </>
  );
};

export default BooksPage;
