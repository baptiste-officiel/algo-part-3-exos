/*
 * Pour chaque nombre compris entre min et max
 * Si le nombre est divisible par 3 => Fizz
 * Si le nombre est divisible par 5 =>  Buzz
 * Si le nombre est divisible par 3 et par 5 => FizzBuzz
 * Sinon retourner le nombre
 *
 * Voir le fichier de tests associé (spec/fizzBuzzSpec.js)
 */
function fizzBuzz(min, max) {
    // CODE HERE
    

    while (min < max){
        min =+ min + 1;

        if (min % 5 === 0 && min % 3 === 0) {
            return "FizzBuzz";
        } else if (min % 5 === 0){
            return "Buzz";
        } else if (min % 3 === 0) {
            return "Fizz";
        } else {
            return min;
        }
    }
}

export { fizzBuzz };