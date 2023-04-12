import React from "react";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function Error() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <Typography variant="h3" style={{ color: "#000" }}>
          ERROR:404
        </Typography>
        <Typography varient="p">page not found!</Typography>
      </Box>
    </Container>
  );
}
