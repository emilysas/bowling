function Game () {
  this._score = 0;
}

Game.prototype.roll = function (pins) {
  return this._score += pins;
}

Game.prototype.score = function () {
  return this._score;
};
