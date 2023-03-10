import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Pricing from "./Pricing";
import Process from "./Process";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import GetLeadsInfo from "./GetLeadsInfo";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/process" element={<Process />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/getleads" element={<GetLeadsInfo />} />
          <Route path="/herculespowerwashing" element={<Project1 />} />
          <Route path="/shimmerexteriorcleaning" element={<Project2 />} />
          <Route path="/horizonslandscaping" element={<Project3 />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
