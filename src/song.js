/*
 * retourner la chanson en fonction du nombre de kilomètres
 *
 * ex: song(2) =>
 *      1 km à pied, ça use, ça use, ça use,
 *      1 km à pied, ça use les souliers
 *      2 km à pied, ça use, ça use, ça use,
 *      2 km à pied, ça use les souliers
 *
 * Voir le fichier de tests associé (spec/songSpec.js)
 */
function song(km) {
    // CODE HERE

    let nbkm = 0;
    let lyrics = "";

    while (nbkm < km) {
         lyrics += (nbkm + 1) + " km à pied, ça use, ça use, ça use,\n"
         + (nbkm + 1) + " km à pied, ça use les souliers\n";
         ++nbkm;
    }
    return lyrics;  
}

export { song };