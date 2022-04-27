const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(text, key) {
    if (text == undefined || key == undefined) throw new Error('Incorrect arguments!')
    let _key = key;
    while (_key.length < text.length) _key += key;
    let _newText = '';
    let j=0;
    for (let i=0; i<text.length; i++) {
        if (text[i].toLowerCase() < 'a' || text[i].toLowerCase() > 'z') {
            _newText += text[i];
            continue;
        }
        let _text = text[i].toLowerCase();
        let __key = _key[j].toLowerCase();
        _newText += String.fromCharCode((_text.charCodeAt(0) - 97 + __key.charCodeAt(0) - 97) % 26 + 65);
        j++;
    }
    if (this.type == false) _newText = _newText.split('').reverse().join('');
    return _newText;
  }
  decrypt(text, key) {
      if (text == undefined || key == undefined) throw new Error('Incorrect arguments!')
      let _key = key;
      while (_key.length < text.length) _key += key;
      let _newText = '';
      let j=0;
      for (let i=0; i<text.length; i++) {
          if (text[i].toLowerCase() < 'a' || text[i].toLowerCase() > 'z') {
              _newText += text[i];
              continue;
          }
          //let number = ;
          let _text = text[i].toLowerCase();
          let __key = _key[j].toLowerCase();
          _newText += String.fromCharCode((26 + _text.charCodeAt(0) - 97 - __key.charCodeAt(0) + 97) % 26 + 65);
          j++;
      }
      if (this.type == false) _newText = _newText.split('').reverse().join('');
      return _newText;
  }
}

module.exports = {
  VigenereCipheringMachine
};
