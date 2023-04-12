import * as React from "react";
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
import NewHeader from "./NewHeader";

const Header = () => {
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
  // const handleClick11=()=>{
  //   setOpen11(!open11);
  // }

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
              <Link className="nav-link" to="/about">
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
                  <Link className="nav-link" to="/about">
                    <ListItemText primary="2018" />
                  </Link>
                </ListItemButton>

                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/about">
                    <ListItemText primary="2019" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/about">
                    <ListItemText primary="2020" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/about">
                    <ListItemText primary="2021" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="/about">
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
                  <Link className="nav-link" to="#">
                    <ListItemText primary="2014" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="#">
                    <ListItemText primary="2018" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="#">
                    <ListItemText primary="2019" />
                  </Link>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <Link className="nav-link" to="#">
                    <ListItemText primary="2020" />
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
            <ListItemButton sx={{ pl: 4 }} onClick={handleClick10}>
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
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/admministration">
                <ListItemText primary="Courses" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/contact">
                <ListItemText primary="Scholarships" />
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={toggleDrawer(anchor, false)}
            >
              <Link className="nav-link" to="/gallery">
                <ListItemText primary="Awards and Recognitions" />
              </Link>
            </ListItemButton>
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

  ////////////////////////////////////////return////////////////////////////////
  return (
    <>
      <NewHeader />
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
            <img src="/Images/logo/blue_logo.png" alt="loggg" width="50" />
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
            sx={{ ml: "auto", color: "black" }}
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
    </>
  );
};
export default Header;
