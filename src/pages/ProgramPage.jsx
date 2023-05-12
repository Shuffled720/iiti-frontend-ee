import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function ProgramPage() {
  return (
    <div>
      <>
        <Container sx={{ py: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
            viewport={{ once: true }}
          >
            <Typography variant="h4" color="primary" textAlign="center">
              Programs
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
          <Typography
            variant="h5"
            color="primary.main"
            textAlign="center"
            fontWeight="600"
          >
            B. Tech
          </Typography>
          <p>
            The B. Tech. Program in Electrical Engineering is a four-year
            program with selection through the IIT Joint Entrance Examination.
            Students are encouraged to work on research projects from their
            second year onwards in addition to the mandatory summer internship
            after the third year and the final year project. Projects are
            inter–disciplinary and involve faculty members from other
            disciplines. The final year project is research-oriented wherein
            students interact with research scholars, faculty members and
            collaborators from industry and academia on a regular basis.
          </p>
          <br />
          <br />
          <Typography
            variant="h5"
            color="primary.main"
            textAlign="center"
            fontWeight="600"
          >
            M. Tech
          </Typography>
          <p>
            M. Tech. program in Communication and Signal Processing - A two year
            masters program focusing on specialized courses in communication and
            signal processing. The second year of the program is completely
            dedicated to Master's thesis work. M. Tech. in VLSI Design and
            Nano-electronic is also proposed - A two year masters program
            focusing on specialized courses in VLSI Design and Nano-electronic.
            The second year of the program is completely dedicated to Master's
            thesis work.
          </p>
          <br />
          <br />
          <Typography
            variant="h5"
            color="primary.main"
            textAlign="center"
            fontWeight="600"
          >
            Ph.D
          </Typography>
          <p>
            The Ph.D. program is an inter–disciplinary program undertaken by
            students from diverse backgrounds including Physics,
            Bio-Engineering, Photonics, Materials Science, Computer Science and
            Applied Mathematics in addition to Electrical and Electronics
            Engineering. Students are trained in research via challenging and
            exciting research projects in both theoretical and applied
            engineering. Currently, 67 students are enrolled in the Ph.D.
            program in Electrical Engineering.
          </p>
        </Container>
      </>
    </div>
  );
}
