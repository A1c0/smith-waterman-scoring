const LocalAligner = require('../lib/local-aligner');

/**
 * Compute score this two strings
 * @param {array} arrayQ A sequence
 * @param {array} arrayP An another sequence
 * @param {Object} option the options
 * @param {number} option.gap The score gain to do a gap
 * @param {number} option.mismatch The score gain to do a mismatch
 * @param {number} option.match The score gain to do a match
 * @returns {{score: number, finalQ: array, finalP: array}} The result
 */
const smtihWaltermanScore = (arrayQ, arrayP, option) => {
  const sws = new LocalAligner(arrayQ, arrayP, option);
  sws.calcTables();
  sws.calcAlignemnt();
  return {finalQ: sws.finalQ, finalP: sws.finalP, score: sws.maxScore};
};

module.exports = smtihWaltermanScore;
