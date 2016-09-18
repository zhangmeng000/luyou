import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import NarBar from './compents/NarBar.js'
import Footer from './compents/Footer.js'
class App extends React.Component {

  render () {
    return(
      <div>
        <NarBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
