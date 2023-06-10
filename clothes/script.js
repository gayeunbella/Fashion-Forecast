function beigecargosclicked() {
    console.log('beige cargos clicked')
    document.getElementById("beigecargos").style.backgroundColor="#FFCD3D"

}

window.onload = function() {
    const beigecargos = document.getElementById("beigecargos");    

    if (beigecargos)
    beigecargos.addEventListener("click", beigecargosclicked)
}

function blackcargosclicked() {
    console.log('black cargos clicked');
    document.getElementById("blackcargos").style.backgroundColor="#FFE69C";

}

window.onload = function() {
    const blackcargos = document.getElementById("blackcargos");
    if (blackcargos) {
        blackcargos.addEventListener("click", blackcargosclicked);
    }
}

const cardigan = document.getElementById("cardigan");
const crewneck1 = document.getElementById("crewneck1");
const crewneck2 = document.getElementById("crewneck2");
const crewneck3 = document.getElementById("crewneck3");
const graphicshirt1 = document.getElementById("graphicshirt1");
const graphicshirt2 = document.getElementById("graphicshirt2");
const hoodie1 = document.getElementById("hoodie1");
const hoodie2 = document.getElementById("hoodie2");
const jeans1 = document.getElementById("jeans1");
const jeans2 = document.getElementById("jeans2");
const jeans3 = document.getElementById("jeans3");
const jorts1 = document.getElementById("jorts1");
const jorts2 = document.getElementById("jorts2");
const jorts3 = document.getElementById("jorts3");
const longsleeve2 = document.getElementById("longsleeve2");
const polo = document.getElementById("polo");
const shorts1 = document.getElementById("shorts1");
const shorts2 = document.getElementById("shorts2");
const skirt1 = document.getElementById("skirt1");
const skirt2 = document.getElementById("skirt2");
const skirt3 = document.getElementById("skirt3");
const ssbuttonup1 = document.getElementById("ssbuttonup1");
const ssbuttonup2 = document.getElementById("ssbuttonup2");
const lsbuttonup1 = document.getElementById("lsbuttonup1");
const lsbuttonup2 = document.getElementById("lsbuttonup2");