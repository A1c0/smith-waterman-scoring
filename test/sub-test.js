const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

const sub = require('../lib/sub');

describe('sub.js', () => {
  describe('sub between 2 numbers', () => {
    const a = 12.2;
    const b = 11.3;
    const c = 12.2;

    it('should be equal to 1 when there are two different number', () => {
      sub(a, b).should.equal(1);
    });

    it('should be equal to 0 when there are two same number', () => {
      sub(a, c).should.equal(0);
    });

    it('should be equal to 1 when there are one number and one insert', () => {
      sub(a, '-').should.equal(1);
      sub('-', a).should.equal(1);
    });
  });

  describe('sub between 2 objects', () => {
    const a = {name: 'bob', age: 12};
    const b = {name: 'marc', age: 16};
    const c = {name: 'bob', age: 12};

    it('should be equal to 1 when there are two different objects', () => {
      sub(a, b).should.equal(1);
    });

    it('should be equal to 0 when there are two same object', () => {
      sub(a, c).should.equal(0);
    });

    it('should be equal to 1 when there are one object and one insert', () => {
      sub(a, '-').should.equal(1);
      sub('-', a).should.equal(1);
    });
  });

  describe('sub between 2 string', () => {
    const a = 'hello';
    const b = 'hi';
    const c = 'hello';

    it('should be equal to 1 when there are two different strings', () => {
      sub(a, b).should.equal(1);
    });

    it('should be equal to 0 when there are two same string', () => {
      sub(a, c).should.equal(0);
    });

    it('should be equal to 1 when there are one string and one insert', () => {
      sub(a, '-').should.equal(1);
      sub('-', a).should.equal(1);
    });
  });
});
