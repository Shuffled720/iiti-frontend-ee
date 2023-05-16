import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { api } from "../api";
import LoadingPage from "./LoadingPage";
export default function CoursePage() {
  const param = useParams();
  const [data, setData] = useState();
  const [isError, setIsError] = useState();

  const [elective, setElective] = useState();

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`${api}/course/read/${param.program}`, { timeout: 50000 })
        .then((response) => setData(response.data))
        .catch((error) => setIsError(error.message));
      if (!isError) {
        setIsError("Not Available");
      }
    });
  }, [param.program, isError]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`${api}/course/read/elective/${param.program}`, { timeout: 50000 })
        .then((response) => setElective(response.data))
        .catch((error) => setIsError(error.message));
      if (!isError) {
        setIsError("Not Available");
      }
    }, 3000);
  }, [param.program, isError]);
  return (
    <div>
      <Container sx={{ py: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" color="primary" textAlign="center">
            Courses
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
              borderColor="red"
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

        <Typography variant="h6" color="primary.main" textAlign="center">
          {param.program}
        </Typography>
        <Box sx={{ py: 4 }}>
          {data ? (
            <>
              {param.program === "BTech" ? (
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((first, i) => (
                    <>
                      <Typography textAlign="center" fontWeight="bold">
                        Semester: {first}
                      </Typography>

                      <table>
                        <th>Course Code</th>
                        <th align="right">Course Name</th>
                        {data?.map((item, key) => (
                          <tr>
                            {item.semester === first ? (
                              <>
                                <td>{item.code}</td>
                                <td align="center">{item.name}</td>
                              </>
                            ) : (
                              <></>
                            )}
                          </tr>
                        ))}
                      </table>

                      <br />
                    </>
                  ))}

                  <Typography textAlign="center" fontWeight="bold">
                    Electives
                  </Typography>

                  <table>
                    <tr>
                      <th>Course Code</th>
                      <th align="right">Course Name</th>
                    </tr>

                    {elective?.map((item, key) => (
                      <>
                        <tr>
                          <td>{item.code}</td>
                          <td align="center">{item.name}</td>
                        </tr>
                      </>
                    ))}
                  </table>
                </>
              ) : (
                <>
                  {[1, 2, 3, 4].map((first, i) => (
                    <>
                      <Typography textAlign="center" fontWeight="bold">
                        Semester: {first}
                      </Typography>

                      <table>
                        <th>Course Code</th>
                        <th align="right">Course Name</th>
                        {data?.map((item, key) => (
                          <tr>
                            {item.semester === first ? (
                              <>
                                <td>{item.code}</td>
                                <td align="center">{item.name}</td>
                              </>
                            ) : (
                              <></>
                            )}
                          </tr>
                        ))}
                      </table>

                      <br />
                    </>
                  ))}
                  <Typography textAlign="center" fontWeight="bold">
                    Electives
                  </Typography>

                  <table>
                    <tr>
                      <th>Course Code</th>
                      <th align="right">Course Name</th>
                    </tr>

                    {elective?.map((item, key) => (
                      <>
                        <tr>
                          <td>{item.code}</td>
                          <td align="center">{item.name}</td>
                        </tr>
                      </>
                    ))}
                  </table>
                </>
              )}
            </>
          ) : (
            <LoadingPage />
          )}
        </Box>
      </Container>
    </div>
  );
}
