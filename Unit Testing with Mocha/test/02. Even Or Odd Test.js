let mocha = require('mocha');
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let isOddOrEven = require('../02. Even Or Odd');

describe("Test isOddOrEven", () => {
    describe("General tests", () => {
        it("should be a function", () => {
            expect(typeof isOddOrEven).to.equal('function');
        });

        it("should return string", () => {
            expect(typeof isOddOrEven('21')).to.equal('string');
        });
    });

    describe("Values tests", () => {
        it('should return undefined when called with a number as parameter', function () {
            expect(isOddOrEven(13)).to.equal(undefined);
        });
        it('should return undefined when called with a obj as parameter', function () {
            expect(isOddOrEven({})).to.equal(undefined);
        });
        it('should return undefined when called with a array as parameter', function () {
            expect(isOddOrEven([])).to.equal(undefined);
        });
        it('should return undefined when called with a array as parameter', function () {
            expect(isOddOrEven("pesho")).to.equal('odd');
        });
        it('should return undefined when called with a array as parameter', function () {
            expect(isOddOrEven("niki")).to.equal('even');
        });
    });
});