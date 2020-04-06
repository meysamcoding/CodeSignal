function makeArrayConsecutive2(statues) {
        
    let n = statues.length;
    let max = Math.max.apply(null, statues);
    let min = Math.min.apply(null, statues);
    return max - min - n + 1;
    }
    console.log("makeArrayConsecutive2(statues) = " + makeArrayConsecutive2(statues = [6, 2, 3, 8]) )
     