function isLucky(n) {
    const arr = String(n).split('');
   
       const firstHalf = sum(arr.slice(0, arr.length / 2));
       const secondHalf = sum(arr.slice(arr.length / 2));
   
       return firstHalf === secondHalf;
   }
   
   function sum(arr) {
     return arr.reduce((prev, current) => {
       const _current = parseInt(current, 0);
   
       return prev += _current
     }, 0)
   }
   console.log(isLucky("1230"));