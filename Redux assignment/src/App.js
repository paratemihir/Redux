import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./features/website/Header";
import Footer from "./features/website/Footer";
import Home from "./features/website/Home";
import AddData from "./features/website/AddData";
import Mng_contact from "./features/website/Mng_contact";
import Add_contact from "./features/website/Add_contact";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Edit_data from "./features/website/Edit_data";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<><Header /><Home /><Footer /></>}></Route>
          <Route path="/Home" element={<><Header /><Home /><Footer /></>}></Route>
          <Route path="/Add_data" element={<><Header /><AddData /><Footer /></>}></Route>
          <Route path="/Add_contact" element={<><Header /><Add_contact /><Footer /></>}></Route>
          <Route path="/Mng_contact" element={<><Header /><Mng_contact /><Footer /></>}></Route>
          <Route path="/edit_data/:id" element={<><Header/> <Edit_data/> <Footer/></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
