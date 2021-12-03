/*
 * Retourner la moyenne des valeurs du tableau
 * ex: [4, 8] => 6 car (4+8)/2
 * ex: [6, 8, 10] => 8 car (6+8+10)/3
 */
function average(scores) {
    // CODE HERE
    let sum = 0;

    for (let i = 0; i < scores.length; i++){
        sum += scores[i];
    }
    return sum / scores.length;
}

export { average };