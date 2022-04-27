const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let _options = {
    repeatTimes: options.repeatTimes || 1,
    separator: options.separator || '+',
    addition: typeof options.addition == 'undefined' ? '' : `${options.addition}`,
    additionRepeatTimes: options.additionRepeatTimes || 1,
    additionSeparator: options.additionSeparator || '|'
  }
  let add = new Array(_options.additionRepeatTimes).fill(_options.addition).join(_options.additionSeparator);
  return new Array(_options.repeatTimes).fill(`${str}${add}`).join(_options.separator);
}

module.exports = {
  repeater
};
