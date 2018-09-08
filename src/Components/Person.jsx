import React, { Component } from 'react';
import {MyContext} from './Provider'

export default class Person extends Component {
    render() {
        console.log(this.props)
      return(
        <div>
          <MyContext.Consumer>
            {(context) => (
              <React.Fragment>
                <p>Im inside the {context.state.name}</p>
                <p>Im years old {context.state.age}</p>
                <button onClick={context.growAYearOlder}>Age</button>
              </React.Fragment>
            )}
          </MyContext.Consumer>
        </div>
      )
    }
  }