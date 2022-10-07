import React, { Component } from 'react';

class Header extends Component {
    state = {  } 
    render() { 
        return (
          <header>
          <nav>
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
          </nav>
        </header>
        
        );
    }
}
 
export default Header;