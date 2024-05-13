//Returnează numărul de vocale dintr-un șir de caractere (string)
//Creați o funcție care va returna un număr întreg al numărului de 
//vocale găsite într-un șir. Aceasta este o modalitate excelentă de a practica determinarea caracteristicilor unui set de date.
const str = "Acesta este un string";
const countVowels = (str) => {
    str = str.toLowerCase ();
    const vowels = "aeiou";
    let count = 0;
    for ( let i=0; i< str.length; i++){
        const el = str[i];
        if(!vowels.includes(el)){
            continue;
        };
    count++;
    }
    return count;
}
console.log(countVowels(str));