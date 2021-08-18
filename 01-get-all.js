const petsData = require("./pets-data.js");

/**
 * getAllPetNames()
 * -----------------------------
 * Returns all names from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {string[]} An array of strings, which are pet names.
 *
 * EXAMPLE: getAllPetNames(pets);
 * > ["Deloba", "Tuba", "Percy", "Monkey", "Gia", "Gumby"]
 */

function getAllPetNames(pData) {
    let petArr = [];
    // if(!pData.length) return petArr;
    for(let p of pData) {
        petArr.push(p.petName);
    }
    return petArr;
}
console.log(getAllPetNames(petsData));

/**
 * getAllCaretakerNames()
 * -----------------------------
 * Returns all of the pets' caretaker's names from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {string[]} An array of strings, which are the names of the pets' caretakers.
 *
 * EXAMPLE: getAllCaretakerNames(pets);
 * > ["Sam", "Ari", "Nicole", "Katie", "Steven", "John"]
 */

function getAllCaretakerNames(pData) {
    let caretakersArr = [];
    // if(!pData.length) return caretakersArr;
    for(let p of pData) {
        caretakersArr.push(p.caretakerName);
    }
    return caretakersArr;
}
console.log(getAllCaretakerNames(petsData));
/**
 * getAllFavoriteFoods()
 * -----------------------------
 * Returns all favorite foods from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {string[]} An array of strings, which are pets' favorite foods.
 *
 * EXAMPLE: getAllFavoriteFoods(pets);
 * > ["watermelon", "mealworms", "fish", "dog food", "salami", "bacon"]
 */

function getAllFavoriteFoods(pData) {
    let favFoodArr = [];
    // if(!pData.length) return favFoodArr;
    for(let p of pData) {
        favFoodArr.push(p.favoriteFood);
    }
    return favFoodArr;
}
console.log(getAllFavoriteFoods(petsData));
/**
 * getAllPetSpecies()
 * -----------------------------
 * Returns all pet species from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {string[]} An array of strings, which are the pets' species.
 *
 * EXAMPLE: getAllPetSpecies(pets);
 * > ["dog", "spotted gecko", "cat", "cat", "dog", "cat"]
 */

function getAllPetSpecies(pData) {
    let specieArr = [];
    // if(!pData.length) return specieArr;
    for(let p of pData) {
        specieArr.push(p.species);
    }
    return specieArr;
}
console.log(getAllPetSpecies(petsData));

/**
 * getAllPetAges()
 * -----------------------------
 * Returns all ages from an array of pets. If the inputted `pets` array is empty, return `[]`.
 * @param {Object[]} pets - An array of pets.
 * @returns {number[]} An array of numbers, which are pet ages.
 *
 * EXAMPLE: getAllPetAges(pets);
 * > [8, 2, 1, 10, 3, 6]
 */

function getAllPetAges(pData) {
    let ageArr = [];
    // if(!pData.length) return ageArr;
    for(let p of pData) {
        ageArr.push(p.age);
    }
    return ageArr;
}
console.log(getAllPetAges(petsData));
/**
 * totalAllPetAges()
 * -----------------------------
 * Returns a total of all ages from an array of pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} A number, which is a total of all the pets' ages.
 *
 * EXAMPLE: getAllPetAges(pets);
 * > 30
 */

function totalAllPetAges(pData) {
    let totalAge = 0;
    // if(!pData.length) return totalAge;
    for(let p of pData) {
        totalAge += p.age;
    }
    return totalAge;
}
console.log(totalAllPetAges(petsData));
/**
 * averageAllPetAges()
 * -----------------------------
 * Returns an average of all ages from an array of pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} A number, which is an average of all the pets' ages.
 *
 * EXAMPLE: getAllPetAges(pets);
 * > 5
 */

function averageAllPetAges(pData) {
    let ageSum = 0;
    // if(!pData.length) return ageSum;
    for(let p of pData) {
        ageSum += p.age;
    }
    return ageSum / pData.length;
}
console.log(averageAllPetAges(petsData));

/**
 * averageAllCaretakerAges()
 * -----------------------------
 * Returns an average of all caretakers' ages from an array of pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} A number, which is an average of all the pets' caretakers' ages.
 *
 * EXAMPLE: getAllCaretakerAges(pets);
 * > 32.3333333
 */

function averageAllCaretakerAges(pData) {
    let caretakerSumAge = 0;
    // if(!pData.length) return caretakerSumAge;
    for(let p of pData) {
        caretakerSumAge += Number(p.caretakerAge);
    }
    return caretakerSumAge / pData.length;
}
console.log(averageAllCaretakerAges(petsData));
