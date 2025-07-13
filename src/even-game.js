import readlineSync from "readline-sync";
import askName from "../src/cli.js";

const random = () => {

    return Math.floor(Math.random() * 100) + 1;

};


const parityCheck = (numbers) => {

    let result = [];
    for (const num of numbers) {

        if (num % 2 === 0) {

            result.push("yes");

        } else {

            result.push("no");

        }

    }
    return result;

};


const evenGame = () => {

    console.log("Welcome to the Brain Games!");
    const name = askName();
    console.log(`Hello, ${name}!`);
    const numbers = [
        random(),
        random(),
        random()
    ];
    const trueAnswers = parityCheck(numbers);
    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");
    for (let i = 0; i < trueAnswers.length; i++) {

        const num = numbers[i];
        const answer = readlineSync.question(`Question: ${num} `);
        console.log(`Your answer: ${answer}`);
        if (answer === trueAnswers[i]) {

            console.log("Correct!");

        } else {

            return console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswers[i]}.\nLet's try again, ${name}!`);

        }

    }
    console.log(`Congratulations, ${name}!`);

};


export default evenGame;

