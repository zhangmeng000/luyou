import React from 'react';
import { browserHistory, hashHistory,Link } from 'react-router';
class Home extends React.Component {
  handleClick(){
    console.log(browserHistory)
    browserHistory.push('work')
  }
  render() {
    return (

      <div className="jumbotron">
      <h1>欢迎光临</h1>
      <p>我的主页</p>
      <p><a className="btn btn-primary btn-lg" href="#" role="button" onClick = {this.handleClick.bind(this)}>Learn more</a></p>

        {this.props.children}
      </div>
    );
  }
}

export default Home;
