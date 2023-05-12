import React from "react";
import { Typography, Box, Container, Grid, ButtonBase } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../api";
export default function LabPage() {
  const [labs, setLabs] = useState([]);
  const [isError, setIsError] = useState([]);
  const [active, setActive] = useState(0);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`${api}/research/labs/${params.program}/read`)
      .then((response) => setLabs(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setLabs("Not Available");
    }
  }, [isError]);
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
            {params.program === "pg" ? "PG" : "UG"} Laboratories
          </Typography>
          <Typography variant="h5" color="teritiary" textAlign="center">
            Department of Electrical Engineering
          </Typography>
        </motion.div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ borderTop: "7px solid #105297", px: 5 }}>
            <hr />
          </Box>

          <Box sx={{ borderTop: "7px solid black", px: 4 }}>
            <hr />
          </Box>
        </Box>

        <br />
        <br />
        {params.program === "ug" ? (
          <>
            <Grid
              container
              justifyContent="space-between"
              direction="row"
              alignItems="top"
            >
              <Grid item xs="12" md="3">
                <Grid
                  container
                  justifyContent="center"
                  direction="column"
                  alignItems="top"
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    borderRadius: 2,
                  }}
                  // spacing = {2}
                  // margin={1}
                >
                  <>
                    {labs?.map((item, key) => (
                      <ButtonBase
                        onClick={() => {
                          setActive(key);
                        }}
                        // sx={{padding:"3"}}
                      >
                        <Grid item padding={0.5} sx={{ textAlign: "center" }}>
                          {item.name}
                        </Grid>
                      </ButtonBase>
                    ))}
                  </>
                </Grid>
              </Grid>
              <Grid item xs="12" md="8">
                <Grid
                  container
                  justifyContent="center"
                  direction="column"
                  alignItems="top"
                  // spacing = {2}
                  padding={1}
                >
                  <>
                    <Typography
                      textAlign={"center"}
                      color="primary.main"
                      fontWeight={600}
                    >
                      About
                    </Typography>
                    {labs?.map((item, key) =>
                      active === key ? (
                        <>
                          <Grid item sx={{ textAlign: "left" }}>
                            {item.name} Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Possimus nihil earum autem,
                            accusantium nesciunt esse sint quibusdam veritatis
                            amet cum cumque illum praesentium pariatur nostrum
                            assumenda! Natus rerum impedit aliquam.
                          </Grid>

                          <Typography
                            textAlign={"center"}
                            mt={3}
                            color="primary.main"
                            fontWeight={600}
                          >
                            Experiments
                          </Typography>
                          <Grid item sx={{ textAlign: "left" }}>
                            {item.experiments["experiments"]?.map((exp, i) => (
                              <>
                                <Grid item>{exp}</Grid>
                              </>
                            ))}
                          </Grid>
                          <Typography
                            textAlign={"center"}
                            mt={3}
                            color="primary.main"
                            fontWeight={600}
                          >
                            Equipments
                          </Typography>
                          <Grid item sx={{ textAlign: "left" }}>
                            {item.equipments["equipments"]?.map((eq, j) => (
                              <>
                                <Grid item>{eq}</Grid>
                              </>
                            ))}
                          </Grid>
                        </>
                      ) : (
                        <></>
                      )
                    )}
                  </>
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            {/* jkfshukjdlsghldl;lkdhhfdsouihgouidhfiosgjoghrpsigpisdfhcfgvhpuihviupdfshfpihchofidhgigid */}
            <>
              <Grid
                container
                justifyContent="space-between"
                direction="row"
                alignItems="top"
              >
                <Grid item xs="12" md="3">
                  <Grid
                    container
                    justifyContent="center"
                    direction="column"
                    alignItems="top"
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      borderRadius: 2,
                    }}
                    // spacing = {2}
                    // margin={1}
                  >
                    <>
                      {labs?.map((item, key) => (
                        <ButtonBase
                          onClick={() => {
                            setActive(key);
                          }}
                          // sx={{padding:"3"}}
                        >
                          <Grid item padding={0.5} sx={{ textAlign: "center" }}>
                            {item.name}
                          </Grid>
                        </ButtonBase>
                      ))}
                    </>
                  </Grid>
                </Grid>
                <Grid item xs="12" md="8">
                  <Grid
                    container
                    justifyContent="center"
                    direction="column"
                    alignItems="top"
                    // spacing = {2}
                    padding={1}
                  >
                    <>
                      <Typography
                        textAlign={"center"}
                        color="primary.main"
                        fontWeight={600}
                      >
                        About
                      </Typography>
                      {labs?.map((item, key) =>
                        active === key ? (
                          <>
                            <Grid item sx={{ textAlign: "left" }}>
                              {item.description}
                            </Grid>

                            <Typography
                              textAlign={"center"}
                              mt={3}
                              color="primary.main"
                              fontWeight={600}
                            >
                              Review
                            </Typography>
                            <Grid item sx={{ textAlign: "left" }}>
                              {Object.keys(item.review).map((exp, i) => (
                                <>
                                  <Grid item>{exp}</Grid>
                                  <Grid item>
                                    <ul>
                                      {item.review[exp].map((item2, key2) => (
                                        <li style={{ listStyleType: "circle" }}>
                                          {item2}
                                        </li>
                                      ))}
                                    </ul>
                                  </Grid>
                                </>
                              ))}
                            </Grid>
                            <Typography
                              textAlign={"center"}
                              mt={3}
                              color="primary.main"
                              fontWeight={600}
                            >
                              Equipments
                            </Typography>
                            <Grid item sx={{ textAlign: "left" }}>
                              {console.log(labs)}
                              {/* {labs.equipments["equipments"]?.map((eq, j) => (
                                <>
                                  <Grid item>{eq}</Grid>
                                </>
                              ))} */}
                              {/* {Object.keys(labs.equipments)?.map(
                                (item3, key3) => (  
                                  <>
                                    {console.log(item3)}
                                    <Grid item>{item3}</Grid>
                                  </>
                                )
                              )} */}
                            </Grid>
                          </>
                        ) : (
                          <></>
                        )
                      )}
                    </>
                  </Grid>
                </Grid>
              </Grid>
            </>
          </>
        )}
        <br />
      </Container>
    </div>
  );
}
