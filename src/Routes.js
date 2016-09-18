import React, { PropTypes } from 'react'
import { Router, Route, browserHistory,hashHistory,IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import AboutMe from './AboutMe';
import Work from './Work';
import Blog from './Blog';
class Routes extends React.Component {
  render () {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={App }>
          <IndexRoute component={Home} />
          <Route path="aboutMe" component={AboutMe} />
          <Route path="work" component={Work} />
          <Route path="/blog/:title" component={Blog} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
