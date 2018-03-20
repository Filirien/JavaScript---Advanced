let mocha = require('mocha');
let expect = require('chai').expect;
let Sumator = require('../sumatorClass');
let $ = require('jquery');

describe("Test sumator", () => {
    let mySumator;
    beforeEach(function () {
        mySumator = new Sumator();
    });

    describe('Initial Tests', function () {
        it('should be initialized add', function () {
            expect(Object.getPrototypeOf(mySumator).hasOwnProperty('add')).to.be.true;
        });
        it('should be initialized sumNums', function () {
            expect(Object.getPrototypeOf(mySumator).hasOwnProperty('sumNums')).to.be.true;
        });
        it('should be initialized removeByFilter', function () {
            expect(Object.getPrototypeOf(mySumator).hasOwnProperty('removeByFilter')).to.be.true;
        });
        it('should be initialized toString', function () {
            expect(Object.getPrototypeOf(mySumator).hasOwnProperty('toString')).to.be.true;
        });
    });
    describe('Add Tests', function () {
        it('should be add numbers', function () {
            mySumator.add(5);
            mySumator.add(4);
            mySumator.add(3);
            expect(mySumator.toString()).to.be.equal('5, 4, 3');
        });
        it('should add', function () {
            mySumator.add([]);
            mySumator.add({});
            expect(mySumator.toString()).to.be.equal(', [object Object]');
        });
    });
    describe('sumNums Tests', function () {
        it('should sum numbers', function () {
            mySumator.add(5);
            mySumator.add(4);
            mySumator.add(3);
            let sum = mySumator.sumNums();
            expect(sum).to.be.equal(12);
        });
        it('should skip none numbers', function () {
            mySumator.add(5);
            mySumator.add({});
            mySumator.add(3);
            let sum = mySumator.sumNums();
            expect(sum).to.be.equal(8);
        });
        it('should return 0 if no numbers in array', function () {
            mySumator.add([]);
            mySumator.add({});
            mySumator.add('fdfa');
            let sum = mySumator.sumNums();
            expect(sum).to.be.equal(0);
        });
    });
    describe('sumNums Tests', function () {
        it('should sum numbers', function () {
            mySumator.add(5);
            mySumator.add(4);
            mySumator.add(3);
            let sum = mySumator.sumNums();
            expect(sum).to.be.equal(12);
        });
        it('should sum numbers only', function () {
            mySumator.add(5);
            mySumator.add({});
            mySumator.add(3);
            let sum = mySumator.sumNums();
            expect(sum).to.be.equal(8);
        });
        it('should return 0 if no numbers', function () {
            mySumator.add([]);
            mySumator.add({});
            mySumator.add('fdfa');
            let sum = mySumator.sumNums();
            expect(sum).to.be.equal(0);
        });
    });
    describe('removeByFilter Tests', function () {
        it('should remove odd numbers', function () {
            mySumator.add(5);
            mySumator.add(4);
            mySumator.add(3);
            mySumator.removeByFilter(n => n % 2 === 1);
            expect(mySumator.toString()).to.be.equal('4');
        });
        it('should remove strings startWith K', function () {
            mySumator.add('Krasi');
            mySumator.add('Kiro');
            mySumator.add('Mimi');
            mySumator.removeByFilter(n => n.startsWith('K'));
            expect(mySumator.toString()).to.be.equal('Mimi');
        });
    });
    describe('toString Tests', function () {
        it('should return string', function () {
            mySumator.add(5);
            mySumator.add(4);
            mySumator.add(3);
            expect(mySumator.toString()).to.be.equal('5, 4, 3');
        });
        it('should sum numbers only', function () {
            expect(mySumator.toString()).to.be.equal('(empty)');
        });
    });
});