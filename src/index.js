const random = () => {

    return Math.floor(Math.random() * 100) + 1;

};


const givenRangeRandom = (min, max) => {

    const range = Math.floor(Math.random() * (max - min + 1)) + min;
    return range;

};

export default random;
export {givenRangeRandom};
