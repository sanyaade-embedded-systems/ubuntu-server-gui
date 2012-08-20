// Generated by CoffeeScript 1.3.3

require(['model/Session'], function(Session) {
  describe('defaults', function() {
    it('Active should be set to undefined upon new object creation', function() {
      var sess;
      sess = new Session({
        app: {}
      });
      assert.equal(void 0, sess.get('active'));
    });
  });
  return {
    name: 'sessionSpecModule'
  };
});
