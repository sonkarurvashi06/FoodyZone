import React from "react";
import { BrowserRouter, Routes, Route,Link ,Navigate} from "react-router-dom";
import Home2 from "./component2/Home2"
import About2 from "./component2/About2";
import Contact from "./component2/Contact";
import Navbar from "./component2/Navbar";
 import Page from "./component2/Page";
function Code9() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/*" element={<Page/>} /> */}
          <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    );    




}
export default Code9