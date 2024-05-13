//Tipăriți toate numerele pare de la 0 la 10

function even_numbers (n){
    for (let i=0; i<=n; i+=2){
        console.log(i);
    }
}
even_numbers(10);

//Tipăriți toate numerele impare  de la 0 la 10

//Method 1
function even_numbers(n) {
    for (let i=0; i<=n; i++){
        if (i%2 !== 0) {
            console.log(i);
        }    
    }
}
even_numbers(10);

//Method 2
function even_numbers (n){
    for (let i=1; i<=n; i+=2){
        console.log(i);
    }
}
even_numbers(10);
