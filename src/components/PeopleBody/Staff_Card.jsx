import { React, useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/material";

const StaffCard = () => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState();
  useEffect(() => {
    axios
      .get(`https://rupal17.pythonanywhere.com/api/people/Faculty/read`)
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setIsError("Not Available");
    }
  }, [isError]);

  return (
    <>
      <Container sx={{ display: { xs: "none", md: "block" } }}>
        {data?.map((item, i) => (
          <>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 3,
                my: 3,
                width: "100%",
              }}
            >
              <Box sx={{ p: 2 }}>
                <img alt=''
                  width="150"
                  src={`https://rupal17.pythonanywhere.com${item.image}`}
                  loading="lazy"
                />
              </Box>
              <Box sx={{ p: 2, width: "100%" }}>
                <Typography variant="h5" color="primary">
                  <a target="_blank" rel="noreferrer" href={`${item.link}`}>{item.name}</a>
                </Typography>
                <Typography variant="h7">{item.title}</Typography>

                <Typography fontWeight="600">Research Interest:</Typography>
                <Box>
                  <Typography fontSize="0.8rem">{item.details}</Typography>
                </Box>
              </Box>
              <Box sx={{ p: 2, width: "40%" }}>
                <Typography fontSize="0.8rem">
                  Email: <a href={`mailto:${item.email}`}>{item.email}</a>
                </Typography>
                <Typography fontSize="0.8rem">
                  Address:{item.address}
                </Typography>
              </Box>
            </Paper>
          </>
        ))}
      </Container>

      <Box sx={{ display: { xs: "block", md: "none" }, textAlign: "center" }}>
        {data?.map((item, i) => (
          <>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                py: 2,
                m: 2,
              }}
            >
              <Box>
                <img alt=''
                  width="110"
                  height="169"
                  src={`https://rupal17.pythonanywhere.com${item.image}`}
                  loading="lazy"
                />
              </Box>
              <Box>
                <Typography variant="h5" color="primary">
                  <a href={`${item.link}`}>{item.name}</a>
                </Typography>
                <Typography variant="h7">{item.title}</Typography>

                <Typography fontWeight="600">Research Interest:</Typography>
                <Box>
                  <Typography fontSize="0.8rem">{item.details}</Typography>
                </Box>
              </Box>
              <Box>
                <Typography fontSize="0.8rem">
                  Email: <a href={`mailto:${item.email}`}>{item.email}</a>
                </Typography>
                <Typography fontSize="0.8rem">
                  Address:{item.address}
                </Typography>
              </Box>
            </Paper>
          </>
        ))}
      </Box>
    </>
  );
};

export default StaffCard;
