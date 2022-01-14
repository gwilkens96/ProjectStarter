import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Profiles from "./Profiles";
import Edit from "./Edits";
import Forms from "./Forms";
import Login from "./Login/Login";

function StarterContainer() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" element={<Profiles />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Forms />} />
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default StarterContainer;
