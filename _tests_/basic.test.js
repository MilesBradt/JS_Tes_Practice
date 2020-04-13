import { addOne } from '../src/main.js';

describe('Add One', () => {

    test('should return nmber entered plus 1', () => {
        var add = addOne(2);
        expect(add).toEqual(3);
    });
});