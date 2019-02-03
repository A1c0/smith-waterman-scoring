const LocalAligner = require('../lib/local-aligner');

const smtihWaltermanScore = (array1, array2, {gap, mismatch, match}) => {
  const sws = new LocalAligner(array1, array2, {gap, mismatch, match});
  sws.calcTables();
  sws.calcAlignemnt();
  return sws;
};

module.exports = smtihWaltermanScore;
