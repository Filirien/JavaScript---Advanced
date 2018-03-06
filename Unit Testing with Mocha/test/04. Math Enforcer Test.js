let mocha = require('mocha');
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let mathEnforcer = require('../04. Math Enforcer');

describe("Test mathEnforcer", function() {
    describe("General tests", function() {
        it("should be an object", function() {
            expect(Object.prototype.toString.call(mathEnforcer)).to.equal('[object Object]');
        });
    });

    describe("should have property addFive", function(){
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.hasOwnProperty('addFive')).to.be.true;
        });
        it('should be a function', function () {
            expect(typeof mathEnforcer.addFive).to.be.equal('function');
        });
        it('should return undefined if the parameter is not a number', function () {
            expect(mathEnforcer.addFive('string')).to.be.equal(undefined);
        });
        it('should return 10 if parameter is 5', function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it('should return -2 if parameter is -7', function () {
            expect(mathEnforcer.addFive(-7)).to.be.equal(-2);
        });
        it('should return 8.14 if parameter is 3.14', function () {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
        it('should return 1.86 if parameter is -3.14', function () {
            expect(mathEnforcer.addFive(-3.14)).to.be.closeTo(1.86, 0.01);
        });
    });

    describe("should have property subtractTen", function(){
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.hasOwnProperty('subtractTen')).to.be.true;
        });
        it('should be a function', function () {
            expect(typeof mathEnforcer.subtractTen).to.be.equal('function');
        });
        it('should return undefined if the parameter is not a number', function () {
            expect(mathEnforcer.subtractTen('string')).to.be.equal(undefined);
        });
        it('should return 10 if parameter is 20', function () {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        });
        it('should return -27 if parameter is -17', function () {
            expect(mathEnforcer.subtractTen(-17)).to.be.equal(-27);
        });
        it('should return 3.14 if parameter is 13.14', function () {
            expect(mathEnforcer.subtractTen(13.14)).to.be.closeTo(3.14, 0.01);
        });
        it('should return -23.14 if parameter is -13.14', function () {
            expect(mathEnforcer.subtractTen(-13.14)).to.be.closeTo(-23.14, 0.01);
        });
    });

    describe("should have property sum", function(){
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.hasOwnProperty('sum')).to.be.true;
        });
        it('should be a function', function () {
            expect(typeof mathEnforcer.sum).to.be.equal('function');
        });
        it('should return undefined if the parameters are not a number', function () {
            expect(mathEnforcer.sum('string',10)).to.be.equal(undefined);
        });
        it('should return undefined if the parameters are not a number', function () {
            expect(mathEnforcer.sum([1, 1],10)).to.be.equal(undefined);
        });
        it("should return undefined if both parameters are not numbers", () => {
            expect(mathEnforcer.sum([1.2], '343')).to.equal(undefined);
        });
        it('should return undefined if the parameters are not a number', function () {
            expect(mathEnforcer.sum({'1': 1},10)).to.be.equal(undefined);
        });
        it('should return 20 if parameters are 5 and 15', function () {
            expect(mathEnforcer.sum(5,15)).to.be.equal(20);
        });
        it('should return 21 if parameters are 5.1 and 15.1', function () {
            expect(mathEnforcer.sum(5.1,15.1)).to.be.closeTo(20.2,0.01);
        });
        it("Should return 1.53 if parameters are 3.14 and -1.61", () => {
            expect(mathEnforcer.sum(3.14, -1.61)).to.be.closeTo(1.53, 0.01);
        });
        it('should return -27 if parameters are -17 and -10', function () {
            expect(mathEnforcer.sum(-17,-10)).to.be.equal(-27);
        });
        it('should return 23.14 if parameter is 13.14 and 10', function () {
            expect(mathEnforcer.sum(13.14,10)).to.be.closeTo(23.14, 0.01);
        });
        it('should return -3.14 if parameter is -13.14 and 10', function () {
            expect(mathEnforcer.sum(-13.14, 10)).to.be.closeTo(-3.14, 0.01);
        });
        it('should return 3.14 if parameter is 13.14 and -10', function () {
            expect(mathEnforcer.sum(13, -10.5)).to.be.closeTo(2.5, 0.01);
        });
        it("Should return -4.75 if parameters are -3.14 and -1.61", () => {
            expect(mathEnforcer.sum(-3.14, -1.61)).to.be.closeTo(-4.75, 0.01);
        });
    });
});