import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div>
      <Container sx={{ py: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" color="primary" textAlign="center">
            Contact Us
          </Typography>
          <Typography variant="h5" color="teritiary" textAlign="center">
            Department of Electrical Engineering
          </Typography>
        </motion.div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
          >
            <Box
              borderColor={"primary.main"}
              sx={{ borderTop: "7px solid", px: 5 }}
            >
              <hr />
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
          >
            <Box sx={{ borderTop: "7px solid black", px: 4 }}>
              <hr />
            </Box>
          </motion.div>
        </Box>

        <br />
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box padding={5}>
            Department of Electrical Engineering <br />
            Pod 1A Building
            <br /> Indian Institute of Technology Indore
            <br /> Khandwa Road, Simrol
            <br /> Indore, Madhya Pradesh, India 453552
            <br />
            Email: hodee@iiti.ac.in
          </Box>

          <Box
            className="footer-map"
            sx={{ paddingBottom: 2, textAlign: "center" }}
          >
            <center>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5685679307103!2d75.91853441460319!3d22.52036464056219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20Of%20Technology%E2%80%93Indore%20(IIT%E2%80%93Indore)!5e0!3m2!1sen!2sin!4v1675014310074!5m2!1sen!2sin"
                width="250"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </center>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
