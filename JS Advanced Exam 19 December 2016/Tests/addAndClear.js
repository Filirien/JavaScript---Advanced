let mocha = require('mocha');
let expect = require('chai').expect;
let makeList = require('../addLeft-addRight-clear');
let $ = require('jquery');

describe("Test list", function() {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });
    describe("addLeft func",function () {
        it("should adds item at the beginning of the list", function() {
            myList.addLeft(5);
            myList.addLeft(3);
            myList.addLeft(2);
            expect(myList.toString()).to.be.equal('2, 3, 5')
        });
        it("should adds item at the beginning of the list", function() {
            myList.addLeft({});
            myList.addLeft([]);
            myList.addLeft('purvo');
            expect(myList.toString()).to.be.equal('purvo, , [object Object]')
        });
    });
    describe("addRight func",function () {
        it("should adds item at the end of the list", function() {
            myList.addRight(5);
            myList.addRight(3);
            myList.addRight(2);
            expect(myList.toString()).to.be.equal('5, 3, 2')
        });
        it("should adds item at the end of the list", function() {
            myList.addRight({});
            myList.addRight([]);
            myList.addRight('purvo');
            expect(myList.toString()).to.be.equal('[object Object], , purvo')
        });
    });
    describe("clear func",function () {
        it("should clear the list", function() {
            myList.addRight(5);
            myList.addRight(3);
            myList.addRight(2);
            myList.clear();
            expect(myList.toString()).to.be.equal('')
        });
        it("should clear the list", function() {
            myList.addRight({});
            myList.addRight([]);
            myList.addRight('purvo');
            myList.clear();
            expect(myList.toString()).to.be.equal('')
        });
    });
});
