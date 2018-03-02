function sorting(arr,command) {
    let ascendingComparator = function (a,b) {
        return a - b;
    };

    let descendingComparator = function (a,b) {
        return b - a;
    };

    let sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };
    return arr.sort(sortingStrategies[command]);
}

console.log(sorting([4, 2, 6, 3], 'asc'));