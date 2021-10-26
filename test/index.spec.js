const assert = require('assert');
const strings = require('../compile_test/strings.en.js')
describe('strings', function() {
    it('should print hello webapp', function() {
      assert.equal(strings.hello(), 'Hello Webapp');
    });
});