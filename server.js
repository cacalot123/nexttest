// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const {createServer} = require('http')
const express = require('express');
// const router = expressServer.Router()

const {parse} = require('url')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
app.prepare().then(() => {

  const server = express()
  server.get('/', (req, res) => {
    return app.render(req, res, '/index', req.query)
  })
  server.get('/about', (req, res) => {
    return app.render(req, res, '/about/about', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
  // createServer((req, res) => {
  //   // Be sure to pass `true` as the second argument to `url.parse`.
  //   // This tells it to parse the query portion of the URL.
  //
  //
  //
  //
  //   // if (req.headers.host === 'my-app.com') {
  //   //   app.setAssetPrefix('http://cdn.com/myapp')
  //   // } else {
  //   //   app.setAssetPrefix('')
  //   // }
  //
  //
  //   switch (pathname) {
  //     case '/':
  //       app.render(req, res, '/', query)
  //       break;
  //     case '/about':
  //       app.render(req, res, '/about/about', query)
  //       break;
  //     default:
  //       handle(req, res, parsedUrl)
  //   }
  //
  //
  // }).listen(3100, err => {
  //   if (err) throw err
  //   console.log('> Ready on http://localhost:3100')
  // })
})
