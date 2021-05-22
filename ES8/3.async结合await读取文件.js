const fs = require('fs')

function readWeixue() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/为学.md',(err,data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

function readChayagnshi() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/插秧诗.md',(err,data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

function readGuanshuyougan() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/观书有感.md',(err,data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

async function main() {

  const weixue = await readWeixue()
  const chayang = await readWeixue()
  const guanshu = await readWeixue()

  console.log(weixue);
  console.log(chayang);
  console.log(guanshu);
}
