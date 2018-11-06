import React,{Component} from 'react';
import { withRouter } from 'next/router'

class about extends React.Component {
  render(){
    const {router} = this.props;

    console.log(router)
    const id = router.query.id;
    return(
      <div>about?{id}</div>
    )
  }
}
export default withRouter(about);
