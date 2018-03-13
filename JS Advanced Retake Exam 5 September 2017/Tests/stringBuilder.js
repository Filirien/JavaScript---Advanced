let StringBuilder = require('../stringBuilder');
let mocha = require('mocha');
let expect = require('chai').expect;
let $ = require('jquery');

describe("Test stringBuilder", () => {
    let builder;
    beforeEach(function () {
        builder = new StringBuilder('test');
    });
    it('should be initialized all methods', function () {
        expect(Object.getPrototypeOf(builder).hasOwnProperty('append')).to.be.true;
        expect(Object.getPrototypeOf(builder).hasOwnProperty('prepend')).to.be.true;
        expect(Object.getPrototypeOf(builder).hasOwnProperty('insertAt')).to.be.true;
        expect(Object.getPrototypeOf(builder).hasOwnProperty('remove')).to.be.true;
        expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.be.true;
    });
    describe("instantiated with string", function () {
        it("input must be string", () => {
            expect(builder.toString()).to.be.equal('test');
        });
        it("input with empty input", () => {
            let str = new StringBuilder();
            expect(str.toString()).to.be.equal('');
        });
        it('should throw error', function () {
            expect(() => {new StringBuilder(5)}).to.throw(TypeError);
        });
    });
    describe("append func", function () {
        it("should append string", () => {
            builder.append('te')
            expect(builder._stringArray.length).to.be.equal(6)
            expect(builder.toString()).to.be.equal('testte')
        });
        it("should throw Error", () => {

            expect(() => {builder.append(5)}).to.throw(TypeError)
        });
    });
    describe("prepend func", function () {
        it("should append string", () => {
            builder.prepend('te')
            expect(builder._stringArray.length).to.be.equal(6)
            expect(builder.toString()).to.be.equal('tetest')
        });
        it("should throw Error", () => {

            expect(() => {builder.prepend([])}).to.throw(TypeError)
        });
    });
    describe("insertAt func", function () {
        it("should insertAt string", () => {
            builder.insertAt('te', 2)
            expect(builder._stringArray.length).to.be.equal(6)
            expect(builder.toString()).to.be.equal('tetest')
        });
        it("should throw Error", () => {

            expect(() => {builder.insertAt({},5)}).to.throw(TypeError)
        });
    });
    describe("remove func", function () {
        it("should insertAt string", () => {
            builder.remove(2, 1)
            expect(builder._stringArray.length).to.be.equal(3)
            expect(builder.toString()).to.be.equal('tet')
        });
    });
});
