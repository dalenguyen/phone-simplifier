'use strict';
const expect = require('chai').expect;
const phone = require('../dist/index.js');


describe('Phone format original (North America)', () => {
    it('Return North America phone format', () => {
        var result = phone.simplify('+1 (234) 567-8910');
        expect(result).to.equal('+1 (234) 567-8910');
    })
})

describe('Phone format (North America)', () => {
    it('Return North America phone format', () => {
        var result = phone.simplify('+12345678910');
        expect(result).to.equal('+1 (234) 567-8910');
    })
})

describe('Phone format (North America) without Country Code', () => {
    it('Return North America phone format', () => {
        var result = phone.simplify('2345678910');
        expect(result).to.equal('(234) 567-8910');
    })
})

describe('Phone format with special charcater (North America)', () => {
    it('Return North America phone format', () => {
        var result = phone.simplify('234-567-8910');
        expect(result).to.equal('(234) 567-8910');
    })
})

describe('Get phone number only', () => {
    it('Return phone number only', () => {
        var result = phone.clean('234-567-8910');
        expect(result).to.equal('2345678910');
    })
})

describe('Get phone number only with country code', () => {
    it('Return phone number only', () => {
        var result = phone.clean('+1 (234) 567-8910');
        expect(result).to.equal('+12345678910');
    })
})