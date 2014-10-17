describe('Bowling Game', function() {

  multiRoll = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      this.roll(pins);
    }
  };

  bowlStrike = function() { 
    this.roll(10)
  };

  bowlSpare = function() {
    this.roll(5)
    this.roll(5)
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

    it('should score a strike by itself as 10', function () {
      bowlStrike.call(game);
      multiRoll.call(game, 0, 18)
      expect(game.score()).toEqual(10);
    });

    it('should add bonus score of 10 plus next 2 rolls', function() {
      bowlStrike.call(game);
      multiRoll.call(game, 4, 2);
      multiRoll.call(game, 0, 16);
      expect(game.score()).toEqual(26);
    });
  });

  describe('Bowling a spare', function() {
    
    it('should score a spare by itself as 10', function() {
      bowlSpare.call(game);
      multiRoll.call(game, 0, 18);
      expect(game.score()).toEqual(10);
    });

    it('should add bonus score of 10 plus next roll', function() {
      bowlSpare.call(game)
      game.roll(5);
      multiRoll.call(game, 0, 17);
      expect(game.score()).toEqual(20);
    });


   
  });

});



