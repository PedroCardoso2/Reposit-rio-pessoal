let frm = document.querySelector("form");
let result = document.querySelector("h3");


frm.addEventListener("submit",(e) => {
    const number = Number(frm.inNumero.value);
    const raiz = Math.sqrt(number);

    if(Number.isInteger(raiz)){
        result.innerHTML = `Raiz Quadrada: ${raiz}`;
    }else{
        result.innerHTML = `Seu número não é exato: ${raiz.toFixed(3)}`;
    }

    e.preventDefault();
});