import React, { PropTypes } from 'react'
import {browserHistory} from 'react-router'
class Card extends React.Component {
  handleClick(){
    let address = this.props.url;
    browserHistory.push(`/blog/${address}`)
  }
  render () {
    return(
        <div className="col-xs-6 col-sm-4">
            <div className="thumbnail">
              <img src = {this.props.imag} />
              <div className="caption">
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <p><a  className="btn btn-primary" role="button" onClick = {this.handleClick.bind(this)}>Button</a> </p>
              </div>
            </div>
        </div>
    )
  }
}

export default Card;
