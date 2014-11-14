var fs = require('fs')
var dict = fs.readFileSync('./dict.txt', 'utf8').split('\n')
var bitparser = require('bitparser')

function toBuffer(v) {
  if (!Buffer.isBuffer(v))
    return new Buffer(v, 'hex')
  return v
}

var toDict = module.exports = function(buf) {
  var out = []
  buf = toBuffer(buf)
  var bp = bitparser(buf)
  while (bp.index < buf.length * 8) {
    try {
      var index = bp.readBits(11)
      out.push(dict[index])
    } catch (e) {
      break
    }
  }
  return out
}

if (!module.parent) {
  console.log('toDict: deadbeef')
  console.log(toDict('deadbeef').join(' '))
  console.log('')
  console.log('toDict: 6ecd355b90e81e72c0e37c3b4023325b20f048c58d4200c69e4fbd550876e6fe')
  console.log(toDict('6ecd355b90e81e72c0e37c3b4023325b20f048c58d4200c69e4fbd550876e6fe').join(' '))
  console.log('')
  console.log('toDict: 88c9aa687a076aa530cc18d7921cec1f90f7779ad25915204d272a695072f58a')
  console.log(toDict('88c9aa687a076aa530cc18d7921cec1f90f7779ad25915204d272a695072f58a').join(' '))
}