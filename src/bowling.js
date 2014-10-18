
function Game() {
  this._rolls = Array.apply(null, Array(21)).map(function(num) { return 0; });
  this._current = 0;
  this._totalRolls = this._rolls.length;
}

Game.prototype.roll = function(pins) {
  this._rolls[this._current++] = pins;
};

Game.prototype.score = function() {
  var score = 0;
  this._totalRolls = this._extraRoll ? 21 : 20;
  for (var i = 0; i < this._totalRolls; i++) {
    if (this._isStrike(i)) {
      score += 10 + this._rolls[i+2] + this._rolls[i+1];
      this._totalRolls -= 1;
    }
    else if (this._isSpare(i)) {
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
  if ((this._rolls[roll] === 10) && !this._finalFrame(roll)) return true;
  return false;
};

Game.prototype._isSpare = function(roll) {
  if (this._finalFrame(roll)) return false;
  if ((this._rolls[roll] % 2 !== 0 || roll === 0) && 
    (this._rolls[roll] + this._rolls[roll+1] === 10)) return true;
  return false;
};

Game.prototype._finalFrame = function (roll) {
  return roll >= this._totalRolls - 3;
}

Game.prototype._extraRoll = function () {
  return this._finalFrameTen ? true : false;
};

Game.prototype._finalFrameTen = function() {
  if (this._isStrike(-3) || this._isSpare(-3)) return true;
  return false;
}; 

multiRoll = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      this.roll(pins);
    }
};

