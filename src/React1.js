import React from 'react'
// import { Button } from 'react-bootstrap'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './Header';
import Login1 from './Login1';
import Register from "./Register";
import Update1 from "./Update1";
import AddProduct from './AddProduct';
function React1() {
    return (
      <div>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/Login" element={<Login1 />} />
            <Route path="/register" element={<Register />} />
            <Route path="/update1" element={<Update1 />} />
            <Route path="/add" element={<AddProduct />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}
export default React1