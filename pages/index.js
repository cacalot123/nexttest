import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import dynamic from 'next/dynamic';
import stylesheet from '../static/css/index.scss';

const DynamicComponent = dynamic(import('./index/ajaxTest'), {
  ssr: false
});


class Index extends React.Component {

  static async getInitialProps({req}) {
    const res = await axios.get('http://testapp2.yidianling.com/v3/hs-course/home-head', {params: ''})
    // const data = await res.data;
    // console.log(typeof data)
    return {
      banner: res.data.data.banner

    }
  }


  constructor(props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  // handling escape close
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown(e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal() {
    Router.push('/')
  }

  showPhoto(e, id) {
    e.preventDefault()
    Router.push(`/?photoId=${id}`, `/photo?id=${id}`)
  }

  render() {
    const {banner} = this.props

    return (
      <div>
        <Head>
          <title>My 2222age title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <DynamicComponent/>
        <Link scroll={false} href={{ pathname: '/about', query: { name: 'Zeit', id:'111' }}}>
          <a className="goabout">about</a>
        </Link>
        <div className='list'>
          {banner.map((value, index, data) => (
            <div key={index} className="banner">{value.bannerId}</div>
          ))}
          {/*{*/}
          {/*url.query.photoId &&*/}
          {/*<Modal*/}
          {/*id={url.query.photoId}*/}
          {/*onDismiss={() => this.dismissModal()}*/}
          {/*/>*/}
          {/*}*/}
          {/*{*/}
          {/*photos.map((id) => (*/}
          {/*<div key={id} className='photo'>*/}
          {/*<img src="/static/logo.png" />*/}
          {/*<a*/}
          {/*className='photoLink'*/}
          {/*href={`/photo?id=${id}`}*/}
          {/*onClick={(e) => this.showPhoto(e, id)}*/}
          {/*>*/}
          {/*{id}*/}
          {/*</a>*/}
          {/*</div>*/}
          {/*))*/}
          {/*}*/}

        </div>
        <style jsx>{stylesheet}</style>

      </div>

    )
  }
}

export default Index;
