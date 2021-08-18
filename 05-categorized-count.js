const petsData = require("./pets-data.js");

/**
 * speciesCount()
 * -----------------------------
 * Returns the an object with the number of each species in the given `pets` array. If the inputted `pets` array is empty, return {}.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} An object with keys representing each species in the `pets` array, and values that represent a count for each species.
 *
 * EXAMPLE:
 *  speciesCount(pets);
 *  > {
 * dog: 2,
 * 'spotted gecko': 1,
 * cat: 3
 * }
 */
function speciesCount(pets) {
   let specieObj = {};
   for(let p of pets) {
       if(specieObj[p.species]) specieObj[p.species] += 1;
       else {
           specieObj[p.species] = 1;
       }
   }
   return specieObj;
}
//console.log(speciesCount(petsData));

/**
 * dueForCheckupCount()
 * -----------------------------
 * Returns the an object with a count on which pets in the `pets` array are `dueForCheckup` and which ones are not. If the inputted `pets` array is empty, return {}.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} An object with keys `true` and `false` representing which pets are due for a checkup (true) and which pets are not due for a checkup (false).
 *  The values represent a count for each.
 *
 * EXAMPLE:
 *  dueForCheckupCount(pets);
 *  > {
 * true: 4,
 * false:2
 * }
 */
function dueForCheckupCount(pets) {
    let checkUpObj = {};
    for(let p of pets) {
      if(p.dueForCheckup === true) {
        if(checkUpObj["true"]) checkUpObj.true += 1;
        else {
          checkUpObj.true = 1;
        }
      } else {
        if(checkUpObj["false"]) checkUpObj.false += 1;
        else {
          checkUpObj["false"] = 1;
        }
      }
    }
    return checkUpObj;
}
console.log(dueForCheckupCount(petsData));
/**
 * friendsWithCount()
 * -----------------------------
 * Returns an object with keys representing a length of each pet's `friendsWith` array and values representing how many pets have that exact number of friends.
 *  If the inputted `pets` array is empty, return null.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} An object with keys representing each different `friendsWith` length in the `pets` array, and values that represent a count of pets with each length.
 *
 * EXAMPLE:
 *  friendsWithCount(pets);
 *  > {
 * 3: 4,
 * 2: 1,
 * 8: 1
 * }
 */
function friendsWithCount(pets) {
    let friendObj = {};
    for(let p of pets) {
        if(friendObj[p.friendsWith.length]) friendObj[p.friendsWith.length]++;
        else {
            friendObj[p.friendsWith.length] = 1;
        }
    }
    return friendObj;
}
console.log(friendsWithCount(petsData));