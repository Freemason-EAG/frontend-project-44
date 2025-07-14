import readlineSync from "readline-sync";
import askName from "../cli.js";
import random, {givenRangeRandom} from "../index.js";

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

    console.log("Welcome to the Brain Games!");
    const name = askName();
    console.log(`Hello, ${name}!`);

    const nums = progression().split(", ");
    let num = givenRangeRandom(
        Number(nums[0]),
        Number(nums[nums.length - 1])
    );

    /*
     * let hiddenNum = nums.length[num] = '..'
     * мы выбрали случайно число, а нам нужно его скрыть случайным образом! Как это сделать???
     */

};
