const pairs = [{
    original: 'Anubhav',
    braille: '⡁⡮⡵⡢⡨⡡⡶'
  },
  {
    original: 'abcdefghijklmnopqrstuvwxyz',
    braille: '⡡⡢⡣⡤⡥⡦⡧⡨⡩⡪⡫⡬⡭⡮⡯⡰⡱⡲⡳⡴⡵⡶⡷⡸⡹⡺'
  }
]

const lib = require('./index')
const assert = require('assert')

module.exports = () => {
  console.log('Begin testing.')
  for (let x of pairs) {
    console.log('.')
    assert.equal(lib.encode(x.original), x.braille, `Testing encode(${x.original}) === ${x.braille}`)
  }
  console.log('End testing.')
}
