import React from "react";
import logo from "../../assets/logo.png";
import { browserRouter, Link, Switch, Route } from "react-router-dom";
import homeImage from "../../assets/home-image.png";
import Minter from "./Minter";
import Gallery from "./Gallery";

function Header() {
  return (  
    <browserRouter>
    <div className="app-root-1">
      <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4">
        <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
          <div className="header-left-4"></div>
          <img className="header-logo-11" src={logo} />
          <div className="header-vertical-9"></div>
          <Link to="/">
          <h5 className="Typography-root header-logo-text">Protec</h5>
          </Link>
          <div className="header-empty-6"></div>
          <div className="header-space-8"></div>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
          <Link to="/discover">
            Discover
            </Link>
          </button>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
          <Link to="/minter">
            Minter
            </Link>
          </button>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
          <Link to="collection">
            My Products
            </Link>
          </button>
        </div>
      </header>
    </div>
    <Switch> 
    <Route exact path="/">
    <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            Welcome to Administration Dashboard!
            <span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Start your fight against counterfeit products with Protec
          </p>
   
      <img className="bottom-space col-lg-6" src={homeImage} />      
    </Route>
    <Route path="/discover">
      <h1>Discover page</h1>
    </Route>
    <Route path="/minter">
      <Minter />
    </Route>
    <Route path="collection">
      <Gallery />
    </Route>
    </Switch>
    </browserRouter>
  );
}

export default Header;
