import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { api } from "../api";
import PageTitle from "../components/PageTitle";
export default function ProjectPage() {
  const [data, setData] = useState();
  const [isError, setIsError] = useState();

  useEffect(() => {
    axios
      .get(`${api}/research/project/read`)
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setIsError("Not Available");
    }
  }, [isError]);

  return (
    <>

    <PageTitle title="Projects"/>
      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" color="primary" textAlign="center">
          Projects
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
          <br />
        </motion.div>
      </Box> */}
      <Box>
        <table>
          <tr>
            <th>Title</th>
            <th align="right">Project Incharge</th>
            <th align="right">Funding</th>
            <th align="right">Duration</th>
            <th align="right">Source</th>
          </tr>

          {data?.map((item, key) => (
            <>
              <tr>
                <td>{item.title}</td>
                <td align="center">{item.worker}</td>
                <td align="center">{item.funding}</td>
                <td align="center">{item.duration}</td>
                <td align="center">{item.project_type}</td>
              </tr>
            </>
          ))}
        </table>
      </Box>
      <br />
    </>
  );
}
