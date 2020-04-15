function sortByHeight(a) {

    const nums = a.filter(el => el !== -1).sort((a, b) => a - b);
      const result = [];
    
      for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
          result.push(-1);
        } else {
          result.push(nums[0]);
          nums.splice(0, 1);
        }
      }
    
      return result;
    }
    console.log(a = [-1, 150, 190, 170, -1, -1, 160, 180]);