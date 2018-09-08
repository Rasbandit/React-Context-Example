import React, { Component } from 'react';
import Person from './Person';

export default class Family extends Component {
    render() {
      return (
        <div className="family">
          <Person />
        </div>
      )
    }
  }