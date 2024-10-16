/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css';
import './all.css';
import './all.min.css';
export default function Navbar() {
  return (
    <>
      <nav id="navbar">
        <ul className="navbar-items flexbox-col">
          <li className="navbar-logo flexbox-left">
            <a className="navbar-item-inner flexbox active">
            <i className="fa-thin fa-brightness"></i>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
              <i className="fa-thin fa-magnifying-glass"></i>
              </div>
              <span className="link-text">Search</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
              <i className="fa-thin fa-home"></i>
              </div>
              <span className="link-text">Home</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
              <i className="fa-thin fa-folders"></i>
              </div>
              <span className="link-text">Projects</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
              <i className="fa-thin fa-chart-pie"></i>
              </div>
              <span className="link-text">Dashboard</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
              <i className="fa-thin fa-users"></i>
              </div>
              <span className="link-text">Team</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
              <i className="fa-thin fa-messages"></i>
              </div>
              <span className="link-text">Support</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
              <i className="fa-thin fa-gear"></i>
              </div>
              <span className="link-text">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* Main */}
      <main id="main" className="flexbox-col">
      </main>
    </>
  );
}
