import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Pricing from "./Pricing";
import Process from "./Process";
import Work from "./Work";
import Contact from "./Contact";
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
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
