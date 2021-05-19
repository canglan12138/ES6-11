(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _ = require('./\u5206\u522B\u66B4\u9732.js');

var m1 = _interopRequireWildcard(_);

var _2 = require('./\u7EDF\u4E00\u66B4\u9732.js');

var m2 = _interopRequireWildcard(_2);

var _3 = require('./\u9ED8\u8BA4\u66B4\u9732.js');

var m3 = _interopRequireWildcard(_3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(m1.teacher); /*入口文件*/

//引入 分别暴露.js模块内容

console.log(m1.obj.name);
m1.obj.run();
console.log('----------------');

//引入 统一暴露.js内容


console.log(m2.school);
m2.findJob();
console.log('---------------');

//引入 默认暴露.js


console.log(m3);
console.log(m3.default.school);
m3.default.change();
},{"./分别暴露.js":2,"./统一暴露.js":3,"./默认暴露.js":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//分别暴露
var teacher = exports.teacher = 'joker';

var obj = exports.obj = {
  name: 'lg',
  run: function run() {
    console.log('run~~~~');
  }
};
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//统一暴露
var school = '尚硅谷';

function findJob() {
  console.log('找到工作');
}

exports.school = school;
exports.findJob = findJob;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//默认暴露
exports.default = {
  school: '尚硅谷',
  change: function change() {
    console.log('我们可以改变你');
  }
};
},{}]},{},[1]);
