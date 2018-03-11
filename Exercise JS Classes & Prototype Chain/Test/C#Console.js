let Console = require('../05. CsharpConsole').Console;
let mocha = require('mocha');
let expect = require('chai').expect;
let $ = require('jquery');

describe('',function () {
    it('should return string', function () {
        expect(Console.writeLine('test')).to.be.equal('test')
    });
    it('should return object', function () {
        expect(Console.writeLine({name: 'pesho'})).to.be.equal(JSON.stringify({name: 'pesho'}))
    });
    it('should return string', function () {
        expect(Console.writeLine('{0}, {1}, {2}', 1,2,3)).to.be.equal('1, 2, 3')
    });
    it('should return RangeError', function () {
        expect(() => {Console.writeLine('{0}', 1, 2)}).to.throw(RangeError)
    });
    it('should throw TypeError', function () {
        expect(() => {Console.writeLine([], 1, 2)}).to.throw(TypeError)
    });
    it('should throw RangeError', function () {
        expect(() => {Console.writeLine('{15}', 1, 2)}).to.throw(RangeError)
    });
});