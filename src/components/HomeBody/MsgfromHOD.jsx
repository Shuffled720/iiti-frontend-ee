import { Typography, Box } from "@mui/material";
import React from "react";

const MsgfromHOD = () => {
  return (
    <>
      <Typography variant="h4" fontWeight="600">
        Message from HOD
      </Typography>
      {/* <br /> */}
      <Box sx={{ display: "flex", py:5}}>
        <Box sx={{mr:5}}>
          <Typography variant="p">
            As the Head of the Electrical Department, I welcome you to our
            website, where you can find information about our research, academic
            programs, and events. At IIT Indore, we are committed to providing
            our students with an exceptional education that prepares them for
            successful careers in electrical engineering. Our faculty members
            are distinguished researchers who are committed to advancing the
            frontiers of knowledge in their fields, and they bring their
            expertise into the classroom to provide a cutting-edge education to
            our students. We offer undergraduate and graduate programs in
            electrical engineering that are designed to give our students a
            strong foundation in the fundamentals of the field while also
            exposing them to the latest research and technologies. Our students
            have opportunities to work on research projects, participate in
            internships, and engage with industry leaders through our industry
            partnerships. I invite you to explore our website to learn more
            about our department and our academic programs. If you have any
            questions or would like to learn more about what we have to offer,
            please do not hesitate to contact us. Thank you for your interest in
            the Electrical Department at IIT Indore.
          </Typography>
          <Typography textAlign="right">~ Vivek Kanhangad</Typography>
        </Box>
        <img src="Images/gallery/IMG_6913.JPG"  alt="Hod" width="500" />
      </Box>
    </>
  );
};

export default MsgfromHOD;
