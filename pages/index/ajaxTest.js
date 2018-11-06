import React from 'react'
import SampleApi from '../../model/sample/index';
import axios from 'axios';

class ajaxTest extends React.Component {

    static async ajaxTestFun({req}) {
    const res = await axios.get('http://testapp2.yidianling.com/v3/hs-course/home-head', {params: ''})
    // const data = await res.data;
    // console.log(typeof data)
      console.log(res.data.data.courseCateList)
    return res.data.data.courseCateList;

  }
  state = {
    ajaxState:''

  }



  componentWillMount() {
    this.getData();
    // console.log('getUrlParams',getUrlParams);
  }

  getData() {
    const postData = {};
    const t = this;
    // postData.name = "hah";
    // postData.id = "22";
    // SampleApi.simpleGet(postData).then((dataMap) => {
    //   console.log(1, dataMap)
    //   t.setState({
    //     ajaxState:dataMap.msg
    //   })
    // });
  }

  render() {
      console.log('this',this)
    return (
      <div>
        ajaxTest:111111
      </div>
    )
  }
}

export default ajaxTest;
