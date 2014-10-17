function Game() {
  this._rolls = [];
  this._current = 0;
}

Game.prototype.roll = function (pins) {
  return this._rolls[this._current++] = pins;
}

Game.prototype.score = function () {
  return this._rolls.reduce(function (a, b) {
    return a + b; })
};