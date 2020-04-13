import { changeCounter } from '../src/main.js';

describe('Change Counter', () => {

    test('should return 1 quarter from 0.25', () => {
        var changeCount = {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
        var testOne = changeCounter(0.25, changeCount).quarters
        expect(testOne).toEqual(1);
    });

    test('should return 2 quarters from 0.50', () => {
        var changeCount = {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
        var testTwo = changeCounter(0.50, changeCount).quarters
        expect(testTwo).toEqual(2);
    });
});