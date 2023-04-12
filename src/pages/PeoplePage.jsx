import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import StaffCard from "../components/PeopleBody/Staff_Card";
import CommonCard from "../components/PeopleBody/Common_Cards";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function BtechPage(props) {
  const params = useParams();
  console.log(params.program);
  console.log(params.year);

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
            People
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
            <Box sx={{ borderTop: "7px solid #105297", px: 5 }}>
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
        <Typography
          variant="h5"
          color="primary"
          textAlign="center"
          fontWeight={600}
          marginTop={3}
        >
          {params.program}
        </Typography>

        {params.program === "Faculty" ? (
          <>
            {/* <img src="/Images/Carousel/1.JPG" /> */}
            <Carousel page="people" program="Faculty" />
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"column"}
              spacing={6}
              sx={{ pt: 4 }}
            >
              <Grid item>
                <StaffCard />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}
        {params.program === "Staff" ? (
          <>
            <Carousel page="people" program="Staff" />
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"row"}
              spacing={6}
              sx={{ pt: 4 }}
            >
              <Grid item>
                <CommonCard year={""} program={params.program} />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {params.program === "BTech" ? (
          <>
            {console.log(typeof params.year)}
            {params.year === "2022" ? (
              <Carousel page="people" program="BTech" year="2022" />
            ) : (
              <></>
            )}
            {params.year === "2021" ? (
              <Carousel page="people" program="BTech" year="2021" />
            ) : (
              <></>
            )}
            {params.year === "2020" ? (
              <Carousel page="people" program="BTech" year="2020" />
            ) : (
              <></>
            )}
            {params.year === "2019" ? (
              <Carousel page="people" program="BTech" year="2019" />
            ) : (
              <></>
            )}
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"row"}
              spacing={6}
              sx={{ pt: 4 }}
            >
              <Grid item>
                <CommonCard year={params.year} program={params.program} />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {params.program === "MTech" ? (
          <>
            <img alt='' src="/Images/mtech25.JPG"></img>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"row"}
              spacing={6}
              sx={{ pt: 4 }}
            >
              <Grid item>
                <CommonCard
                  name={"Vipul"}
                  photo={"/Images/logo/VLSI.jpg"}
                  rollno={"210002067"}
                  year={"2021"}
                />
              </Grid>
              <Grid item>
                <CommonCard
                  name={"Vipul"}
                  photo={null}
                  rollno={"210002067"}
                  year={"2021"}
                />
              </Grid>
              <Grid item>
                <CommonCard
                  name={"Vipul"}
                  photo={null}
                  rollno={"210002067"}
                  year={"2021"}
                />
              </Grid>
              <Grid item>
                <CommonCard
                  name={"Vipul"}
                  photo={"/Images/logo/VLSI.jpg"}
                  rollno={"210002067"}
                  year={"2021"}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {params.program === "PhD" ? (
          <>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"row"}
              spacing={6}
              sx={{ pt: 4 }}
            >
              <Grid item>
                <CommonCard
                  name={"Vipul"}
                  // photo={"/Images/logo/VLSI.jpg"}
                  rollno={"210002067"}
                  year={"2021"}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {/* /////////////////////Alumni////////////////////// */}

        {params.program === "Alumni" ? (
          <>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"row"}
              spacing={6}
              sx={{ pt: 4 }}
            >
              <Grid item>
                <CommonCard year={params.year} program={params.program} />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}
