import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './common.css';

export default class Header extends Component {
  render () {
    return (
      <div class="header">
        <h1 class="visuallyhidden">桃子集運</h1>
        <ul>
          <li><a class="logo" href="index.html">桃子集運</a></li>
    			<li><a class="active" href="index.html">韓國集運</a></li>
    			<li><a href="helpbuy.html">韓國代購</a></li>
    			<li><a href="vip.html">會員專區</a></li>
    			<li><a href="join.html">新會員註冊</a></li>
        </ul>
      </div>
    )
  }
}
