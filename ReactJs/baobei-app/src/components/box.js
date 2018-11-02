import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './common.css';

export class BoxTitle extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div class="box">
        <div class="box_title">
          {this.props.ttl}
        </div>
        <div class="box_content">
          {this.props.content}
        </div>
      </div>
    )
  }
}

export class BoxList extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <ul>
        <li></li>
      </ul>
    )
  }
}


