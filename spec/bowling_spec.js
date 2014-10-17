describe('Bowling Game', function () {

  describe('Gutter for entire game', function () {

    it('should be score 0 if no pins hit on all frames', function () {
      var game = new Game();
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toEqual(0);
    });
  });

  describe('Two pins hit on every frame', function () {

    it('should be score 20', function () {
      var game = new Game();
      for(var i = 0; i < 20; i++) {
        game.roll(1);
      }
    });

  });
});