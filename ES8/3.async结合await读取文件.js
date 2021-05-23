const fs = require('fs')

function readWeixue() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/为学.md',(err,data) => {
      if (err) {
        reject(err)
      }else {
        resolve(data)
      }
    })
  })
}

function readChayagnshi() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/插秧诗.md',(err,data) => {
      if (err) {
        reject(err)
      }else {
        resolve(data)
      }
    })
  })
}

function readGuanshuyougan() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/观书有感.md',(err,data) => {
      if (err) {
        reject(err)
      }else {
        resolve(data)
      }
    })
  })
}

async function main() {

  const weixue = await readWeixue()
  const chayang = await readChayagnshi()
  const guanshu = await readGuanshuyougan()

  console.log(weixue.toString());
  console.log(chayang.toString());
  console.log(guanshu.toString());
}

main()
