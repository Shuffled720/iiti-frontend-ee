import React from "react";
import "./Components Css/BlackHeader.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import navs from "../navdata";
import MobileHeader from "./MobileHeader";
import NewMobileHeader from "./NewMobileHeader";
const BlackHeader = () => {
  return (
    <>
      {/* <MobileHeader /> */}
      <NewMobileHeader />
      {/* /////////////////////////////////////////////////// */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <div className="black-navdiv">
          <nav className="black-naviiii">
            <div className="black-logo-text">
              <Link to="/">
                <img
                  src="/Images/logo/blue_logo.png"
                  alt="logo_png"
                  width="100px"
                ></img>
              </Link>
              <Link to="/">
                <div>
                  <Typography variant="h5" color={"black"} padding={5}>
                    Indian Institute Of Technology Indore
                    <br /> Department Of Electrical Engineering
                  </Typography>
                </div>
              </Link>
            </div>
            <div className="black-menu-wrapper">
              <ul className="black-nav-links">
                <li className="black-menu">
                  <Link to="/">Home</Link>
                </li>
                {Object.keys(navs).map((key, i) => (
                  <>
                    <li className="black-menu">
                      <Link to="#">{key}</Link>
                      {typeof navs[key] === "object" ? (
                        <>
                          <ul className="black-ani-menu">
                            {Object.keys(navs[key]).map((key2, i2) => (
                              <>
                                {typeof navs[key][key2] === "object" ? (
                                  <>
                                    <li className="black-aniani-menu-trigger">
                                      <div className="black-link-button">
                                        <Link to="#">{key2}</Link>
                                        <ul className="black-aniani-menu">
                                          {Object.keys(navs[key][key2]).map(
                                            (key3, i3) => (
                                              <>
                                                <li>
                                                  <div className="black-link-button">
                                                    <Link
                                                      to={navs[key][key2][key3]}
                                                    >
                                                      {key3}
                                                    </Link>
                                                  </div>
                                                </li>
                                              </>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    </li>
                                  </>
                                ) : (
                                  <>
                                    <li>
                                      <div className="black-link-button">
                                        <Link to={navs[key][key2]}>{key2}</Link>
                                      </div>
                                    </li>
                                  </>
                                )}
                                <Divider />
                              </>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <></>
                      )}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </Box>
    </>
  );
};

export default BlackHeader;
