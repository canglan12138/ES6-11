const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname,'resources/为学.md'),(err,data) => {
//   if (err) {
//     console.log('读取文件失败');
//     console.log(err);
//   }else {
//     console.log(data.toString());
//   }
// })

new Promise((resolve, reject) => {
  setTimeout(() => {
    fs.readFile(path.resolve(__dirname,'resources/为学.md'),(error,data) => {
      if (error) {
        console.log('读取文件失败');
        reject(error)
      }else {
        resolve(data)
      }
    })
  },1000)
}).then(function (result) {
  console.log(result.toString());
  return new Promise((resolve1, reject1) => {
    setTimeout(() => {
      fs.readFile(path.resolve(__dirname,'resources/观书有感.md'),(error,data) => {
        if (error) {
          console.log('读取文件失败');
          reject1(error)
        }else {
          resolve1(data)
        }
      })
    },1000)
  })
}).then(function (result) {
  console.log(result.toString());
}).catch(function (err) {
  console.log(err);
})
