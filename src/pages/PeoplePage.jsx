import React from "react";
import { Typography, Box, Container, Grid, Divider } from "@mui/material";
import { motion } from "framer-motion";
import StaffCard from "../components/PeopleBody/Staff_Card";
import CommonCard from "../components/PeopleBody/Common_Cards";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function BtechPage(props) {
  const params = useParams();
  console.log(params.program);
  console.log(params.year);
  const [news, setNews] = React.useState(1);
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
          {params.program === "BTech" ? (
            <>B. Tech Students</>
          ) : (
            <>
              {params.program === "MTech" ? (
                <>M. Tech Students</>
              ) : (
                <>
                  {params.program === "PhD" ? (
                    <>Ph.D Students</>
                  ) : (
                    <>{params.program}</>
                  )}
                </>
              )}
            </>
          )}
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
            <img alt="" src="/Images/mtech25.JPG"></img>
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
            <br />
            <Grid
              container
              justifyContent="left"
              direction="row"
              alignItems="center"
              // sx={{backgroundImage:"linear-gradient(to top bottom, red, white)"}}
              // spacing={2}
            >
              <Grid
                item
                marginX={1}
                borderTop={news === 1 ? 3 : 0}
                borderColor={"primary.main"}
                xs={1.5}
                color={news === 1 ? "primary.main" : "black"}
                backgroundColor={news === 1 ? "primary." : "white"}
                sx={{
                  boxShadow: news === 1 ? "0px 0px 0.5px 0px #010101" : "none",
                }}

                // background='linear-gradient(to top bottom, red, white)'
              >
                <button
                  className="news"
                  onClick={() => setNews(1)}
                  style={{
                    textAlign: "center",
                    width: "100%",
                    padding: "20px",
                  }}
                >
                  {/* <Typography sx={{color: news===1?"primary.main":"black" } }> */}
                  B. Tech
                  {/* </Typography> */}
                </button>
              </Grid>
              <Grid
                item
                marginX={1}
                borderTop={news === 2 ? 3 : 0}
                borderColor={"primary.main"}
                xs={1.5}
                color={news === 2 ? "primary.main" : "black"}
                backgroundColor={news === 2 ? "primary.mainGradient" : "white"}
                sx={{
                  boxShadow: news === 2 ? "0px 0px 0.5px 0px #010101" : "none",
                  width: "100%",
                }}
              >
                <button
                  className="mtech"
                  onClick={() => setNews(2)}
                  style={{
                    textAlign: "center",
                    width: "100%",
                    padding: "20px",
                  }}
                >
                  M. Tech
                </button>
              </Grid>
              <Grid
                item
                marginX={1}
                borderTop={news === 3 ? 3 : 0}
                borderColor={"primary.main"}
                xs={1.5}
                color={news === 3 ? "primary.main" : "black"}
                backgroundColor={news === 3 ? "primary." : "white"}
                sx={{
                  boxShadow: news === 3 ? "0px 0px 0.5px 0px #010101" : "none",
                }}

                // background='linear-gradient(to top bottom, red, white)'
              >
                <button
                  className="news"
                  onClick={() => setNews(3)}
                  style={{
                    textAlign: "center",
                    width: "100%",
                    padding: "20px",
                  }}
                >
                  {/* <Typography sx={{color: news===1?"primary.main":"black" } }> */}
                  Ph.D
                  {/* </Typography> */}
                </button>
              </Grid>
              <Grid
                item
                marginX={1}
                borderTop={news === 4 ? 3 : 0}
                borderColor={"primary.main"}
                xs={1.5}
                color={news === 4 ? "primary.main" : "black"}
                backgroundColor={news === 4 ? "primary." : "white"}
                sx={{
                  boxShadow: news === 4 ? "0px 0px 0.5px 0px #010101" : "none",
                }}

                // background='linear-gradient(to top bottom, red, white)'
              >
                <button
                  className="news"
                  onClick={() => setNews(4)}
                  style={{
                    textAlign: "center",
                    width: "100%",
                    padding: "20px",
                  }}
                >
                  {/* <Typography sx={{color: news===1?"primary.main":"black" } }> */}
                  MS (Research)
                  {/* </Typography> */}
                </button>
              </Grid>
            </Grid>
            <Divider
              sx={{ bgcolor: "primary.main", borderBottomWidth: 1, opacity: 1 }}
            />
            {news === 1 ? (
              <>
                <CommonCard
                  year={params.year}
                  program={params.program}
                  prog="B. Tech."
                />
              </>
            ) : (
              <></>
            )}
            {news === 2 ? (
              <>
                <CommonCard
                  year={params.year}
                  program={params.program}
                  prog="M. Tech."
                />
              </>
            ) : (
              <></>
            )}
            {news === 3 ? (
              <>
                <CommonCard
                  year={params.year}
                  program={params.program}
                  prog="Ph.D."
                />
              </>
            ) : (
              <></>
            )}
            {news === 4 ? (
              <>
                <CommonCard
                  year={params.year}
                  program={params.program}
                  prog="MS"
                />
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}
