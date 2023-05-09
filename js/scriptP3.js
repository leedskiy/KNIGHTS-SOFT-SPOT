const mainTable1 = document.querySelector('.main__table1');

const table1Elem2 = document.querySelector('.table1__elem2');
const table1Elem3 = document.querySelector('.table1__elem3');
const table1Elem4 = document.querySelector('.table1__elem4');

const table1Elem6 = document.querySelector('.table1__elem6');
const table1Elem7 = document.querySelector('.table1__elem7');
const table1Elem8 = document.querySelector('.table1__elem8');

let table1Elem10 = document.querySelector('.table1__elem10');
let table1Elem11 = document.querySelector('.table1__elem11');
const table1Elem12 = document.querySelector('.table1__elem12');

window.onload = () => {
    let catsIn = parseInt(table1Elem2.textContent);
    let dogsIn = parseInt(table1Elem3.textContent);
    let animalsIn = catsIn + dogsIn;
    table1Elem4.innerHTML = `${animalsIn}`

    let catsAdopted = parseInt(table1Elem6.textContent);
    let dogsAdopted = parseInt(table1Elem7.textContent);
    let animalsAdopted = catsAdopted + dogsAdopted;
    table1Elem8.innerHTML = `${animalsAdopted}`

    let catsTotal = catsIn + catsAdopted;
    let dogsTotal = dogsIn + dogsAdopted;
    let animalsTotal = catsTotal + dogsTotal;
    table1Elem10.innerHTML = `${catsTotal}`
    table1Elem11.innerHTML = `${dogsTotal}`
    table1Elem12.innerHTML = `${animalsTotal}`

    mainTable1.setAttribute(`summary`, `Statistics of &ldquo;KNIGHT'S SOFT SPOT&rdquo; shelter. 
    There are ${catsIn} cats, ${dogsIn} dogs and in total ${animalsIn} pets in the shelter.
    ${catsAdopted} cats, ${dogsAdopted} dogs and in total ${animalsAdopted} animals were adopted.
    In general (in the shelter and adopted) count of cats is ${catsTotal}, 
    count of dogs is ${dogsTotal}, together ${animalsTotal} pets.`)
}