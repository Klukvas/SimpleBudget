import React, { Component } from 'react';
import '../../css/header.css'


class Header extends Component {
  render() {
    return (
     <header>
       <div className="header">
          <img src="" alt="Logo"/>
          <div className="dropdowns">
            <select className="dropdown">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <select className="dropdown">
                <option value="option4">Option 4</option>
                <option value="option5">Option 5</option>
                <option value="option6">Option 6</option>
            </select>
            <select className="dropdown">
                <option value="option7">Option 7</option>
                <option value="option8">Option 8</option>
                <option value="option9">Option 9</option>
            </select>
        </div>
          <div className="buttons">
            <button className="signInBtn auth-btn">Sign in</button>
            <button className="signUpBtn auth-btn">Sign up</button>
        </div>
        </div>
     </header>
    );
  }
}

export default Header;
