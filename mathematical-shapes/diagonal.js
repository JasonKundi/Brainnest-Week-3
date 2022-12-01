// Calculates the diagonal distance in a square where the length of each
// side is 9

const square = 9

const findDiagonal = (square) => {
    // Find diagonal, square root of 2 * square side length 
    console.log("Square is in function:", square)
    return Math.sqrt(2) * square
}



console.log(findDiagonal(square))