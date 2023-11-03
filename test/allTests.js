const { assert } = require('chai');
const main = require('../client/index');

describe('allTests', () => {
    it('Return true for person at start of the list', () => {
        return main("Sidney Kertzmann").then(result => {
            assert.equal(result, "You got a toy robot!");
        })
    })
    it('Return true for person in the list', () => {
        return main("Katrina Hansen").then(result => {
            assert.equal(result, "You got a toy robot!");
        })
    })
    it('Return true for person at end of the list', () => {
        return main("Edmond Carroll PhD").then(result => {
            assert.equal(result, "You got a toy robot!");
        })
    })
    it('Return false for someone not on the list', () => {
        return main("Joe Bloggs").then(result => {
            assert.equal(result, "You are not on the list :(");
        })
    })
})