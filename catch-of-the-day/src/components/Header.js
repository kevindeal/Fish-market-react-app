import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>Catch<span className="ofThe">of the</span> Day</h1>
        <h3 className="tagline">
          <span>Fresh Seafood Market</span>
        </h3>
      </header>
    );
  }
}   

export default Header;