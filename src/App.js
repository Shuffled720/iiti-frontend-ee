import "./App.css";
import React from "react";
import theme from "./Theme";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PeoplePage from "./pages/PeoplePage";
import Research from "./pages/ResearchPage";
import AdministrationPage from "./pages/AdministrationPage";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import LabPage from "./pages/LabPage";
import DomainPage from "./pages/DomainPage";
import CoursePage from "./pages/CoursePage";
import FooterWithCounter from "./components/FooterWithCounter";
import NotFoundPage from "./pages/NotFoundPage";
import BlackHeader from "./components/BlackHeader";
import AboutUsPage from "./pages/AboutUsPage";
import BooksPage from "./pages/BooksPage";
import StatsPage from "./pages/StatsPage";
// import PaperPage from "./pages/PaperPage";
import ProgramPage from "./pages/ProgramPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import LoadingPage from "./pages/LoadingPage";
// import ResearchPage from "./pages/ResearchPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={[<Header />, <HomePage />]} />
            <Route path="/about" element={[<BlackHeader />, <AboutUsPage />]} />
            <Route path="/research" element={[<BlackHeader />, <Research />]} />
            <Route
              path="/labs/:program"
              element={[<BlackHeader />, <LabPage />]}
            />
            <Route
              path="/people/:program/:year"
              element={[<BlackHeader />, <PeoplePage />]}
            />
            <Route
              path="/people/:program"
              element={[<BlackHeader />, <PeoplePage />]}
            />
            <Route
              path="/research/:domain"
              element={[<BlackHeader />, <DomainPage />]}
            />
            <Route
              path="/administration"
              element={[<BlackHeader />, <AdministrationPage />]}
            />
            <Route
              path="/contact"
              element={[<BlackHeader />, <ContactPage />]}
            />
            <Route path="/gallery" element={[<BlackHeader />, <Gallery />]} />
            <Route
              path="/courses/:program"
              element={[<BlackHeader />, <CoursePage />]}
            />
            <Route
              path="/achievements/:achievement"
              element={[<BlackHeader />, <BooksPage />]}
            />
            {/* <Route
              path="/research/paper/:year"
              element={[<BlackHeader />, <PaperPage />]}
            /> */}
            <Route
              path="/stats/:params"
              element={[<BlackHeader />, <StatsPage />]}
            />
            <Route
              path="/courses/:program"
              element={[<BlackHeader />, <CoursePage />]}
            />
            <Route
              path="/research/programs"
              element={[<BlackHeader />, <ProgramPage />]}
            />
            <Route
              path="/projects"
              element={[<BlackHeader />, <ProjectPage />]}
            />
            <Route path="*" element={[<BlackHeader />, <NotFoundPage />]} />
            <Route path="/load" element={[<BlackHeader />, <LoadingPage />]} />
            <Route path="*" element={[<BlackHeader />, <NotFoundPage />]} />
          </Routes>
          <FooterWithCounter />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
