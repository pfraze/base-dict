# base dict

You have base 16, base 64, [base emoji](https://github.com/pfraze/base-emoji), and now, base dict.

(Output a buffer in words.)

## example

```
toDict: deadbeef
team hospital room

toDict: 6ecd355b90e81e72c0e37c3b4023325b20f048c58d4200c69e4fbd550876e6fe
human have finger canyon limit defense adjust hurdle deputy absurd smart rent audit caught bike portion absorb crunch negative kingdom explain derive orbit scissors

toDict: 88c9aa687a076aa530cc18d7921cec1f90f7779ad25915204d272a695072f58a
match essence old village issue family segment loan stuff movie deposit dish author rookie hero enroll benefit act endorse feel never defense stomach energy
```


## api

```js
var toWords = require('base-dict')
var buf = new Buffer('deadbeef', 'hex')
toWords(buf)
// => ['team' 'hospital' 'room']
```