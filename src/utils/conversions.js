export const divideByTen = (value) => {
    const newVal = value / 10;
    return newVal.toFixed(1);
};

export const metersToFeet = (value) => {
    const divNum = value / 10;
    const feet = divNum * 3.28084;
    return feet.toFixed(1);
};

export const kilogramsToPounds = (value) => {
    const pounds = value * 2.20462;
    return pounds.toFixed(1);
};