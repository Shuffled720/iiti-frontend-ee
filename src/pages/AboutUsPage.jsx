import React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

const AboutUsPage = () => {
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
            About Us
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
        <br />
        <br />
        <img alt="alt" src="/ImageS/bg_1.JPG" />
        <br />
        <br />
        <Typography variant="p" fontSize={"0.9rem"}>
          One of the founding departments of the Institute from 2009, the
          Department of Electrical Engineering at IIT Indore has played a
          prominent role by setting the highest standards in teaching and
          research. Over the years, several new interdisciplinary courses and
          programs in the fields of Communications and Signal Processing (CSP),
          VLSI Design and Nanotechnology (VDN), have been offered.
          <br />
          conferred with several awards and fellowships at national and
          international levels. Many of the faculty members have memberships in
          various professional societies of the IEEE. Several serve on the
          editorial boards of reputed international and national journals and
          review technical articles for journals on a regular basis.
          Furthermore, many serve as technical and organizing committee members
          of international symposia and conferences. Some faculty have excelled
          in teaching and have been conferred awards and recognitions for their
          contributions. Some also have books and monographs to their credit.
          <br />
          The department aims to focus on imparting fundamental domain knowledge
          through its core curriculum, responding to the changing developments
          via offering a vibrant set of electives, and contributing to
          technology development. We aim to continuously be broadening our
          scope, building up on the current strengths, engage effectively with
          the industry for technology transfer, and endeavour to set high
          academic standards for the society.
          <br />
          Faculty members, 17 in number at present, have excellent academic
          credentials and are well known for their contributions. The diverse
          areas of research expertise of the department faculty members include
          Power Systems and Power Electronics, Integration of Renewable Energy
          Sources, Smart Grid, Nanotechnology and Nanoelectronics,
          Communications and Networking, Signal Processing, Optoelectronics and
          Bio- photonics. They have been conferred with several awards and
          fellowships at national and international levels. Many of the faculty
          members have memberships in various professional societies of the
          IEEE. Several serve on the editorial boards of reputed international
          and national journals and review technical articles for journals on a
          regular basis. Furthermore, many serve as technical and organizing
          committee members of international symposia and conferences. Some
          faculty have excelled in teaching and have been conferred awards and
          recognitions for their contributions. Some also have books and
          monographs to their credit.
          <br />
          The department aims to focus on imparting fundamental domain knowledge
          through its core curriculum, responding to the changing developments
          via offering a vibrant set of electives, and contributing to
          technology development. We aim to continuously be broadening our
          scope, building up on the current strengths, engage effectively with
          the industry for technology transfer, and endeavour to set high
          academic standards for the society.
        </Typography>
      </Container>
    </>
  );
};

export default AboutUsPage;
