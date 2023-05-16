import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Divider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../api";
export default function DomainPage() {
  const params = useParams();
  console.log(params.domain);
  const [research, setResearch] = React.useState([]);
  const [isError, setIsError] = useState([]);
  useEffect(() => {
    axios
      .get(`${api}/research/${params.domain}`)
      .then((response) => setResearch(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setResearch("Not Available");
    }
  }, [isError,params.domain]);
  console.log(research.people);
  const a = research.people;
  const b = research.research;
  return (
    <>
      <div>
        <div>
          <Container sx={{ py: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" color="primary" textAlign="center">
                Research
              </Typography>
              {params.domain === "power" ? (
                <>
                  <Typography variant="h5" color="teritiary" textAlign="center">
                    Power Electronics and Power Systems
                  </Typography>
                </>
              ) : (
                <></>
              )}
              {params.domain === "signal" ? (
                <>
                  <Typography variant="h5" color="teritiary" textAlign="center">
                    Communications and Signal Processing
                  </Typography>
                </>
              ) : (
                <></>
              )}
              {params.domain === "vlsi" ? (
                <>
                  <Typography variant="h5" color="teritiary" textAlign="center">
                    VLSI Design and Nano Electronics
                  </Typography>
                </>
              ) : (
                <></>
              )}
              {params.domain === "rf" ? (
                <>
                  <Typography variant="h5" color="teritiary" textAlign="center">
                    RF and Microwave
                  </Typography>
                </>
              ) : (
                <></>
              )}
            </motion.div>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
                viewport={{ once: true }}
              >
                <Box
                  borderColor={"primary.main"}
                  sx={{ borderTop: "7px solid", px: 5 }}
                >
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
            {params.domain === "power" ? (
              <>
                <img
                  src="/Images/power_log.JPG"
                  alt=""
                  style={{ margin: "auto" }}
                />
              </>
            ) : (
              <></>
            )}
            {params.domain === "signal" ? (
              <>
                <img
                  src="/Images/signal_log.JPG"
                  alt=""
                  style={{ margin: "auto" }}
                />
              </>
            ) : (
              <></>
            )}
            {params.domain === "vlsi" ? (
              <>
                <img
                  src="/Images/vlsi_log.JPG"
                  alt=""
                  style={{ margin: "auto" }}
                />
              </>
            ) : (
              <></>
            )}
            {params.domain === "rf" ? (
              <>
                <img
                  src="/Images/rf_log.JPG"
                  alt=""
                  style={{ margin: "auto" }}
                />
              </>
            ) : (
              <></>
            )}
            <br />
            <br />

            {b?.map((item2, i) => (
              <>
                <Typography
                  variant="h6"
                  fontWeight={400}
                  color={"primary.main"}
                >
                  {item2.name}
                </Typography>
                <Container>
                  <Typography variant="p">{item2.description} </Typography>
                </Container>
              </>
            ))}

            <br />
            <Divider sx={{ bgcolor: "primary.main" }} />
            <br />
            <Typography variant="h6" fontWeight={400} color={"primary.main"}>
              People
            </Typography>
            <Container>
              {a?.map((item, i) => (
                <Typography fontSize={14}>{item}</Typography>
              ))}
            </Container>
          </Container>
        </div>
      </div>
    </>
  );
}
