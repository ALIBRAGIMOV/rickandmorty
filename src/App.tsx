import React from "react";
import { Store } from "./Store";
import "./App.css";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <div className="container">
        <nav
          className="navbar fixed-top navbar-light"
          style={{ justifyContent: "center" }}
        >
          <Link to="/">
            {" "}
            <h1 className="header font-weight-bolder">Rick and Morty 🛸</h1>
          </Link>
        </nav>
      </div>
      <div className="love_episode">
        <Link to="/faves" className="links">
          Список избранных
        </Link>
        <a style={{marginLeft: '20px'}}>{state.favourites.length}</a>
      </div>
      {props.children}
    </React.Fragment>
  );
}