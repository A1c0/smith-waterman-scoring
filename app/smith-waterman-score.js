const LocalAligner = require('../lib/local-aligner');

/**
 * Compute score this two strings
 * @param {array} arrayQ A sequence
 * @param {array} arrayP An another sequence
 * @param {number} gap The score gain to do a gap
 * @param {number} mismatch The score gain to do a mismatch
 * @param {number} match The score gain to do a match
 * @returns {{score: {number}, finalQ: {array}, finalP: {array}}} The result
 */
const smtihWaltermanScore = (arrayQ, arrayP, {gap, mismatch, match}) => {
  const sws = new LocalAligner(arrayQ, arrayP, {gap, mismatch, match});
  sws.calcTables();
  sws.calcAlignemnt();
  return {finalQ: sws.finalQ, finalP: sws.finalP, score: sws.maxScore};
};

module.exports = smtihWaltermanScore;
