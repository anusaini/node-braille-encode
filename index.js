const asciiAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const isAscii = ch => ch.charCodeAt(0) <= 127
const encodeChar = ch => isAscii ? String.fromCharCode(ch.charCodeAt(0) + 0x2800) : ch
const encode = (str, separator) => str.split('').map(encodeChar).join(separator || '')
const encodeCharCode = chCode => chCode >= 32 && chCode <= 127 ? String.fromCharCode(chCode + 0x2800) : undefined
const asciiMap = () => {
  const map = []
  for (let i = 32; i <= 127; i++) {
    map.push({
      code: i,
      ascii: String.fromCharCode(i),
      braille: encodeCharCode(i)
    })
  }
  return map
}
const alphabetMap = asciiAlphabet.split('').map(i => {
  return {
    ascii: i,
    braille: encodeChar(i)
  }
})
const alphabetString = encode(asciiAlphabet)

module.exports = {
  alphabetMap,
  alphabetString,
  asciiAlphabet,
  asciiMap,
  encode,
  encodeChar,
  encodeCharCode,
  isAscii
}
