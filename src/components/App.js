import React, { PropTypes } from 'react';

import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

import './App.css';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">{this.props.children}</div>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
