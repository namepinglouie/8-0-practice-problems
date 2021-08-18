const pets = require("./pets-data.js");
const petsData = require("./pets-data.js");

/**
 * getHighestPetAge()
 * -----------------------------
 * Returns the highest `age` of all pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} The highest `age` of all pets.
 *
 * EXAMPLE:
 *  getHighestPetAge(pets);
 *  > 10
 */
function getHighestPetAge(pData) {
    if(!pData.length) return 0;
    let oldestPet = pData[0].age;
    for(let p of pData) {
        if(p.age > oldestPet) oldestPet = p.age;
    }
    return oldestPet;
}
console.log(getHighestPetAge(petsData));
/**
 * getLowestPetAge()
 * -----------------------------
 * Returns the lowest `age` of all pets. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} The lowest `age` of all pets.
 *
 * EXAMPLE:
 *  getLowestPetAge(pets);
 *  > 1
 */
function getLowestPetAge(pData) {
    if(!pData.length) return 0;
    let youngestPet = pData[0].age;
    for(let p of pData) {
        if(p.age < youngestPet) {
            youngestPet = p.age;
        }
    }
    return youngestPet;
}
console.log(getLowestPetAge(petsData));
/**
 * getHeaviestPet()
 * -----------------------------
 * Returns the pet object with the highest `weightInPounds` of all pets. If the inputted `pets` array is empty, return {}.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} The pet with the highest `weightInPounds`.
 *
 * EXAMPLE:
 *  getHeaviestPet(pets);
 *  > {
        petName: "Gia",
        species: "dog",
        caretakerName: "Steven",
        age: 3,
        favoriteFood: "salami",
        caretakerAge: "34",
        weightInPounds: 25
    }
 */
function getHeaviestPet(pData) {
    if(!pData.length) return {};
    //let heaviestPetWeight = pData[0].weightInPounds;
    //let heaviestPetObj = {};
    let heaviestPetObj = pData[0];
    for(let p of pData) {
        if(p.weightInPounds > heaviestPetObj.weightInPounds) {
        //if(p.weightInPounds > heaviestPetWeight) {
            //heaviestPetWeight = p.weightInPounds;
            heaviestPetObj = p;
        }
    }
    return heaviestPetObj;
}
console.log(getHeaviestPet(petsData));
/**
 * getLightestPet()
 * -----------------------------
 * Returns the pet object witht the lowest `weightInPounds` of all pets. If the inputted `pets` array is empty, return {}.
 * @param {Object[]} pets - An array of pets.
 * @returns {Object} The pet with the lowest `weightInPounds`.
 *
 * EXAMPLE:
 *  getLightestPet(pets);
 *  > {
        petName: "Tuba",
        species: "spotted gecko",
        caretakerName: "Ari",
        age: 2,
        favoriteFood: "mealworms",
        caretakerAge: "26",
        weightInPounds: 0.1
    }
 */
function getLightestPet(pData) {
    if(!pData.length) return {};
    let lowestPetWeight = pData[0].weightInPounds;
    let lowestPetObj = {};
    for(let p of pData) {
        if(p.weightInPounds < lowestPetWeight) {
            lowestPetWeight = p.weightInPounds;
            lowestPetObj = p;
        }
    }
    return lowestPetObj;
}
console.log(getLightestPet(petsData));
/**
 * getLowestCaretakerAge()
 * -----------------------------
 * Returns the `caretakerAge` of the pet with the lowest `caretakerAge`. If the inputted `pets` array is empty, return 0.
 * @param {Object[]} pets - An array of pets.
 * @returns {number} The lowest `caretakerAge` of all pets as a number (not a string).
 *
 * EXAMPLE:
 *  getLowestCaretakerAge(pets);
 *  > 17
 */
function getLowestCaretakerAge(pData) {
    if(!pData.length) return 0;
    let youngestCT = Number(pData[0].caretakerAge);
    for(let p of pData) {
        let ctAge = Number(p.caretakerAge);
        if(ctAge < youngestCT) youngestCT = ctAge;
    }
    return youngestCT;
}
console.log(getLowestCaretakerAge(petsData));
/**
 * getNameOfYoungestCaretaker()
 * -----------------------------
 * Returns the `caretakerName` of the pet with the lowest `caretakerAge`. If the inputted `pets` array is empty, return an empty string: ''.
 * @param {Object[]} pets - An array of pets.
 * @returns {string} The `caretakerName` of the pet with the lowest `caretakerAge` of all pets.
 *
 * EXAMPLE:
 *  getNameOfYoungestCaretaker(pets);
 *  > "Katie"
 */
function getNameOfYoungestCaretaker(pData) {
    if(!pData.length) return "";
    let youngestCT = Number(pData[0].caretakerAge);
    let youngestCTName = "";
    for(let p of pData) {
        let ctAge = Number(p.caretakerAge)
        if(youngestCT > ctAge) {
            youngestCT = ctAge;
            youngestCTName = p.caretakerName;
        }
    }
    return youngestCTName;
}
console.log(getNameOfYoungestCaretaker(petsData));