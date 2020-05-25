//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  let table = {};

  for (let i = 0; i < input.length; i++) {
    //check if value exists in key of object
    if (table[input[i]] !== undefined) {
      //return recurring value

      return input[i];
    } else {
      //set value to table object key : array value value: index
      table[input[i]] = i;
    }
  }
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
module.exports = firstRecurringCharacter;
