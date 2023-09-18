import React, { Component } from 'react';
import '../../css/header.css'


class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <div className="info">
            <div className="logo">SomeLogo</div>
            <div className="info-dropdowns">
              <div className="articles info-container">
              <button className="article-dropdown">
                Articles
              </button>
            </div>
              <div className="calculator info-container">
              <button className="article-dropdown">
                Calculators
              </button>
            </div>
              <div className="tips info-container">
              <button className="tips-dropdown">
                Guides & Tips
              </button>
            </div>
            </div>
          </div>
          <div className="auth">
            <div className="signIn">
              <a href="#" className="signin-link"></a>
              <div className="signIn">
                <span className="authText">
                  Sign in
                </span>
              </div>
            </div>
            <div className="signUp">
              <a href="#" className="signup-link"></a>
              <div className="signUp">
                <span className="authText">
                  Sign up
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
