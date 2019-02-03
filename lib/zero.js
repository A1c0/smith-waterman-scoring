const R = require('ramda');

const zeros1D = numberOfCell => R.pipe(
  R.range(0),
  R.map(() => 0)
)(numberOfCell);

const zeros2D = (nbY, nbX) => R.pipe(
  R.range(0),
  R.map(() => zeros1D(nbX)),
)(nbY);

module.exports = {zeros1D, zeros2D};
