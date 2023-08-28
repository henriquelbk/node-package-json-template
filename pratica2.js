import { countries } from './countries.js'


const findCountries = (input) => {
    const result = countries.find((country) => country.name.toLowerCase() === input.toLowerCase())

    return result
}

console.log(findCountries(process.argv[2]));
console.log(process.argv[2]);