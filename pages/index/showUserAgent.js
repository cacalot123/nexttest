import React from 'react'

class showUserAgent extends React.Component {
  // static async getInitialProps({ req }) {
  //   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  //
  //   console.log('userAgent',userAgent)
  //   return { userAgent }
  // }

  render() {
    return (
      <div>
        userAgent {this.props.userAgent}
      </div>
    )
  }
}

export default showUserAgent;
