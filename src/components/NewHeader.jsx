import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Components Css/Header.css";
import navs from "../navdata";

const NewHeader = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <div className="navdiv">
        <nav className="naviiii">
          <div className="logo-text">
            <Link to="/">
              <img
                src="/Images/logo/blue_logo.png"
                alt="logo_png"
                width="100px"
              ></img>
            </Link>
            <Link to="/">
              <div>
                <Typography variant='h5' fontSize='1.7rem' color={"white"} padding={5}>
                  Indian Institute of Technology Indore
                  <br /> Department of Electrical Engineering
                </Typography>
              </div>
            </Link>
          </div>
          <div className="menu-wrapper">
            <ul className="nav-links">
              <li className="menu">
                <Link to="/"><Typography varient='p'>Home</Typography></Link>
              </li>
              {Object.keys(navs).map((key, i) => (
                <>
                  <li className="menu">
                    <Link to="#"><Typography varient='p' >{key}</Typography></Link>
                    {typeof navs[key] === "object" ? (
                      <>
                        <ul className="ani-menu">
                          {Object.keys(navs[key]).map((key2, i2) => (
                            <>
                              {typeof navs[key][key2] === "object" ? (
                                <>
                                  <li className="aniani-menu-trigger">
                                    <div className="link-button">
                                      <Link to="#"><Typography varient='p' >{key2}</Typography></Link>
                                      <ul className="aniani-menu">
                                        {Object.keys(navs[key][key2]).map(
                                          (key3, i3) => (
                                            <>
                                              <li>
                                                <div className="link-button">
                                                  <Link
                                                    to={navs[key][key2][key3]}
                                                  >
                                                    <Typography varient='p' >{key3}</Typography>
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
                                    <div className="link-button">
                                      <Link to={navs[key][key2]}><Typography varient='p'>{key2}</Typography></Link>
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
          {/* <div className="menu-wrapper">
            <ul className="nav-links">
              <li className="menu">
                <Link to="/">Home</Link>
              </li>
              <li className="menu">
                <Link to="/">About</Link>
                <ul className="ani-menu">
                  <li>
                    <div className="link-button">
                      <Link to="/about">Department</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/administration">Administration</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/contact">Contact Us</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/gallery">Gallery</Link>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="menu">
                <Link to="">People</Link>
                <ul className="ani-menu">
                  <li>
                    <div className="link-button">
                      <Link to="/people/Faculty">Faculty</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/people/Staff">Staff</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="#">PhD Student</Link>
                    </div>
                  </li>
                  <Divider />
                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="#">MTech Student</Link>
                      <ul className="aniani-menu">
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/MTech/2020">2020</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/MTech/2021">2021</Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <Divider />
                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="#">BTech Student</Link>
                      <ul className="aniani-menu">
                        <li>
                          <div className="link-button">
                            <Link to="/people/BTech/2019">2019</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/BTech/2020">2020</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/BTech/2021">2021</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/BTech/2022">2022</Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <Divider />

                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="#">Alumni</Link>
                      <ul className="aniani-menu">
                        <li>
                          <div className="link-button">
                            <Link to="/people/Alumni/2014">2014</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/Alumni/2015">2015</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/Alumni/2016">2016</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/Alumni/2017">2017</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/Alumni/2018">2018</Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="menu">
                <Link to="">Research</Link>
                <ul className="ani-menu">
                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="/research">Research Areas</Link>
                    </div>
                  </li>
                  <Divider />
                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="/labs">Laboratories</Link>
                    </div>
                  </li>
                  <Divider />
                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="#">Recent Publications</Link>
                      <ul className="aniani-menu">
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/1qX9rcgwrsd3iqmE54pHslRUN2ORCJfMx/view?usp=sharing">
                              2014
                            </Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/1qSAmG2AioIulfepDV24Qi4PrYyAw8TsI/view?usp=sharing">
                              2015
                            </Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/1HzcETzwbkBVoCJDDJ7tkKJNHjwEEB8HP/view?usp=sharing">
                              2016
                            </Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/1HqJKGdiL6NKLJO0exZ77LzUP9In4nTP8/view?usp=sharing">
                              2017
                            </Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/1Qug9moCGESKIZcxAG_9418EcU--sbvqg/view?usp=sharing">
                              2018
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/1J6ZdkDZ0fYK6fnEO7Z_4QvvQ0a8TjSAs/view?usp=sharing">
                              2019
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/1DTileDvZgFsl-POcNFKNd7itR58JgV15/view?usp=sharing">
                              2020
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/123rrtdJshXDsLol98cfAvo4Bb38v7Vcu/view?usp=sharing">
                              2021
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/1XqS7Ox-yTM39serkDFJD_xrHpPNRLIj3/view?usp=sharing">
                              2022
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <Divider />

                  <li>
                    <div className="link-button">
                      <Link to="/projects">Projects</Link>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="menu">
                <Link to="">Academics</Link>
                <ul className="ani-menu">
                  <li>
                    <div className="link-button">
                      <Link to="/research/programs">Programs</Link>
                    </div>
                  </li>
                  <Divider />
                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="#">Courses</Link>
                      <ul className="aniani-menu">
                        <li>
                          <div className="link-button">
                            <Link to="/courses/BTech">BTech</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/courses/MTech">MTech</Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <Divider />
                </ul>
              </li>
              <li className="menu">
                <Link to="">Achievements</Link>
                <ul className="ani-menu">
                  <li>
                    <div className="link-button">
                      <Link to="/achievements/books">Books Published</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="https://docs.google.com/document/d/1U4dVQAq3rLZoSBwhSiy2ZiOkuDGTsoPY/edit?usp=sharing&ouid=109062875077411154816&rtpof=true&sd=true">
                        Faculty Recognition
                      </Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="https://docs.google.com/document/d/1ousTmg6WNb-loWzR4uylvakgNBpFpXG4/edit?usp=sharing&ouid=109062875077411154816&rtpof=true&sd=true">
                        Student Achievements
                      </Link>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="menu">
                <Link to="">Open Positions</Link>
                <ul className="ani-menu">
                  <li>
                    <div className="link-button">
                      <Link to="">Faculty Positions</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="">PhD Positions</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="">Project Positions</Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div> */}
        </nav>
      </div>
    </Box>
  );
};

export default NewHeader;
