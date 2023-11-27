import React from "react";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";

function header() {
  return (
    <header>
      <Link to={`/`}>
        <img src="/assets/DEALIO_nbg.png" />
      </Link>
      <BurgerMenu />
    </header>
  );
}

export default header;
