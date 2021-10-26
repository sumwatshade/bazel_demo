import assert from 'assert';
import * as strings from '../src/strings.en.js';

describe('strings', function() {
    it('should print hello webapp', function() {
      assert.equal(strings.hello(), 'Hello Webapp');
    });
});