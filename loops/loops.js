// program that accepts two integers and displays largest of the two


const isLargest = (a, b) => {
    if (a > b) {
        return a;
    };
    if (a < b) {
        return b;
    }

}

const isEvenOrOdd = (a) => {
    if (a % 2 === 0) {
        return "Even";
    }
    else return "Odd"
}



console.log(isLargest(1, 2));

console.log(isEvenOrOdd(2))