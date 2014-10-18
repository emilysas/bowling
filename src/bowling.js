
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
  for (var i = 0; i < rolls_to_add; i++) {
    if (this._isStrike(i) && !this._finalFrame()) {
      score += 10 + this._rolls[i+2] + this._rolls[i+1];
      rolls_to_add--;
    }
    else if (this._isSpare(i) && !this._finalFrame()) {
      score += 10 + this._rolls[i+2];
      i++;
    }
    else {
      score += this._rolls[i];
    }
  }
  return score;
};

Game.prototype._isStrike = function(roll) {
  if (this._rolls[roll] === 10)  return true;
  return false;
};

Game.prototype._isSpare = function(roll) {
  if ((this._rolls[roll] % 2 !== 0 || roll === 0) && 
    (this._rolls[roll] + this._rolls[roll+1] === 10)) return true;
  return false;
};

Game.prototype._finalFrame = function () {
  return this._current > this._totalRolls - 3;
}

Game.prototype._extraRoll = function () {
  return this._finalFrameTen() ? true : false;
};

Game.prototype._finalFrameTen = function() {
  if (this._isStrike(this._totalRolls - 2) || 
    this._isSpare(this._totalRolls - 2)) return true;
  return false;
}; 

multiRoll = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      this.roll(pins);
    }
};

