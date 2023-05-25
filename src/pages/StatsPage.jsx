import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle"

export default function StatsPage() {
  const param = useParams();
  console.log(param);
  return (
    <div>
      <>
        <Container sx={{ py: 2 }}>
          <PageTitle title="Statistics"/>
          {/* <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
            viewport={{ once: true }}
          >
            <Typography variant="h4" color="primary" textAlign="center">
              Statistics
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
          </Box> */}
          <center>
            {param.params === "Faculty" ? (
              <>
                <img alt="" width="50%" src="/Images/faculty_number.jpg" />
              </>
            ) : (
              <></>
            )}
            {param.params === "Students" ? (
              <>
                <img alt="" width="50%" src="/Images/degree_awarded.jpg" />
              </>
            ) : (
              <></>
            )}
            {param.params === "Publications" ? (
              <>
                <center>
                  <img alt="" width="50%" src="/Images/journals.jpg" />
                </center>
              </>
            ) : (
              <></>
            )}
            {param.params === "Placements" ? (
              <Box
                sx={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <img alt="" width="40%" src="/Images/ug_placements.jpg" />
                <img alt="" width="40%" src="/Images/pg_placements.jpg" />
              </Box>
            ) : (
              <></>
            )}
            {param.params === "Patents" ? (
              <>
                <img alt="" width="50%" src="/Images/patent_data.png" />
              </>
            ) : (
              <></>
            )}
            {param.params === "Projects" ? (
              <>
                <center>
                  <img alt="" width="50%" src="/Images/projects_number.jpg" />
                </center>
              </>
            ) : (
              <></>
            )}
            {param.params === "Grants" ? (
              <>
                <img alt="" width="50%" src="/Images/project_grant.jpg" />
              </>
            ) : (
              <></>
            )}
          </center>
        </Container>
      </>
    </div>
  );
}
