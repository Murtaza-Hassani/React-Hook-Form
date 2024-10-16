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
            <a className="navbar-item-inner flexbox">
            <i className="fa-regular fa-brightness"></i>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="search-outline" />
              </div>
              <span className="link-text">Search</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="home-outline" />
              </div>
              <span className="link-text">Home</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="folder-open-outline" />
              </div>
              <span className="link-text">Projects</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="pie-chart-outline" />
              </div>
              <span className="link-text">Dashboard</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="people-outline" />
              </div>
              <span className="link-text">Team</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="chatbubbles-outline" />
              </div>
              <span className="link-text">Support</span>
            </a>
          </li>
          <li className="navbar-item flexbox-left">
            <a className="navbar-item-inner flexbox-left">
              <div className="navbar-item-inner-icon-wrapper flexbox">
                <ion-icon name="settings-outline" />
              </div>
              <span className="link-text">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* Main */}
      <main id="main" className="flexbox-col">
        <h2>Lorem ipsum!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
          corporis, rerum doloremque iste sed voluptates omnis molestias
          molestiae animi recusandae labore sit amet delectus ad necessitatibus
          laudantium qui! Magni quisquam illum quaerat necessitatibus sint
          quibusdam perferendis! Aut ipsam cumque deleniti error perspiciatis
          iusto accusamus consequuntur assumenda. Obcaecati minima sed natus?
        </p>
      </main>
    </>
  );
}
