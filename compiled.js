"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Article =
/*#__PURE__*/
function () {
  function Article(_ref) {
    var author = _ref.author,
        _ref$description = _ref.description,
        description = _ref$description === void 0 ? "No details" : _ref$description,
        publishedAt = _ref.publishedAt,
        title = _ref.title,
        url = _ref.url,
        urlToImage = _ref.urlToImage,
        name = _ref.source.name;

    _classCallCheck(this, Article);

    this.author = author || name;
    this.description = description;
    this.publishedAt = publishedAt;
    this.sourceName = name;
    this.title = title;
    this.articleUrl = url;
    this.imageUrl = urlToImage;
  }

  _createClass(Article, [{
    key: "createArticle",
    value: function createArticle() {
      return "<div class=\"card\">\n                <img class=\"img\" src=".concat(this.imageUrl, " alt=\"No image to show\">\n                <div class=\"card-body\">\n                    <div class=\"card-title\">\n                        <h5 class=\"card-title\">").concat(this.title, "</h5>\n                        <h6 class=\"card-title\">").concat(this.author, "</h6>\n                        <a href=").concat(this.articleUrl, " class=\"article-link\">").concat(this.sourceName, "</a>\n                    </div>\n                    <p class=\"card-text\">").concat(this.publishedAt, "</p>\n                    <p class=\"card-text\">").concat(this.description, "</p>\n                 </div>\n            </div>");
    }
  }]);

  return Article;
}();

exports.default = Article;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CheckBox =
/*#__PURE__*/
function () {
  function CheckBox(id, name) {
    _classCallCheck(this, CheckBox);

    this.id = id;
    this.name = name;
  }

  _createClass(CheckBox, [{
    key: "cretateCheckBox",
    value: function cretateCheckBox() {
      return "<div class=\"form-check\">\n        <label class=\"form-check-label\">\n        <input class=\"form-check-input\" type=\"checkbox\" value=".concat(this.id, ">").concat(this.name, "\n        </label>\n        </div>");
    }
  }]);

  return CheckBox;
}();

exports.default = CheckBox;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createCheckBox = _interopRequireDefault(require("./createCheckBox.js"));

var _getNewsChannel = _interopRequireDefault(require("./getNewsChannel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View =
/*#__PURE__*/
function () {
  function View() {
    var sources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, View);

    this.sources = new _getNewsChannel.default();
    this.data = this.sources.getChannelTitle();
  }

  _createClass(View, [{
    key: "createSources",
    value: function () {
      var _createSources = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.data.then(function (response) {
                  return response.map(function (source) {
                    var checkBox = new _createCheckBox.default(source.toLowerCase().split(" ").join("-"), source);
                    return checkBox.cretateCheckBox();
                  }).join('');
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function createSources() {
        return _createSources.apply(this, arguments);
      };
    }()
  }, {
    key: "createNumSection",
    value: function createNumSection() {
      return document.body.firstElementChild.appendChild(document.createElement('form')).outerHTML = "<div id =\"inputFilter\">Please,enter number of articles:\n                                                                                                                            <input id=\"filterNews\" value=20>\n                                                                                                        </div>";
    }
  }, {
    key: "createGetNewsButton",
    value: function createGetNewsButton() {
      return document.body.firstElementChild.appendChild(document.createElement('form')).outerHTML = "<button class=\"btn\" id=\"getNews\">Let's go</button>";
    }
  }, {
    key: "addCheckBoxexSection",
    value: function () {
      var _addCheckBoxexSection = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.createSources();

              case 2:
                return _context2.abrupt("return", document.body.firstElementChild.appendChild(document.createElement('form')).outerHTML = _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function addCheckBoxexSection() {
        return _addCheckBoxexSection.apply(this, arguments);
      };
    }()
  }, {
    key: "getCheckedSources",
    value: function getCheckedSources() {
      return Array.from(document.getElementsByClassName('form-check-input')).reduce(function (accum, arrValue) {
        if (arrValue.checked) {
          accum.push(arrValue.value);
        }

        return accum;
      }, []);
    }
  }, {
    key: "getFilter",
    value: function getFilter() {
      return document.getElementById('filterNews').value;
    }
  }]);

  return View;
}();

exports.default = View;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GetData =
/*#__PURE__*/
function () {
  function GetData(source, pageSize) {
    _classCallCheck(this, GetData);

    this.source = source;
    this.request = "https://newsapi.org/v2/top-headlines?sources=".concat(source, "&apiKey=e25f68463ae0441a947aadda3a0fa55c&pageSize=").concat(pageSize);
  }

  _createClass(GetData, [{
    key: "getData",
    value: function getData() {
      return fetch(this.request).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok.');
      }).then(function (data) {
        return data.articles;
      }).catch(function (error) {
        return alert(error.message);
      });
    }
  }]);

  return GetData;
}();

exports.default = GetData;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GetSources =
/*#__PURE__*/
function () {
  function GetSources() {
    _classCallCheck(this, GetSources);

    this.request = "https://newsapi.org/v2/sources?apiKey=e25f68463ae0441a947aadda3a0fa55c&language=en&category=technology";
  }

  _createClass(GetSources, [{
    key: "getChannelTitle",
    value: function getChannelTitle() {
      return fetch(this.request).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok.');
      }).then(function (data) {
        return data.sources;
      }).then(function (arr) {
        return arr.map(function (item) {
          return item.name;
        });
      }).catch(function (error) {
        return alert(error.message);
      });
    }
  }]);

  return GetSources;
}();

exports.default = GetSources;
"use strict";

var _getData = _interopRequireDefault(require("./getData.js"));

var _createView = _interopRequireDefault(require("./createView.js"));

var _createArticle = _interopRequireDefault(require("./createArticle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var pageView = new _createView.default();
pageView.addCheckBoxexSection();
pageView.createNumSection();
pageView.createGetNewsButton();

var fetchData =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var source, data, articles;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return pageView.getCheckedSources();

          case 2:
            source = _context.sent;
            data = new _getData.default(source, pageView.getFilter() > 100 ? 100 : pageView.getFilter() <= 0 ? 1 : pageView.getFilter());
            articles = data.getData();
            return _context.abrupt("return", articles);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchData() {
    return _ref.apply(this, arguments);
  };
}();

var articlesHash =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var articleHash;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            articleHash = fetchData();
            _context2.next = 3;
            return articleHash.then(function (response) {
              return response.map(function (articleData) {
                var article = new _createArticle.default(articleData);
                return article.createArticle();
              }).join("");
            });

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function articlesHash() {
    return _ref2.apply(this, arguments);
  };
}();

var addArticles =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return articlesHash();

          case 2:
            return _context3.abrupt("return", document.body.appendChild(document.createElement('form')).outerHTML = _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function addArticles() {
    return _ref3.apply(this, arguments);
  };
}();

getNews.addEventListener("click", function () {
  return addArticles();
});
getNews.addEventListener("click", function () {
  return root.innerHTML = '';
});
