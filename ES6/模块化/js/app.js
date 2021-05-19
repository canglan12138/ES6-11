/*入口文件*/

//引入 分别暴露.js模块内容
import * as m1 from './分别暴露.js'

console.log(m1.teacher);
console.log(m1.obj.name);
m1.obj.run()
console.log('----------------');

//引入 统一暴露.js内容
import * as m2 from './统一暴露.js'

console.log(m2.school);
m2.findJob()
console.log('---------------');

//引入 默认暴露.js
import * as m3 from './默认暴露.js'

console.log(m3);
console.log(m3.default.school);
m3.default.change()
