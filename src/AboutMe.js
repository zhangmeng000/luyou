import React from 'react';
import { Router, Route, hashHistory,Link } from 'react-router';
import axios from 'axios'
class AboutMe extends React.Component {
  constructor(){
    super();
    this.state = {
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('http://api.github.com/users/zhangmeng000')
    .then((res)=>{
      this.setState({
        data:res.data,
        wait:false
      })
    })
  }
  render() {
    console.log(this.state.data)
    return (
      <div className="container-fluid">
        {this.state.wait ? '正在获取数据': <img src={this.state.data.avatar_url} />}
        <div className="row" style = {{marginTop:'30px'}}>
          <div className="col-xs-6 col-md-3 col-md-offset-1">
            <div className="row">
              <div className="col-md-3 col-md-offset-1">欢</div>
              <div className="col-md-3 col-md-offset-1">迎</div>
              <div className="col-md-3 col-md-offset-1">YOU</div>
            </div>
          </div>
          <div className="col-xs-6 col-md-3 col-md-offset-1">再<span className="glyphicon glyphicon-save"></span></div>
          <div className="col-xs-6 col-md-3 col-md-offset-1">来<span className="glyphicon glyphicon-open"></span></div>
        </div>
      </div>
    )
  }
}

export default AboutMe;
