const { isArraySame } = require("is-array-same");

// helper function
const isArrayUnique = (array, check) => {
    return array.some((array) => {
        return isArraySame(array, check);
    });
};

//  main function
const uniqueMultiRandomIndexFromArray = (
    array,
    number,
    previousUniqueIndex = []
) => {
    let uniqueIndex = [];
    while (uniqueIndex.length < number) {
        const randomIndex = Math.floor(Math.random() * array.length);
        if (uniqueIndex.length < 1) {
            uniqueIndex.push(randomIndex);
        } else {
            let tmp = [...uniqueIndex];
            tmp.push(randomIndex);

            if (!isArrayUnique(previousUniqueIndex, tmp) &&
                !isArrayUnique(previousUniqueIndex, tmp.reverse())
            ) {
                uniqueIndex.push(randomIndex);
            }
        }
    }
    return uniqueIndex;
};

// Function to test above function
const test = () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const number = 2;
    const previousUniqueIndex = [];
    // loop
    for (let i = 0; i < 10; i++) {
        const uniqueIndex = uniqueMultiRandomIndexFromArray(
            array,
            number,
            previousUniqueIndex
        );
        previousUniqueIndex.push(uniqueIndex);
    }
    return previousUniqueIndex;
};

module.exports = {
    uniqueMultiRandomIndexFromArray,
};