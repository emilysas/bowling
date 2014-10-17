describe('Bowling Game', function () {

  Number.prototype.times = function(args) { 
    var args = Array.prototype.slice.call(arguments);
    for(var i = 0; i < this; i++) {
      args[0].apply(null, args.slice(1))
    }
  };

  beforeEach(function() {
    game = new Game();
  });

  describe('Gutter for entire game', function () {
   
    it('should be score 0 if no pins hit on all frames', function () {
      (20).times(game.roll, 0);
      expect(game.score()).toEqual(0);
    });
  });

  describe('Two pins hit on every frame', function () {

    it('should be score 20', function () {
      (20).times(game.roll, 1);
    });

  });
});



