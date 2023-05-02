let frm = document.querySelector("form");
let resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const name = frm.inName.value;
    const masculino = frm.sMasc.checked;
    const feminino = frm.sFem.checked;
    const hight = parseFloat(frm.inAltura.value);

    if(name === "" || hight == ""){
        alert("Complete a informações corretamente");
        resp.innerText = "Informe os valores na tabela acima";
    }else{
        let peso //Criei um várivel peso e usarei ela dentro do if
        if(masculino){ //masculino === (maculino == True)
        peso = 22 * Math.pow(hight, 2);
        }else{
        peso = 21 * Math.pow(hight, 2);
        }
    
        resp.innerText = `Olá ${name}, seu peso ideal é ${peso.toFixed(1)}KG`;
    }
    

    e.preventDefault();
});