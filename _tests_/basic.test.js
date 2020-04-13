import { changeCounter } from '../src/main.js';

describe('Change Counter', () => {

    test('should return 1 quarter from 0.25', () => {
        var change = changeCounter(0.25).quarters;
        expect(change).toEqual(1);
    });
});