const uniqueMultiRandomIndexFromArray = (
    array,
    number,
    previousUniqueIndex = []
) => {
    let uniqueIndex = [];
    while (uniqueIndex.length < number) {
        const randomIndex = Math.floor(Math.random() * array.length);
        if (previousUniqueIndex.indexOf(randomIndex) === -1) {
            uniqueIndex.push(randomIndex);
        }
    }
    return uniqueIndex;
};

module.exports = {
    uniqueMultiRandomIndexFromArray,
};