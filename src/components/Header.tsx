import React from "react";
import { Notepad } from "phosphor-react";

export const Header = () => {
  return (
    <header className="header">
      <Notepad size={32} color="#4ea8de" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
};
