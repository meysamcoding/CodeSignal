function allLongestStrings(inputArray) {
    var newarr = [];
   
       if( inputArray.length == 1){
         return inputArray;
       }
       var longestWord = inputArray.sort(function(a, b) {
        return b.length - a.length;
       });
       var lengthOfLongestWord = longestWord[0].length;//returns length of longest word
   
   
       for(var i = 0; i < longestWord.length; i++){
        if(longestWord[i].length == lengthOfLongestWord){
          newarr.push(longestWord[i]);
        }
       }
   
       return newarr;
   }
   console.log(inputArray = ["aba", "aa", "ad", "vcd", "aba"]);