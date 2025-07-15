import askName from "./cli.js";

const random = () => {

    return Math.floor(Math.random() * 100) + 1;

};


const givenRangeRandom = (min, max) => {

    const range = Math.floor(Math.random() * (max - min + 1)) + min;
    return range;

};

const greeting = () => {

    console.log("Welcome to the Brain Games!");
    const name = askName();
    console.log(`Hello, ${name}!`);
    return name;

};

export default random;
export {givenRangeRandom, greeting};
