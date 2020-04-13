import { changeCounter } from '../src/main.js';

describe('Change Counter', () => {

    test('should return 1 quarter from 0.25', () => {
        var testOne = changeCounter(0.25).quarters
        expect(testOne).toEqual(1);
    });

    test('should return 2 quarters from 0.50', () => {
        var testTwo = changeCounter(0.50).quarters
        expect(testTwo).toEqual(2);
    });
});