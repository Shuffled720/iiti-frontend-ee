import React from "react";
import Event from "./Event";
import { Grid, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect } from "react";
import { Container } from "@mui/system";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CampaignIcon from "@mui/icons-material/Campaign";
import { api, image_api } from "../../api";
import cssTheme from "../../cssTheme"
export default function Events() {
  console.log(api);
  const [news, setNews] = useState(1);
  const newsHandler = () => {
    setNews(1);
  };
  const announcementHandler = () => {
    setNews(0);
  };
  const [event, setEvent] = React.useState([]);
  const [announce, setAnnounce] = React.useState([]);
  const [newsitem, setNewsitem] = useState([]);
  const [isError, setIsError] = useState([]);
  useEffect(() => {
    axios
      .get(`${api}/events/read`, {
        mode: "cors",
      })
      .then((response) => setEvent(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setEvent("Not Available");
    }
  }, [isError]);
  useEffect(() => {
    axios
      .get(`${api}/news/read`, { mode: "cors" })
      .then((response) => setNewsitem(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setNewsitem("Not Available");
    }
  }, [isError]);
  useEffect(() => {
    axios
      .get(`${api}/announcement/read`, {
        mode: "cors",
      })
      .then((response) => setAnnounce(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setAnnounce("Not Available");
    }
  }, [isError]);
  console.log(newsitem);
  return (
    <>
      <Box className="section-1-bg" >
        <div className="buttons">
          <Box sx={{ pb: 5 }} >
            <Container sx={{ pt: 5 }}>
              <Grid
                container
                justifyContent="left"
                direction="row"
                alignItems="center"
              // sx={{backgroundImage:"linear-gradient(to top bottom, red, black)"}}
              // spacing={2}
              >
                <Grid
                  item
                  marginX={1}
                  borderTop={news === 1 ? 3 : 0}
                  borderColor={"black"}
                  xs={1.5}
                  color={news === 1 ? "black" : "black"}
                  // backgroundColor={news === 1 ? "black" : "black"}
                  sx={{
                    boxShadow: news === 1 ? "0px 0px 0.5px 0px #010101" : "none",
                  }}

                // background='linear-gradient(to top bottom, red, black)'
                >
                  <button
                    className="news"
                    onClick={newsHandler}
                    style={{ textAlign: "center", width: "100%" }}
                  >
                    <NewspaperIcon
                    // color="primary"
                    // sx={{ "&:hover": { color: "primary.main" } }}
                    />
                    {/* <NewspaperIcon color="#fff" /> */}
                    <br />
                    {/* <Typography sx={{color: news===1?"primary.main":"black" } }> */}
                    <Typography variant="h5">
                      News
                    </Typography>
                  </button>
                </Grid>
                <Grid
                  item
                  marginX={1}
                  borderTop={news === 1 ? 0 : 3}
                  borderColor={"black"}
                  xs={1.5}
                  color={news === 1 ? "black" : "black"}
                  // backgroundColor={news === 1 ? "primary.mainGradient" : "black"}
                  sx={{
                    boxShadow: news === 0 ? "0px 0px 0.5px 0px #010101" : "none",
                    width: "100%",
                  }}
                >
                  <button
                    className="news"
                    onClick={announcementHandler}
                    style={{ textAlign: "center", width: "100%" }}
                  >
                    <CampaignIcon />
                    <br />
                    <Typography variant="h5">
                      Announcements
                    </Typography>
                  </button>
                </Grid>

              </Grid>

              <Divider
                sx={{ bgcolor: "black", borderBottomWidth: 1, opacity: 1 }}
              />
            </Container>
            {/* <hr style={{ color: "#105297", borderColor:"#105297"}}></hr> */}
            <Grid>
              <br />
              <Container>
                {news === 1 ? (
                  <>
                    {newsitem.map((nitem, ni) => (
                      <>
                        <Grid
                          container
                          justifyContent="space-between"
                          direction="row"
                          alignItems="center"
                          spacing={2}
                        >
                          <Grid item>
                            <Typography
                              variant="h6h6"
                              mt={1}
                              color={"black"}
                              fontWeight={600}
                            >
                              {nitem.title}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="p" fontSize={14} color="black">
                              {nitem.date}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Typography variant="p" fontSize={12} mb={1} color="black">
                          {nitem.description}
                        </Typography>
                        {nitem.image ? (
                          <img
                            src={`${image_api}${nitem.image}`}
                            alt="not found"
                            width={"20%"}
                          />
                        ) : (
                          <></>
                        )}
                        <br />
                        <hr color="rgb(50,50,50,.1)" />
                      </>
                    ))}
                  </>
                ) : (
                  <>
                    {announce.map((aitem, ai) => (
                      <>
                        <Typography
                          mt={1}
                          color={"black"}
                          fontWeight={600}
                        >
                          {aitem.title}
                        </Typography>

                        <Typography variant="p" fontSize={12} mb={1}>
                          {aitem.description}
                        </Typography>

                        <hr color="rgb(50,50,50,.1)" />
                      </>
                    ))}
                  </>
                )}
              </Container>
            </Grid>
          </Box>
          <br />
          <br />
          <Container pb="5">
            <Typography variant="h4" fontWeight="600">
              Events
            </Typography>
            <br />
            <br />

            <Grid
              container
              justifyContent={{ xs: "center", sm: "left" }}
              direction="row"
              alignItems="center"
              pb={10}
              sx={{ marginTop: "20px" }}
              spacing={{ xs: 2, md: 4, sm: 6, lg: 8 }}
            >
              {event.map((item, i) => (
                <Grid item xs={10} sm={8} md={6} lg={4}>
                  <Event
                    title={item.title}
                    date={item.date}
                    month={item.month}
                    description={item.description}
                    time={item.time}
                    day={item.day}
                    link={item.link}
                    image={item.image}
                  />
                </Grid>
              ))}
            </Grid>

          </Container>
        </div >
      </Box >
    </>
  );
}
