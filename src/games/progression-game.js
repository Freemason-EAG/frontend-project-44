import readlineSync from "readline-sync";
import random, {givenRangeRandom, greeting} from "../index.js";

const progression = () => {

    const start = random();
    const numCount = givenRangeRandom(
        5,
        10
    );
    const step = givenRangeRandom(
        4,
        12
    );
    let result = [];
    for (let i = 0; i < numCount; i++) {

        result.push(start + i * step);

    }
    return result.join(", ");

};

const progressionGame = () => {

    const name = greeting();

    console.log("What number is missing in the progression?");
    for (let i = 0; i < 3; i++) {

        let nums = progression().split(", ");
        const index = givenRangeRandom(
            0,
            nums.length - 1
        );
        const hiddenNum = Number(nums[index]);
        nums[index] = "..";

        const answer = readlineSync.question(`Question: ${nums.join(", ")} \nYour answer: `);
        if (Number(answer.trim()) === hiddenNum) {

            console.log("Correct!");

        } else {

            return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenNum}'.\nLet's try again, ${name}!`);

        }

    }
    console.log(`Congratulations, ${name}!`);

};

export default progressionGame;
