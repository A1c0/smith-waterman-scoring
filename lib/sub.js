/**
 * Compute the score between 2 elements
 * @param {Object} elm1 The first element
 * @param {Object} elm2 The second element
 * @returns {number} the score
 */
const sub = (elm1, elm2) => {
  return JSON.stringify(elm1) === JSON.stringify(elm2) ? 0 : 1;
};

module.exports = sub;
