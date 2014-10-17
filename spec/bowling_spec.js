describe('Bowling Game', function() {

  multiRoll = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      this.roll(pins);
    }
  };

  bowlStrike = function() { 
    this.roll(10)
  };

  beforeEach(function() {
    game = new Game();
  });

  describe('Gutter for entire game', function() {
   
    it('should be score 0 if no pins hit on all frames', function () {
      multiRoll.call(game, 0, 20);
      expect(game.score()).toEqual(0);
    });
  });

  describe('Two pins hit on every frame', function () {

    it('should be score 20', function() {
      multiRoll.call(game, 1, 20);
      expect(game.score()).toEqual(20)
    });
  });

  describe('Bowling a strike', function() {

    it('should score 26 when strike is followed by 2 rolls of 4', function() {
      bowlStrike.call(game);
      multiRoll.call(game, 4, 2);
      multiRoll.call(game, 0, 16);
      expect(game.score()).toEqual(26);
    });
  });

});



