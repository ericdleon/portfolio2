import React, { Component } from 'react';
import { ProgressBar } from 'react-materialize';
import '../App.css';

//Used In About.js

export default class Skills extends Component {
  render() {
    return (
      <div>
        <p className="skills-p"> {this.props.skill} </p>
        <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress} />
      </div>
    )
  }
}
