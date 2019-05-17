import React, { Component } from 'react';

import '../App.css';

export default class Error extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="error-page">
          <img src="./assets/dne.png" alt="error" />
        </div>
      </div>
    )
  }
}
