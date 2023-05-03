import React from "react";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PublicIcon from "@mui/icons-material/Public";
import ExtensionIcon from "@mui/icons-material/Extension";
import {
  CurrencyRupee,
  School,
  SupervisedUserCircle,
  Timeline,
} from "@mui/icons-material";

const FooterWithCounter = () => {
  return (
    <Box className="Footer-div">
      <Box className="bg-text" sx={{ paddingTop: 3 }}>
        <Typography
          textAlign="center"
          variant="h5"
          sx={{ color: "primary.main", pb: 5 }}
        >
          Achievements
          <br />
          <Typography fontSize={".8rem"}>(from 2014)</Typography>{" "}
        </Typography>

        {/* /////////////////////////for large display////////////////////////// */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.01, type: "spring", stiffness: 35 }}
          viewport={{ once: true }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 4,
                width: "15%",
              }}
            >
              <Link to="people/Faculty">
                <SupervisedUserCircle
                  color="secondary"
                  sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                />
              </Link>
              <Typography color="secondary">
                <CountUp end={18} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </Typography>
              <Typography color="secondary">Faculty</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "15%",
              }}
            >
              <Link to="stats/Students">
                <School
                  color="secondary"
                  sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                />
              </Link>
              <Typography color="secondary">
                <CountUp end={515} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </Typography>
              <Typography color="secondary">Students Graduated</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "15%",
              }}
            >
              <Link to="stats/Publications">
                <LibraryBooksIcon
                  color="secondary"
                  sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                />
              </Link>
              <Typography color="secondary">
                <CountUp end={1358} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </Typography>
              <Typography color="secondary">Publications</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "15%",
              }}
            >
              <Link to="stats/Placements">
                <Timeline
                  color="secondary"
                  sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                />
              </Link>
              <Typography color="secondary">
                <CountUp end={96} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                %
              </Typography>
              <Typography color="secondary">Placement</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "15%",
              }}
            >
              <Link to="stats/Patents">
                <PublicIcon
                  color="secondary"
                  sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                />
              </Link>
              <Typography color="secondary">
                <CountUp end={19} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </Typography>
              <Typography color="secondary">Patents</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "15%",
              }}
            >
              <Link to="stats/Projects">
                <ExtensionIcon
                  color="secondary"
                  sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                />
              </Link>
              <Typography color="secondary">
                <CountUp end={95} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </Typography>
              <Typography color="secondary">Projects</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "15%",
              }}
            >
              <Link to="stats/Grants">
                <CurrencyRupee
                  color="secondary"
                  sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                />
              </Link>
              <Typography color="secondary">
                <CountUp end={32} duration={2}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                .7+ Cr
              </Typography>
              <Typography color="secondary">Project Grants</Typography>
            </Box>
          </Box>
        </motion.div>

        {/* /////////////////////////for small display////////////////////////// */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.01, type: "spring", stiffness: 35 }}
          viewport={{ once: true }}
        >
          <Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 4,
                  width: "100%",
                }}
              >
                <Link to="people/Faculty">
                  <SupervisedUserCircle
                    color="secondary"
                    sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                  />
                </Link>
                <Typography color="secondary">
                  <CountUp end={18} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Typography>
                <Typography color="secondary">Faculty</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 4,
                  width: "100%",
                }}
              >
                <Link to="stats/Students">
                  <School
                    color="secondary"
                    sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                  />
                </Link>
                <Typography color="secondary">
                  <CountUp end={515} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </Typography>
                <Typography color="secondary">Students Graduated</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 4,
                  width: "100%",
                }}
              >
                <Link to="stats/Publications">
                  <LibraryBooksIcon
                    color="secondary"
                    sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                  />
                </Link>
                <Typography color="secondary">
                  <CountUp end={1358} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </Typography>
                <Typography color="secondary">Publications</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 4,
                  width: "100%",
                }}
              >
                <Link to="stats/Placements">
                  <Timeline
                    color="secondary"
                    sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                  />
                </Link>
                <Typography color="secondary">
                  <CountUp end={96} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  %
                </Typography>
                <Typography color="secondary">Placement</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 4,
                  width: "100%",
                }}
              >
                <Link to="stats/Patents">
                  <PublicIcon
                    color="secondary"
                    sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                  />
                </Link>
                <Typography color="secondary">
                  <CountUp end={19} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </Typography>
                <Typography color="secondary">Patents</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 4,
                  width: "100%",
                }}
              >
                <Link to="stats/Projects">
                  <ExtensionIcon
                    color="secondary"
                    sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                  />
                </Link>
                <Typography color="secondary">
                  <CountUp end={95} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </Typography>
                <Typography color="secondary">Projects</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 4,
                  width: "100%",
                }}
              >
                <Link to="stats/Grants">
                  <CurrencyRupee
                    color="secondary"
                    sx={{ fontSize: 40, "&:hover": { color: "#105297" } }}
                  />
                </Link>
                <Typography color="secondary">
                  <CountUp end={32} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  .7+ Cr
                </Typography>
                <Typography color="secondary">Project Grants</Typography>
              </Box>
              {/* <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 4,
                  width: "15%",
                }}
              >
                <CurrencyRupee color="secondary" sx={{ fontSize: 40 }} />
                <Typography color="secondary">
                  <CountUp end={32} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  .7 Cr
                </Typography>
                <Typography color="secondary">Project Grant</Typography>
              </Box> */}
            </Box>
          </Box>
        </motion.div>
        {/* /////////////////////////for small display////////////////////////// */}
        <Divider color="gray" />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.01, type: "spring", stiffness: 35 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              // backgroundColor: "tertiary.main",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                paddingTop: 5,
                px: 10,
                py: 5,
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.01, type: "spring", stiffness: 35 }}
                viewport={{ once: true }}
                className="w-1/3"
              >
                <Box className="footer-info" sx={{ mx: 3 }}>
                  <Typography variant="h5" sx={{ color: "primary.main" }}>
                    IIT Indore Department of Electrical
                  </Typography>
                  <Typography variant="body2" sx={{ color: "secondary.main" }}>
                    Contact: Head, Electrical Engineering Scandium Building,
                    Academic POD Indian Institute of Technology Indore Khandwa
                    Road, Simrol Indore, Madhya Pradesh, India 453552 Email:
                    hodee@iiti.ac.in
                  </Typography>
                </Box>
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
                viewport={{ once: true }}
              >
                <Box className="footer-Links">
                  <Typography
                    textAlign="center"
                    variant="h5"
                    sx={{ color: "primary.main" }}
                  >
                    Important Links
                  </Typography>

                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ px: 2, borderRight: "1px solid gray" }}>
                      <Typography varient="p" sx={{ color: "secondary.main" }}>
                        About Us
                      </Typography>
                      <Box>
                        <Link to="/about">
                          <Typography
                            fontSize="0.7rem"
                            varient="p"
                            sx={{ color: "#B7B7c7" }}
                          >
                            Department
                          </Typography>
                        </Link>
                        <Link to="/administration">
                          <Typography
                            fontSize="0.7rem"
                            varient="p"
                            sx={{ color: "#B7B7c7" }}
                          >
                            Administration
                          </Typography>
                        </Link>
                        <Link to="/contact">
                          <Typography
                            fontSize="0.7rem"
                            varient="p"
                            sx={{ color: "#B7B7c7" }}
                          >
                            Contact Us
                          </Typography>
                        </Link>
                        <Link to="/gallery">
                          <Typography
                            fontSize="0.7rem"
                            varient="p"
                            sx={{ color: "#B7B7c7" }}
                          >
                            Gallery
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                    <Box sx={{ px: 2, borderRight: "1px solid gray " }}>
                      <Typography varient="p" sx={{ color: "secondary.main" }}>
                        People
                      </Typography>
                      <Box>
                        <Link to="/people/Faculty">
                          <Typography
                            fontSize="0.7rem"
                            varient="p"
                            sx={{ color: "#B7B7c7" }}
                          >
                            Faculty
                          </Typography>
                        </Link>
                        <Link to="/people/Staff">
                          <Typography
                            fontSize="0.7rem"
                            varient="p"
                            sx={{ color: "#B7B7c7" }}
                          >
                            Staff
                          </Typography>
                        </Link>
                        <Link to="/people/PhD">
                          <Typography
                            fontSize="0.7rem"
                            varient="p"
                            sx={{ color: "#B7B7c7" }}
                          >
                            PhD-student
                          </Typography>
                        </Link>
                        <Link to="/people/MTech">
                          <Typography
                            fontSize="0.7rem"
                            varient="p"
                            sx={{ color: "#B7B7c7" }}
                          >
                            MTech-student
                          </Typography>
                        </Link>
                        <Link to="/people/BTech">
                          <Typography
                            fontSize="0.7rem"
                            varient="p"
                            sx={{ color: "#B7B7c7" }}
                          >
                            BTech-student
                          </Typography>
                        </Link>
                      </Box>
                    </Box>

                    <Box sx={{ px: 2, borderRight: "1px solid gray " }}>
                      <Typography varient="p" sx={{ color: "secondary.main" }}>
                        Research
                      </Typography>
                      <Box>
                        <Link to="/research">
                          <Typography
                            fontSize="0.7rem"
                            varient="p"
                            sx={{ color: "#B7B7c7" }}
                          >
                            Research Areas
                          </Typography>
                        </Link>
                        <Link to="/labs">
                          <Typography
                            fontSize="0.7rem"
                            varient="p"
                            sx={{ color: "#B7B7c7" }}
                          >
                            Laboratories
                          </Typography>
                        </Link>
                        <Link to="/publication">
                          <Typography
                            fontSize="0.7rem"
                            varient="p"
                            sx={{ color: "#B7B7c7" }}
                          >
                            Recent Publications
                          </Typography>
                        </Link>
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Projects
                        </Typography>
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Open Positions
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ px: 2, borderRight: "1px solid gray " }}>
                      <Typography varient="p" sx={{ color: "secondary.main" }}>
                        Academics
                      </Typography>
                      <Box>
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Academics
                        </Typography>
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Courses
                        </Typography>
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Scholarship
                        </Typography>
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Awards and Recognitions
                        </Typography>
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          PhD intership in Industry
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ px: 2, borderRight: "1px solid gray " }}>
                      <Typography varient="p" sx={{ color: "secondary.main" }}>
                        Open Positions
                      </Typography>
                      <Box>
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Ph.D. Positions
                        </Typography>
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Faculty Positions
                        </Typography>
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Seminars
                        </Typography>
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          CEP
                        </Typography>
                        <Typography
                          fontSize="0.7rem"
                          varient="p"
                          sx={{ color: "#B7B7c7" }}
                        >
                          Placement Statistics
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ px: 2 }}>
                      <Typography varient="p" sx={{ color: "secondary.main" }}>
                        Safety Regulations
                      </Typography>
                    </Box>
                  </Box>

                  {/* <ul>
                  <li>
                    <a href="/">
                      <Typography
                        variant="body2"
                        sx={{ color: "secondary.main" }}
                      >
                        Home
                      </Typography>
                    </a>
                  </li>
                  <li>
                    <a href="/about">
                      <Typography
                        variant="body2"
                        sx={{ color: "secondary.main" }}
                      >
                        About Us
                      </Typography>
                    </a>
                  </li>
                  <li>
                    <a href="/people">
                      <Typography
                        variant="body2"
                        sx={{ color: "secondary.main" }}
                      >
                        People
                      </Typography>
                    </a>
                  </li>
                  <li>
                    <a href="/research">
                      <Typography
                        variant="body2"
                        sx={{ color: "secondary.main" }}
                      >
                        Research
                      </Typography>
                    </a>
                  </li>
                  <li>
                    <a href="/academics">
                      <Typography
                        variant="body2"
                        sx={{ color: "secondary.main" }}
                      >
                        Academics
                      </Typography>
                    </a>
                  </li>
                </ul> */}
                </Box>
              </motion.span>
              {/* <motion.span
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
              >
                <Box className="footer-map" sx={{ paddingBottom: 2 }}>
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5685679307103!2d75.91853441460319!3d22.52036464056219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20Of%20Technology%E2%80%93Indore%20(IIT%E2%80%93Indore)!5e0!3m2!1sen!2sin!4v1675014310074!5m2!1sen!2sin"
                    width="250"
                    height="250"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </motion.span> */}
            </Box>
          </Box>
        </motion.div>

        <Divider />
        <Box
          sx={{
            backgroundColor: "#1e1e1e",
          }}
        >
          <Typography color="secondary" textAlign="center" sx={{ p: 2 }}>
            ©️Department of Electrical Engineering, IIT Indore - All Rights
            Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterWithCounter;
