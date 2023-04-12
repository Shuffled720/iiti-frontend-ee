import React from "react";
import Event from "./Event";
import { Button, Grid, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect } from "react";
import { Container } from "@mui/system";

export default function Events() {
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
      .get("https://rupal17.pythonanywhere.com/api/events/read", { mode: 'cors' })
      .then((response) => setEvent(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setEvent("Not Available");
    }
  }, [isError]);
  useEffect(() => {
    axios
      .get("https://rupal17.pythonanywhere.com/api/news/read", { mode: 'cors' })
      .then((response) => setNewsitem(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setNewsitem("Not Available");
    }
  }, [isError]);
  useEffect(() => {
    axios
      .get("https://rupal17.pythonanywhere.com/api/announcement/read", { mode: 'cors' })
      .then((response) => setAnnounce(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setAnnounce("Not Available");
    }
  }, [isError]);
  console.log(newsitem);

  return (
    <>
      <Box sx={{ py: 5 }}>
        <div className="buttons">
          <Grid
            container
            justifyContent="Left"
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Button
                disableRipple
                variant={news === 1 ? "contained" : "outlined"}
                sx={{ borderRadius: 0 }}
                color="primary"
                className="news"
                onClick={newsHandler}
              >
                News
              </Button>
            </Grid>
            <Grid item>
              <Button
                disableElevation
                disableRipple
                variant={news === 0 ? "contained" : "outlined"}
                sx={{
                  borderRadius: 0,
                }}
                color="primary"
                onClick={announcementHandler}
              >
                Announcement
              </Button>
            </Grid>
          </Grid>
          <Divider
            sx={{ bgcolor: "primary.main", borderBottomWidth: 1, opacity: 1 }}
          />
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
                            mt={1}
                            color={"primary.main"}
                            fontWeight={600}
                          >
                            {nitem.title}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography fontSize={14} color="gray">
                            {nitem.date}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography fontSize={12} mb={1}>
                        {nitem.description}
                      </Typography>

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
                        color={"primary.main"}
                        fontWeight={600}
                      >
                        {aitem.title}
                      </Typography>

                      <Typography fontSize={12} mb={1}>
                        {aitem.description}
                      </Typography>

                      <hr color="rgb(50,50,50,.1)" />
                    </>
                  ))}
                </>
              )}
            </Container>
          </Grid>
          <br />
          <br />
          <span className="capitalize text-4xl font-bold">Events</span>
          <br />
          <br />
          <Grid
            container
            justifyContent={{ xs: "center", sm: "left" }}
            direction="row"
            alignItems="center"
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
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>
    </>
  );
}
