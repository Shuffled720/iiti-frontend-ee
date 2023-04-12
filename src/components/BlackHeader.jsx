import React from "react";
import "./Components Css/BlackHeader.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";


import ListSubheader from "@mui/material/ListSubheader";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const BlackHeader = () => {
  const [open1, setOpen1] = React.useState(false);
  // const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);
  // const [open11, setOpen11] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  // const handleClick2 = () => {
  //   setOpen2(!open2);
  // };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };
  const handleClick6 = () => {
    setOpen6(!open6);
  };
  const handleClick7 = () => {
    setOpen7(!open7);
  };
  const handleClick8 = () => {
    setOpen8(!open8);
  };
  const handleClick9 = () => {
    setOpen9(!open9);
  };
  const handleClick10 = () => {
    setOpen10(!open10);
  };
  // const handleClick11 = () => {
  //   setOpen11(!open11);
  // };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Department of Electrical
          </ListSubheader>
        }
      >
        <ListItemButton onClick={toggleDrawer(anchor, false)}>
          <Link className="nav-link" to="/">
            <ListItemText primary="Home" />
          </Link>
        </ListItemButton>

        <ListItemButton onClick={handleClick1}>
          <ListItemText primary="About" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/about">
                <ListItemText primary="Department" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/administration">
                <ListItemText primary="Administration" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/contact">
                <ListItemText primary="Contact Us" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/gallery">
                <ListItemText primary="Gallery" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick6}>
          <ListItemText primary="People" />
          {open6 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open6} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ px: 2 }}>
            {/* //////////////////////////////////////////// */}
            <ListItemButton
              sx={{ pl: 2 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/people/Faculty">
                <ListItemText primary="Faculty" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 2 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/people/Staff">
                <ListItemText primary="Staff" />
              </Link>
            </ListItemButton>
            {/* //////////////////////////////////////////// */}

            <ListItemButton onClick={handleClick7}>
              <ListItemText primary="PhD Student" />
              {open7 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open7} timeout="auto" unmountOnExit>
              <List component="div">
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/PhD">
                    <ListItemText primary="2018" />
                  </Link>
                </ListItemButton>

                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/PhD">
                    <ListItemText primary="2019" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/PhD">
                    <ListItemText primary="2020" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/PhD">
                    <ListItemText primary="2021" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/PhD">
                    <ListItemText primary="2022" />
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
            {/* //////////////////////////////////////////// */}
            {/* //////////////////////////////////////////// */}
            <ListItemButton onClick={handleClick8}>
              <ListItemText primary="MTech Student" />
              {open8 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open8} timeout="auto" unmountOnExit>
              <List component="div">
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/MTech/2020">
                    <ListItemText primary="2020" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/MTech/2021">
                    <ListItemText primary="2021" />
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
            {/* //////////////////////////////////////////// */}
            {/* //////////////////////////////////////////// */}
            <ListItemButton onClick={handleClick9}>
              <ListItemText primary="BTech Student" />
              {open9 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open9} timeout="auto" unmountOnExit>
              <List component="div">
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/BTech/2019">
                    <ListItemText primary="2019" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/BTech/2020">
                    <ListItemText primary="2020" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/BTech/2021">
                    <ListItemText primary="2021" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/BTech/2022">
                    <ListItemText primary="2022" />
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
            {/* //////////////////////////////////////////// */}
            {/* //////////////////////////////////////////// */}
            <ListItemButton onClick={handleClick10}>
              <ListItemText primary="Alumni" />
              {open10 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open10} timeout="auto" unmountOnExit>
              <List component="div">
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/Alumni/2014">
                    <ListItemText primary="2014" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/Alumni/2015">
                    <ListItemText primary="2015" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/Alumni/2016">
                    <ListItemText primary="2016" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/Alumni/2017">
                    <ListItemText primary="2017" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/people/Alumni/2018">
                    <ListItemText primary="2018" />
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
            {/* //////////////////////////////////////////// */}
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick3}>
          <ListItemText primary="Research" />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/research">
                <ListItemText primary="Research Areas" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/labs">
                <ListItemText primary="Laboratories" />
              </Link>
            </ListItemButton>
            {/* ////////////////////////////////////////////////////////////////////// */}
            <ListItemButton onClick={handleClick10} sx={{ pl: 4 }}>
              <ListItemText primary="Recent Publications" />
              {open10 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open10} timeout="auto" unmountOnExit>
              <List component="div">
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link to="https://drive.google.com/file/d/11-FnA1ob4pFqLmf6Oxnm5am7EiBfcgBB/view?usp=sharing">
                    <ListItemText primary="2014" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link to="https://drive.google.com/file/d/1petTxLWlLA6UUyrPzigtUqQkTEEyiAo3/view?usp=share_link">
                    <ListItemText primary="2015" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link to="https://drive.google.com/file/d/1v0943WJchHuHnRz165YcrYiCUMuzDJSI/view?usp=share_link">
                    <ListItemText primary="2016" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link to="https://drive.google.com/file/d/1kvh7ALhO19oXuUyz4G1SvPHc9BcO968z/view?usp=share_link">
                    <ListItemText primary="2019" />
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
            {/* ////////////////////////////////////////////////////////////////////// */}
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/">
                <ListItemText primary="Projects" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClick4}>
          <ListItemText primary="Academics" />
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/about">
                <ListItemText primary="Programs" />
              </Link>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}
              onClick={handleClick7}>
              <ListItemText primary="Courses" />
              {open7 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open7} timeout="auto" unmountOnExit>
              <List component="div">
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/courses/BTech">
                    <ListItemText primary="BTech" />
                  </Link>
                </ListItemButton>

                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/courses/MTech">
                    <ListItemText primary="MTech" />
                  </Link>
                </ListItemButton>



              </List>
            </Collapse>
            {/* //////////////////////////////////////////// */}
            {/* //////////////////////////////////////////// */}

          </List>
        </Collapse>

        <ListItemButton onClick={handleClick5}>
          <ListItemText primary="Open Positions" />
          {open5 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open5} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/about">
                <ListItemText primary="Faculty Position" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link
                className="nav-link"
                to="https://academic.iiti.ac.in/phdadvt.php"
              >
                <ListItemText primary="PhD Positions" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/contact">
                <ListItemText primary="Project Positions" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
  return (
    <>
      <AppBar position="static" color="secondary">
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            px: 1,
            py: 1,
          }}
        >
          <Box>
            <img src="/Images/logo/blue_logo.png" alt="loggg" width="40" />
          </Box>
          <Box sx={{ px: 1 }}>
            <Typography fontSize="0.8rem" fontWeight="600" color="black">
              Department Of Electical Engineering
              <br />
            </Typography>
            <Typography fontSize="0.6rem" fontWeight="600" color="black">
              Indian Institute Of Technology Indore
            </Typography>
          </Box>
          <IconButton
            onClick={toggleDrawer("left", true)}
            sx={{ ml: "auto", color: "primary" }}
          >
            <MenuIcon color="primary" />
          </IconButton>
        </Box>
      </AppBar>
      <Box
        sx={{
          flexGrow: 1,
          display: {
            xs: "flex",
            md: "none",
            backgroundColor: "#105297",
            width: "100%",
          },
        }}
      >
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </Box>
      {/* /////////////////////////////////////////////////// */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <div className="black-navdiv">
          <nav className="black-naviiii">
            <div className="black-logo-text">
              <img
                src="/Images/logo/blue_logo.png"
                alt="logo_png"
                width="100px"
              ></img>
              <div>
                <Typography variant="h5" color={"black"} padding={5}>
                  Indian Institute Of Technology Indore
                  <br /> Department Of Electrical Engineering
                </Typography>
              </div>
            </div>

            <div className="black-menu-wrapper">
              <ul className="black-nav-links">
                <li className="black-menu">
                  <Link to="/">Home</Link>
                </li>
                <li className="black-menu">
                  <Link to="/">About</Link>
                  <ul className="black-ani-menu">
                    <li>
                      <div className="black-link-button">
                        <Link to="/about">Department</Link>
                      </div>
                    </li>
                    <Divider />
                    <li>
                      <div className="black-link-button">
                        <Link to="/administration">Administration</Link>
                      </div>
                    </li>
                    <Divider />
                    <li>
                      <div className="black-link-button">
                        <Link to="/contact">Contact Us</Link>
                      </div>
                    </li>
                    <Divider />
                    <li>
                      <div className="black-link-button">
                        <Link to="/gallery">Gallery</Link>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="black-menu">
                  <Link to="">People</Link>
                  <ul className="black-ani-menu">
                    <li>
                      <div className="black-link-button">
                        <Link to="/people/Faculty">Faculty</Link>
                      </div>
                    </li>
                    <Divider />
                    <li>
                      <div className="black-link-button">
                        <Link to="/people/Staff">Staff</Link>
                      </div>
                    </li>
                    <Divider />
                    <li>
                      <div className="black-link-button">
                        <Link to="#">PhD Student</Link>
                      </div>
                    </li>
                    <Divider />
                    <li className="black-aniani-menu-trigger">
                      <div className="black-link-button">
                        <Link to="#">MTech Student</Link>
                        <ul className="black-aniani-menu">
                          <li>
                            <div className="black-link-button">
                              <Link to="/people/MTech/2020">2020</Link>
                            </div>
                          </li>
                          <Divider />
                          <li>
                            <div className="black-link-button">
                              <Link to="/people/MTech/2021">2021</Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <Divider />
                    <li className="black-aniani-menu-trigger">
                      <div className="black-link-button">
                        <Link to="#">BTech Student</Link>
                        <ul className="black-aniani-menu">
                          <li>
                            <div className="black-link-button">
                              <Link to="/people/BTech/2019">2019</Link>
                            </div>
                          </li>
                          <Divider />
                          <li>
                            <div className="black-link-button">
                              <Link to="/people/BTech/2020">2020</Link>
                            </div>
                          </li>
                          <Divider />
                          <li>
                            <div className="black-link-button">
                              <Link to="/people/BTech/2021">2021</Link>
                            </div>
                          </li>
                          <Divider />
                          <li>
                            <div className="black-link-button">
                              <Link to="/people/BTech/2022">2022</Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <Divider />
                    <li className="black-aniani-menu-trigger">
                      <div className="black-link-button">
                        <Link to="#">Alumni</Link>
                        <ul className="black-aniani-menu">
                          <li>
                            <div className="black-link-button">
                              <Link to="/people/Alumni/2014">2014</Link>
                            </div>
                          </li>
                          <Divider />
                          <li>
                            <div className="black-link-button">
                              <Link to="/people/Alumni/2015">2015</Link>
                            </div>
                          </li>
                          <Divider />
                          <li>
                            <div className="black-link-button">
                              <Link to="/people/Alumni/2016">2016</Link>
                            </div>
                          </li>
                          <Divider />
                          <li>
                            <div className="black-link-button">
                              <Link to="/people/Alumni/2017">2017</Link>
                            </div>
                          </li>
                          <Divider />
                          <li>
                            <div className="black-link-button">
                              <Link to="/people/Alumni/2018">2018</Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="black-menu">
                  <Link to="">Research</Link>
                  <ul className="black-ani-menu">
                    <li>
                      <div className="black-link-button">
                        <Link to="/research">Research Areas</Link>
                      </div>
                    </li>
                    <Divider />
                    <li>
                      <div className="black-link-button">
                        <Link to="/labs">Laboratories</Link>
                      </div>
                    </li>
                    <Divider />
                    <li className="black-aniani-menu-trigger">
                      <div className="black-link-button">
                        <Link to="#">Recent Publications</Link>
                        <ul className="black-aniani-menu">
                          <li>
                            <div className="black-link-button">
                              <Link to="https://drive.google.com/file/d/11-FnA1ob4pFqLmf6Oxnm5am7EiBfcgBB/view?usp=sharing">
                                2014
                              </Link>
                            </div>
                          </li>
                          <Divider />
                          <li>
                            <div className="black-link-button">
                              <Link to="https://drive.google.com/file/d/11-FnA1ob4pFqLmf6Oxnm5am7EiBfcgBB/view?usp=sharing">
                                2015
                              </Link>
                            </div>
                          </li>
                          <Divider />
                          <li>
                            <div className="black-link-button">
                              <Link to="https://drive.google.com/file/d/1v0943WJchHuHnRz165YcrYiCUMuzDJSI/view?usp=share_link">
                                2016
                              </Link>
                            </div>
                          </li>
                          <Divider />
                          <li>
                            <div className="black-link-button">
                              <Link to="https://drive.google.com/file/d/1Hk5HSjU-3dX8PJwqs0eJzomGTRtEtOqO/view?usp=share_link ">
                                2017
                              </Link>
                            </div>
                          </li>
                          <Divider />
                          <li>
                            <div className="black-link-button">
                              <Link to="https://drive.google.com/file/d/1DOTYJUGoaRlMVdumamsFBWBoeA5PHOX7/view?usp=sharing">
                                2018
                              </Link>
                            </div>
                          </li>
                          <Divider />

                          <li>
                            <div className="black-link-button">
                              <Link to="https://drive.google.com/file/d/1kvh7ALhO19oXuUyz4G1SvPHc9BcO968z/view?usp=share_link">
                                2019
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <Divider />

                    <li>
                      <div className="black-link-button">
                        <Link to="/projects">Projects</Link>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="black-menu">
                  <Link to="">Academics</Link>
                  <ul className="black-ani-menu">
                    <li>
                      <div className="black-link-button">
                        <Link to="/research/programs">Programs</Link>
                      </div>
                    </li>
                    <Divider />
                    <li className="black-aniani-menu-trigger">
                      <div className="black-link-button">
                        <Link to="#">Courses</Link>
                        <ul className="black-aniani-menu">
                          <li>
                            <div className="black-link-button">
                              <Link to="/courses/BTech">BTech</Link>
                            </div>
                          </li>
                          <Divider />
                          <li>
                            <div className="black-link-button">
                              <Link to="/courses/MTech">MTech</Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="black-menu">
                  <Link to="">Achievements</Link>
                  <ul className="black-ani-menu">
                    <li>
                      <div className="black-link-button">
                        <Link to="/achievements/books">Books Published</Link>
                      </div>
                    </li>
                    <Divider />
                    <li>
                      <div className="black-link-button">
                        <Link to="https://docs.google.com/document/d/1U4dVQAq3rLZoSBwhSiy2ZiOkuDGTsoPY/edit?usp=sharing&ouid=109062875077411154816&rtpof=true&sd=true">
                          Faculty Recognition
                        </Link>
                      </div>
                    </li>
                    <Divider />
                    <li>
                      <div className="black-link-button">
                        <Link to="https://docs.google.com/document/d/1ousTmg6WNb-loWzR4uylvakgNBpFpXG4/edit?usp=sharing&ouid=109062875077411154816&rtpof=true&sd=true">
                          Student Achievements
                        </Link>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="black-menu">
                  <Link to="">Open Positions</Link>
                  <ul className="black-ani-menu">
                    <li>
                      <div className="black-link-button">
                        <Link to="">Faculty Positions</Link>
                      </div>
                    </li>
                    <Divider />
                    <li>
                      <div className="black-link-button">
                        <Link to="">PhD Positions</Link>
                      </div>
                    </li>
                    <Divider />
                    <li>
                      <div className="black-link-button">
                        <Link to="">Project Positions</Link>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Box>
    </>
  );
};

export default BlackHeader;
