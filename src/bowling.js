function Game() {
  this._rolls = Array.apply(null, Array(21)).map(function(num) { return 0; });
  this._current = 0;
  this._totalRolls = this._rolls.length - 1;
}

Game.prototype.roll = function(pins) {
  this._rolls[this._current++] = pins;
};

Game.prototype.score = function() {
  var score = 0;
  var rolls_to_add = this._extraRoll() ? this._totalRolls + 1 : this._totalRolls;
  for (var roll = 0; roll < rolls_to_add; roll++) {
    if (this._isStrike(roll) && !this._finalFrame()) {
      score += this._addStrikeBonus(roll);
      rolls_to_add--;
    }
    else if (this._isSpare(roll) && !this._finalFrame()) {
      score += this._addSpareBonus(roll);
      roll++;
    }
    else {
      score += this._rolls[roll];
    }
  }
  return score;
};

Game.prototype._isStrike = function(roll) {
  return this._rolls[roll] === 10;
};

Game.prototype._isSpare = function(roll) {
  return (this._rolls[roll] % 2 !== 0 || roll === 0) && (this._rolls[roll] + this._rolls[roll+1] === 10); 
};

Game.prototype._addStrikeBonus = function(roll) {
  return 10 + this._rolls[roll+1] + this._rolls[roll+2];
};

Game.prototype._addSpareBonus = function(roll) {
  return 10 + this._rolls[roll+2];
};

Game.prototype._finalFrame = function () {
  return this._current > this._totalRolls - 3;
};

Game.prototype._extraRoll = function () {
  return this._finalFrameTen() ? true : false;
};

Game.prototype._finalFrameTen = function() {
  if (this._isStrike(this._totalRolls - 2) || 
    this._isSpare(this._totalRolls - 2)) return true;
  return false;
}; 

