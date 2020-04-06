function adjacentElementsProduct(inputArray) {

    let sum = inputArray[0] * inputArray[1];
      for( let i =1; i < inputArray.length -1 ; i++)
      {
     
        
        if ( inputArray[i] * inputArray[i+1] > sum){
              sum= inputArray[i] * inputArray[i+1];
        }
        
    }
     return sum;
     
  }
  
  adjacentElementsProduct(inputArray = [3, 6, -2, -5, 7, 3] );