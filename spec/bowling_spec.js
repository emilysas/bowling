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
      expect(game.score()).toEqual(20);
    });

  });

  describe('Final frame can have bonus roll', function() {

    it('should give extra roll if spare is bowled', function() {
      multiRoll.call(game, 4, 18);
      bowlSpare.call(game);
      expect(game.score()).toEqual(82);
      game.roll(5);
      expect(game.score()).toEqual(87);
    });

    it("should allow 2 extra rolls if there is a strike", function() {
      multiRoll.call(game, 4, 18);
      bowlStrike.call(game);
      game.roll(4);
      game.roll(4);
      expect(game.score()).toEqual(90);
    });
  });

    describe('Bowling a perfect game', function() {

      it('should have a score of 300 with 12 strikes', function() {
        multiRoll.call(game, 10, 12);
        expect(game.score()).toEqual(300);
      });
    });


});



