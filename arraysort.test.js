const arraySort = require('./arraysort');

test('It does not accept numbers as input', () => {
    expect(arraySort(5)).toBe('invalid input');
});

test('It does not accept strings as input', () => {
    expect(arraySort('string')).toBe('invalid input');
});

test('It sorts a given array', () => {
    expect(
        arraySort([4, 9, 2, 3, 5, 1, 'd', 'a', 'c', 'f'])
    ).toEqual(
        { evens: [2, 4], odds: [1, 3, 5, 9], chars: ['a', 'c', 'd', 'f'] }
    );
});

