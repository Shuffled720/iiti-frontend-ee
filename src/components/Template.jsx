import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function Template(props) {
  return (
    <div>
      <Container sx={{ py: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" color="primary" textAlign="center">
            {props.Data.mainHeading}
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
            viewport={{ once: true }}
          >
            <Box sx={{ borderTop: "7px solid #105297", px: 5 }}>
              <hr />
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
          >
            <Box sx={{ borderTop: "7px solid black", px: 4 }}>
              <hr />
            </Box>
          </motion.div>
        </Box>
        {props.Data.body.map((key) => (
          <>
            {/* <Card sx={{ my: 3 }}> */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
            >
              <Typography variant="h5" color="primary" textAlign="center">
                {key.subHeading}
              </Typography>
            </motion.div>

            {key.subbody.map((innerkey) => (
              <>
                {/* <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 50,
                    }} */}
                {/* > */}
                <Box sx={{ py: 3, px: 5 }}>
                  <Typography variant="h5" sx={{ textDecoration: "underline" }}>
                    {innerkey.subsubHeading}
                  </Typography>
                  <Box sx={{ px: 2, py: 2 }}>
                    {innerkey.points.map((point) => (
                      <ul>
                        <li>
                          <Typography
                            variant="p"
                            fontSize="1rem"
                            fontWeight="2"
                          >
                            {point}
                          </Typography>
                        </li>
                      </ul>
                    ))}
                  </Box>
                </Box>
                {/* </motion.div> */}
              </>
            ))}
            {/* </Card> */}
          </>
        ))}
      </Container>
    </div>
  );
}
