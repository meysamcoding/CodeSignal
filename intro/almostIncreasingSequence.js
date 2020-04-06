almostIncreasingSequence = sequence => {
    let str = 0;
    let maxnum = Math.pow(-10, 5);
    let secondMax = Math.pow(-10, 5);

    sequence.map(elem => {
        if (elem > maxnum) {
            secondMax = maxnum;
            maxnum = elem;
        }
        else if (elem > secondMax) {
            maxnum = elem;
            str++;
        } else str++;
    });
    return str <= 1;
}