/*sorting
function that takes the array and returns
 an object with property names evens, odds, and chars.*/
function arraySort(anArray) {
    var even = [];
    var odd = [];
    var char = [];
    if (!Array.isArray(anArray)) {
        return 'invalid input';
    }
    for (i = 0; i < anArray.length; i++) {
        if (Number.isInteger(anArray[i])) {
            if (anArray[i] % 2 === 0) {
                even.push(anArray[i])
            }
            if (anArray[i] % 2 === 1) {
                odd.push(anArray[i])
            }
        }
        if (!Number.isInteger(anArray[i])) {

            if (anArray[i].length > 1) {
                return 'invalid input';
            }
            char.push(anArray[i])
        }
    }
    return { evens: even.sort(), odds: odd.sort(), chars: char.sort() };
};
module.exports = arraySort; {
    console.log(arraySort([2, 0, 40, 6, 9, 5, 5, 13, 7, 'z', 'a']));
    console.log(arraySort([2, 0, 6, 5, 1, 'sharon']));
    console.log(arraySort('sharon'));
}