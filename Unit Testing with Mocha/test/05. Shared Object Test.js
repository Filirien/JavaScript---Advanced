let mocha = require('mocha');
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let evenOrOdd = require('../05. Shared Object');


describe('Shared object Unit Tests', function () {
    let message = '';
    describe('Initial values are null', function () {
        it('test name initial value', function () {
            expect(sharedObject.name).to.be.null
        });
        it('test income initial value', function () {
            expect(sharedObject.income).to.be.null
        })
    });
    describe('shared object change name works', function () {
        message = 'shared object change name not worked as expected'
        it('change name with empty string(should be null)', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null
        });
        it('change name with non empty string(should update)', function () {

            sharedObject.changeName('string');
            expect($('#name').val()).to.be.equal('string', message)
        });
    });
    describe('shared object change income works', function () {
        message = 'shared object change income not worked as expected';
        it('change income with non-integer(should not update)', function () {
            let oldIncome = sharedObject.income;
            sharedObject.changeIncome(8.26);
            expect(sharedObject.income).to.be.equal(oldIncome)
        });
        it('change income with 0(should update)', function () {
            let oldIncome = sharedObject.income;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(oldIncome)
        });
        it('change income with negative value(should not update)', function () {
            let oldIncome = sharedObject.income;
            sharedObject.changeIncome(-98);
            expect(sharedObject.income).to.be.equal(oldIncome)
        });
        it('should return "50" on testObject.income after {1,-5,50})', () => {
            sharedObject.changeIncome(1);
            sharedObject.changeIncome(-5);
            sharedObject.changeIncome(50);
            expect(sharedObject.income).to.equal(50);
            expect($('#income').val()).to.equal("50")
        });
        it('change income with integer (should work)', function () {
            let newIncome = $('#income');
            newIncome.val(200);
            sharedObject.changeIncome();
            expect(Number(newIncome.val())).to.be.equal(200, message)
        });
    });
    describe('shared object  update name works', function () {
        message = 'shared object  update name not worked as expected'
        it('update name with empty string(should not update)', function () {
            $('#name').val('strings');
            sharedObject.updateName();
            $('#name').val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('strings', message)
        });
        it('update name with non empty string(should  update)', function () {
            $('#name').val('great');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('great', message)
        });
    });
    describe('shared object  update income works', function () {
        message = 'shared object  update income not worked as expected';
        it('update income with NaN(should not update)', function () {
            sharedObject.income = 13;
            $('#income').val(NaN);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(13, message)
        });
        it('update income with non-integer value(should not update)', function () {
            sharedObject.income = 13;
            $('#income').val('-24.34');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(13, message)
        });
        it('update income with 0(should not update)', function () {
            sharedObject.income = 13;
            $('#income').val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(13, message)
        });
        it('update income with negative number(should not update)', function () {
            sharedObject.income = 13;
            $('#income').val('-35');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(13, message)
        });
        it('update income with integer(should  update)', function () {
            sharedObject.income = 13;
            $('#income').val('78');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(78, message)
        });
    });
});