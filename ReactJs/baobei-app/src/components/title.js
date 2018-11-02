import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './common.css';

export default class Title extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div class="title">
        {this.props.text}
      </div>
    )
  }
}
