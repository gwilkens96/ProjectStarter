import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Profiles from "./Profiles";
import Edit from "./Edits";
import Forms from "./Forms";

function StarterContainer() {
  return (
    <div>
      <Header></Header>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Profiles />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Forms />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default StarterContainer;
