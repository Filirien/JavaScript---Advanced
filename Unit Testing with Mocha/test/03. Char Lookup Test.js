let mocha = require('mocha');
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let charLookUp = require('../03. Char Lookup');

describe("Test charLookUp", function() {
    describe("General tests", function() {
        it("should be a function", () => {
            expect(typeof charLookUp).to.equal('function');
        });
        it("should return string with correct values", function() {
            expect(typeof charLookUp('chai', 1)).to.equal('string');
        });

        it("should return string with length of 1 with correct values", function() {
            expect(charLookUp('chai', 1).length).to.equal(1);
        });
    });

    describe("Values tests", () => {
        it('should return undefined when called with a number parameter', function () {
            expect(charLookUp(3, 3)).to.equal(undefined);
        });
        it('should return undefined when called with a array parameter', function () {
            expect(charLookUp(['unitTesting!'], 3)).to.equal(undefined);
        });
        it('should return undefined when called with a object parameter', function () {
            expect(charLookUp('string', {name: 3})).to.equal(undefined);
        });
        it('should return undefined when called with a string parameter', function () {
            expect(charLookUp('string', 'sad')).to.equal(undefined);
        });
        it('should return undefined when called with not a int parameter', function () {
            expect(charLookUp('string', 3.14)).to.equal(undefined);
        });
        it('should return undefined when called with a same length as parameter', function () {
            expect(charLookUp('string', 6)).to.equal('Incorrect index');
        });
        it('should return incorrect index when called with index < 0', function () {
            expect(charLookUp('string', -3)).to.equal('Incorrect index');
        });
        it('should return incorrect index when called with index > string.length', function () {
            expect(charLookUp('string', 23)).to.equal('Incorrect index');
        });
        it('should correct index when called with correctly', function () {
            expect(charLookUp('string', 3)).to.equal('i');
        });
        it('should correct index when called with correctly', function () {
            expect(charLookUp('string', 0)).to.equal('s');
        });
        it('should correct index when called with correctly', function () {
            expect(charLookUp('string', 5)).to.equal('g');
        });
    });
});