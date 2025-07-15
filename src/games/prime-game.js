import readlineSync from "readline-sync";
import askName from "../cli.js";
import random, {givenRangeRandom} from "../index.js";

const isPrime = (num) => {

    if (num < 2) {

        return false;

    }
    if (num === 2) {

        return true;

    }
    if (num % 2 === 0) {

        return false;

    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {

        if (num % i === 0) {

            return false;

        }

    }
    return true;

};

const primeGame = () => {

    console.log("Welcome to the Brain Games!");
    const name = askName();
    console.log(`Hello, ${name}!`);

    console.log("Answer \"yes\" if given number is prime. Otherwise answer \"no\".");

    for (let i = 0; i < 3; i++) {

        let num = random();
        let trueAnswer;
        isPrime(num)
            ? trueAnswer = "yes"
            : trueAnswer = "no";

        const answer = readlineSync.question(`Question: ${num} \nYour answer: `);
        if (answer.trim().toLowerCase() === trueAnswer) {

            console.log("Correct!");

        } else {

            return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}!`);

        }

    }
    console.log(`Congratulations, ${name}!`);

};

export default primeGame;
