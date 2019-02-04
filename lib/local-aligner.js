const R = require('ramda');

const {zeros2D} = require('./zero');

class LocalAligner {
  constructor(arrayQ, arrayP, {gap, mismatch, match}) {
    this._q = arrayQ;
    this._p = arrayP;
    this._gapPen = gap;
    this._mismatchPen = mismatch;
    this._matchScore = match;

    this._matrixA = zeros2D(arrayQ.length + 1, arrayP.length + 1);
    this._matrixB = zeros2D(arrayQ.length + 1, arrayP.length + 1);

    this._finalQ = [];
    this._finalP = [];

    this._maxScore = 0;
    this._maxI = 0;
    this._maxJ = 0;
  }

  get finalQ() {
    return this._finalQ;
  }

  get finalP() {
    return this._finalP;
  }

  get maxScore() {
    return this._maxScore;
  }

  get matrixA() {
    return this._matrixA;
  }

  get matrixB() {
    return this._matrixB;
  }

  calcTables() {
    // Insert initial blank string 1
    this._q = R.insert(0, {}, this._q);
    // Insert initial blank string 2
    this._p = R.insert(0, {}, this._p);

    for (let i = 1; i < this._p.length; i++) {
      for (let j = 1; j < this._q.length; j++) {
        if (this._p[i] === this._q[j]) {
          this._matrixA[i][j] = this._matrixA[i - 1][j - 1] + this._matchScore;
          this._matrixB[i][j] = 3;

          if (this._matrixA[i][j] > this._maxScore) {
            this._maxScore = this._matrixA[i][j];
            this._maxI = i;
            this._maxJ = j;
          }
        } else {
          this._matrixA[i][j] = this.findMaxScore(i, j);
        }
      }
    }
  }

  findMaxScore(i, j) {
    // North score
    const qDelet = this._matrixA[i - 1][j] + this._gapPen;
    // West score
    const pDelet = this._matrixA[i][j - 1] + this._gapPen;
    // Diagonal Score
    const mismatch = this._matrixA[i - 1][j - 1] + this._mismatchPen;

    const maxScore = Math.max(qDelet, pDelet, mismatch);

    // Set B table
    if (qDelet === maxScore) {
      this._matrixB[i][j] = 2; // 2 == "up" for traversing solution
    } else if (pDelet === maxScore) {
      this._matrixB[i][j] = 1; // 1 == "left" for traversing solution
    } else if (mismatch === maxScore) {
      this._matrixB[i][j] = 3; // 3 == "diagonal" for traversing solution
    }

    return maxScore;
  }

  calcAlignemnt(i, j) {
    if (i === undefined && j === undefined) {
      i = this._maxI;
      j = this._maxJ;
    }

    if (i === 0 || j === 0) {
      return;
    }

    // Optimal solution "DIAGONAL"
    if (this._matrixB[i][j] === 3) {
      this.calcAlignemnt(i - 1, j - 1);
      this._finalQ.push(this._q[j]);
      this._finalP.push(this._p[i]);
    } else if (this._matrixB[i][j] === 2) {
      // Optimal solution "UP"
      this.calcAlignemnt(i - 1, j);
      this._finalQ.push({});
      this._finalP.push(this._p[i]);
    } else {
      // Optimal solution "LEFT"
      this.calcAlignemnt(i, j - 1);
      this._finalP.push({});
      this._finalQ.push(this._p[j]);
    }
  }
}

module.exports = LocalAligner;
