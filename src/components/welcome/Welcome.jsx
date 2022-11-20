import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.scss';

export default function Welcome() {
  return (
    <div className="welcome">
      <nav class="navbar bg-nav">
        <Link className="logo" to="/">
          BIOREPERE
        </Link>
        <Link
          class="login-btn"
          rel="stylesheet"
          to="/login"
          title="Sign In"
        >
          Login
        </Link>
      </nav>
      <div class="container">
        <div class="left">
          <div class="">
            <div>
              <h1>All them products and services organic</h1>
              <h4>All them products and services organic</h4>
            </div>
            <div id="Download">
              <h1 class="py-5 text-center">Download Our App</h1>
              <div class=" d-flex justify-content-center gap-5  boxes_div">
                <div class="box">
                  <img
                    src="/img/android.png"
                    height="30px"
                    width="30px"
                    alt="android logo"
                  />
                  <label> Android</label>
                </div>
                <div class="box">
                  <img
                    src="/img/apple-logo.png"
                    alt="apple logo "
                    height="30px"
                    width="30px"
                  />
                  <label>iPhone</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img class="leaf" src="/img/leaf1.png" alt="leaf here " />
        </div>
      </div>
    </div>
  );
}
