import React, { PropTypes } from 'react'

class Blog extends React.Component {
  render () {
    console.log(this.props)
    return(
      <div>
        {this.props.params.title=='a'? 'hello':
          this.props.params.title=='b'? 'world':
          this.props.params.title=='c'? 'nihao':
          this.props.params.title=='d'? 'world':'none'
      }
      </div>
    )
  }
}

export default Blog;
