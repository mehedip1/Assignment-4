// problem1:

function mindGame(number){
    let positiveNumber = number * 3;
    let sum = positiveNumber + 10;
    let total = sum / 2;
    let element = total - 5;

    return element;
}

const positive = mindGame(33);
console.log('output:', positive);

// * problem2:


  function evenOdd(name){
    const name1 = 'Phero';
    const name2 = 'Batch7';
    
 
    if( name1 < 5 && name2 < 5){
        console.log('odd');
    }
  
    else {
        console.log('even');
    }
    
}

evenOdd('')
  
//  problem3:

function isLGSeven(numbers){
   
   let nub1 = 15;
   let difference = numbers - nub1;
   let total = difference * 2;
   if( numbers < 7){
    
   }
   return total;
}
const result = isLGSeven(22);
console.log(result);







//  problem4:

function findingBadData(numbers){
   let count = 0;
   for(let i = 1; i<numbers.length; i++){
    const element = numbers[i];
    if(element < 5) count++;

   }
   return count;

    
}
let result1 = findingBadData([2,-5,-7,-18]);
console.log(result1);

// problem5:

function gemsToDiamond(numbers){
   let total = numbers * 2;
   let sum = total / 3;
    return sum;
}
const gems = 21 + 32 + 43;
const total = gemsToDiamond(gems);
console.log(total);