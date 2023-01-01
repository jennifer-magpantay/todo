import React, { useState } from "react";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Header } from "./components/Header";


export const App = () => {
  
  return (
    <div className="app__container">
      <Header />
      <Main/>
      <Footer />
    </div>
  );
};
