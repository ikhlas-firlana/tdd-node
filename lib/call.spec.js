'use strict'

const expect = require('chai').expect;
const c = require('./call.js');

describe('Func call', () => {
  describe('#call()', () => {
    it('should export a string', async () => {
        const temp = await c.call();
        console.log(temp);
        expect(temp).to.be.a('string');
    })
  })
})