import readlineSync from "readline-sync";
import askName from "../cli.js";
import random from "../index.js";

const gcdCalculate = (a, b) => {

    if (b === 0) {

        return a;

    }
    let num1 = Math.max(
        a,
        b
    );
    let num2 = Math.min(
        a,
        b
    );

    let remainder = num1 % num2;
    while (remainder !== 0) {

        num1 = num2;
        num2 = remainder;
        remainder = num1 % num2;

    }
    return num2;

};

// range задает диапазон от 2 до 4
const range = () => {

    return Math.floor(Math.random() * 3) + 2;

};

const gcdGame = () => {

    console.log("Welcome to the Brain Games!");
    const name = askName();
    console.log(`Hello, ${name}!`);

    console.log("Find the greatest common divisor of given numbers.");
    for (let i = 0; i < 3; i++) {

        let num1 = range() * random();
        let num2 = range() * random();
        let gcdResult = gcdCalculate(
            num1,
            num2
        );
        const answer = readlineSync.question(`Question: ${num1} ${num2} \nYour answer: `);
        if (Number(answer.trim()) === gcdResult) {

            console.log("Correct!");

        } else {

            return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcdResult}'.\nLet's try again, ${name}!`);

        }

    }
    console.log(`Congratulations, ${name}!`);

};

export default gcdGame;
