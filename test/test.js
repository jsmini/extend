var expect = require('expect.js');

var assign = require('../src/index.js').assign;
var extend = require('../src/index.js').extend;
var extendDeep = require('../src/index.js').extendDeep;

describe('单元测试', function () {
  this.timeout(1000);

  var a = { a: 1 };
  var b = { a: 2, b1: 1, b2: { c1: 1 }, b3: [1] };

  describe('assign', function () {
    it('常规', function () {
      var h = assign({}, a, b);

      expect(h.a).to.equal(b.a);
      expect(h.b1).to.equal(b.b1);
      expect(h.b2).to.equal(b.b2);
    });
  });

  describe('extend', function () {
    it('常规', function () {
      // 缺省参数
      var h = extend({}, a, b);

      expect(h.a).to.equal(b.a);
      expect(h.b1).to.equal(b.b1);
      expect(h.b2).to.equal(b.b2);
    });
  });

  describe('extendDeep', function () {
    it('常规', function () {
      var h = extendDeep({}, a, b);

      expect(h.a).to.equal(b.a);
      expect(h.b1).to.equal(b.b1);

      expect(h.b2).not.to.equal(b.b2);
      expect(h.b2).to.eql(b.b2);
    });
  });
});
