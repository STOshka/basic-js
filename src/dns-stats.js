const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = {};
  for (let i=0; i<domains.length; i++) {
    let dns = domains[i].split('.');
    let _dns = '';
    for (let j=dns.length - 1; j > -1; j--) {
      _dns += '.' + dns[j];
      stats[_dns] = stats[_dns] || 0;
      stats[_dns]++;
    }
  }
  return stats;
}

module.exports = {
  getDNSStats
};
