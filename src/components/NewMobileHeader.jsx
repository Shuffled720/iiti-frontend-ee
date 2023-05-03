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
import navs from "../navdata";

const NewMobileHeader = () => {
  const [ani, setAni] = React.useState(0);
  const [aniani, setAniani] = React.useState(0);

  const [toggle1, setToggle1] = React.useState(0);
  const [toggle2, setToggle2] = React.useState(0);

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

        {Object.keys(navs).map((key, i) => (
          <>
            <ListItemButton
              onClick={() => {
                setAni(i);
                setToggle1(1);
              }}
            >
              <ListItemText primary={key} />
              {ani === i ? (
                <>
                  <ExpandLess />
                </>
              ) : (
                <>
                  <ExpandMore />
                </>
              )}
            </ListItemButton>

            {ani === i ? (
              <>
                <Collapse in={toggle1} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {Object.keys(navs[key]).map((key1, i1) => (
                      <>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          onClick={() => {
                            setAniani(i1);
                            setToggle2(1);
                          }}
                        >
                          <Link className="nav-link" to={navs[key][key1]}>
                            <ListItemText primary={key1} />
                          </Link>
                          {typeof navs[key][key1] === "object" ? (
                            <>
                              {aniani === i1 ? (
                                <>
                                  <ExpandLess />
                                </>
                              ) : (
                                <>
                                  <ExpandMore />
                                </>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </ListItemButton>
                        {aniani === i1 ? (
                          <>
                            <Collapse in={toggle2} timeout="auto" unmountOnExit>
                              <List>
                                {Object.keys(navs[key][key1]).map(
                                  (key2, i2) => (
                                    <>
                                      {typeof navs[key][key1] === "object" ? (
                                        <>
                                          <ListItemButton
                                            sx={{ pl: 4 }}
                                            onClick={() => {
                                              setAniani(i1);
                                              setToggle2(0);
                                            }}
                                          >
                                            <Link
                                              className="nav-link"
                                              to={navs[key][key1][key2]}
                                            >
                                              <ListItemText primary={key2} />
                                            </Link>
                                          </ListItemButton>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </>
                                  )
                                )}
                              </List>
                            </Collapse>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <>
                {/* <Collapse in={!toggle} timeout="auto" unmountOnExit>
                  
                </Collapse> */}
              </>
            )}
          </>
        ))}
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
          <Link to={"/"}>
            <Box>
              <img src="/Images/logo/blue_logo.png" alt="loggg" width="50" />
            </Box>
          </Link>
          <Link to={"/"}>
            <Box sx={{ px: 1 }}>
              <Typography fontSize="0.8rem" fontWeight="600" color="black">
                Department Of Electical Engineering
                <br />
              </Typography>
              <Typography fontSize="0.6rem" fontWeight="600" color="black">
                Indian Institute Of Technology Indore
              </Typography>
            </Box>
          </Link>
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

export default NewMobileHeader;
