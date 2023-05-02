let frm = document.querySelector("form");
let resp = document.querySelector("pre");

frm.addEventListener("submit",(e) => {
    const numero = Number(frm.inNumero.value);
    let resposta = "";

    for(let i = 1; i <= 10; i++){
        resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`;
    }

    resp.innerText = resposta;

    e.preventDefault();
});