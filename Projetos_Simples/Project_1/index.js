let frm = document.querySelector("form");
let respone = document.querySelector("#Respone");
let resptwo = document.querySelector("#Resptwo");
let resptree = document.querySelector("#Resptree");


frm.addEventListener("submit", (e) => {
    let nameCar = frm.inVeiculo.value;
    let priceCar = Number(frm.inPreco.value);

    if(nameCar === "" || priceCar === ""){
        alert("Preencha as colunas")
        respone.innerHTML = "Valores inválidos";
        resptwo.innerHTML = "Valores inválidos";
        resptree.innerHTML = "Valores inválidos";
    }else{
        const started  = priceCar * 0.50;
        const installments = started / 12;


        respone.innerHTML = `Name car : ${nameCar}`;
        resptwo.innerHTML = `Price of started : $ ${started}`;
        resptree.innerHTML = `You can started paying 12x $ ${installments } `;
    
    } 
    
    e.preventDefault();

});
