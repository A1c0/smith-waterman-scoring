const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const R = require('ramda');

const isAllSame = R.pipe(
  R.groupWith(R.equals),
  R.length,
  R.equals(1)
);

chai.use(chaiAsPromised);
chai.should();

const {zeros1D, zeros2D} = require('../lib/zero');

describe('zero.js', () => {
  describe('zeros 1D', () => {
    const zero1D = zeros1D(5);
    it('should be equal to 1 when there are two different number', () => {
      zero1D.length.should.equal(5);
      isAllSame(zero1D).should.equal(true);
      zero1D[0].should.equal(0);
    });
  });

  describe('zeros 2D', () => {
    const zero2D = zeros2D(2, 3);
    it('should be equal to 1 when there are two different objects', () => {
      zero2D[0].length.should.equal(3);
      zero2D.length.should.equal(2);
      R.flatten(zero2D).length.should.equal(6);
      isAllSame(zero2D).should.equal(true);
      zero2D[0][0].should.equal(0);
    });
  });
});
