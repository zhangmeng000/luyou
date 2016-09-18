import React from 'react';
import {Link } from 'react-router';
class NarBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active">
            <Link to = '/' activeStyle = {{backgroundColor:'#70f3ff'}} onlyActiveOnIndex={true}>Home</Link>
          </li>
          <li role="presentation">
            <Link to = '/work' activeStyle = {{backgroundColor:'#70f3ff'}}>Work</Link>
          </li>
          <li role="presentation">
            <Link to = '/aboutme' activeStyle = {{backgroundColor:'#70f3ff'}}>AboutMe</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NarBar;
