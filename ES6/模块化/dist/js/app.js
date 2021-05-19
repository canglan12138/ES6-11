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