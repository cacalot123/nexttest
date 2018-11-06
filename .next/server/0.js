exports.ids = [0];
exports.modules = {

/***/ "./config/env.js":
/*!***********************!*\
  !*** ./config/env.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("0");

/***/ }),

/***/ "./model/config/deploy.js":
/*!********************************!*\
  !*** ./model/config/deploy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "0": "//testapp2.yidianling.com/v3",
  "7": "//testapp2.yidianling.com/v3",
  "9": "//app2.yidianling.com/v3"
});

/***/ }),

/***/ "./model/sample/axios.js":
/*!*******************************!*\
  !*** ./model/sample/axios.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_deploy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/deploy.js */ "./model/config/deploy.js");
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/env */ "./config/env.js");



 // axios 中文使用说明
// https://www.kancloud.cn/yunye/axios/234845

var xhr = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  // baseURL: 'http://127.0.0.1:8081/api',
  baseURL: _config_deploy_js__WEBPACK_IMPORTED_MODULE_2__["default"][_config_env__WEBPACK_IMPORTED_MODULE_3__["default"]],
  timeout: 100000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  // 在传递给 then/catch 前，允许修改响应数据
  // 通过Qs.stringify转换为表单查询参数
  transformRequest: [function (data) {
    data = qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(data);
    return data;
  }],
  // 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
  // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`) ,
  // promise 将被 resolve; 否则，promise 将被 rejecte 。
  validateStatus: function validateStatus(status) {
    return status === 200;
  }
}); // 表示跨域请求时是否需要使用凭证
// 设置请求允许携带cookie
//xhr.defaults.withCredentials = true;
// 请求拦截
// api.interceptors.request.use(
//   apiconfig => apiconfig,
//   e => Promise.reject(e),
// );
// 响应拦截

xhr.interceptors.response.use(function () {
  var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  try {
    if (res.status >= 400) {
      return Promise.reject();
    }

    return Promise.resolve(res.data);
  } catch (e) {
    return Promise.reject(e);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (xhr);

/***/ }),

/***/ "./model/sample/index.js":
/*!*******************************!*\
  !*** ./model/sample/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ "./model/sample/axios.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  simpleGetConvert: function simpleGetConvert(data) {
    console.log('data', data);
    return data;
  },
  // poster
  simpleGet: function simpleGet(data) {
    var _this = this;

    return _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/hs-course/home-head', {
      params: data
    }).then(function (data) {
      return _this.simpleGetConvert(data);
    });
  },
  // 列表
  simplePost: function simplePost(data) {
    var _this2 = this;

    return _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/hs-course/home-list', data).then(function (data) {
      return _this2.homeListConvert(data);
    });
  }
});

/***/ }),

/***/ "./pages/index/ajaxTest.js":
/*!*********************************!*\
  !*** ./pages/index/ajaxTest.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_sample_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/sample/index */ "./model/sample/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ajaxTest =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ajaxTest, _React$Component);

  function ajaxTest() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ajaxTest);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ajaxTest)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      ajaxState: ''
    });

    return _this;
  }

  _createClass(ajaxTest, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.getData(); // console.log('getUrlParams',getUrlParams);
    }
  }, {
    key: "getData",
    value: function getData() {
      var postData = {};
      var t = this; // postData.name = "hah";
      // postData.id = "22";
      // SampleApi.simpleGet(postData).then((dataMap) => {
      //   console.log(1, dataMap)
      //   t.setState({
      //     ajaxState:dataMap.msg
      //   })
      // });
    }
  }, {
    key: "render",
    value: function render() {
      console.log('this', this);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "ajaxTest:111111");
    }
  }], [{
    key: "ajaxTestFun",
    value: function () {
      var _ajaxTestFun = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://testapp2.yidianling.com/v3/hs-course/home-head', {
                  params: ''
                });

              case 3:
                res = _context.sent;
                // const data = await res.data;
                // console.log(typeof data)
                console.log(res.data.data.courseCateList);
                return _context.abrupt("return", res.data.data.courseCateList);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function ajaxTestFun(_x) {
        return _ajaxTestFun.apply(this, arguments);
      };
    }()
  }]);

  return ajaxTest;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ajaxTest);

/***/ })

};;
//# sourceMappingURL=0.js.map