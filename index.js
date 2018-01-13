
const encodeChar = ch => ch.charCodeAt(0) > 127 ? ch : String.fromCharCode(ch.charCodeAt(0) + 0x2800)
const encode = (str, separator) => str.split('').map(encodeChar).join(separator || '')

module.exports = {
    encode,
    encodeChar
}
