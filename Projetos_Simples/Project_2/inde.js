let frm = document.querySelector("form");
let respone =  document.querySelector("h2");
let resptwo = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    const notaone = Number(frm.Notaone.value);
    const notatwo = Number(frm.Notatwo.value);
    if(notaone == "" && notatwo == ""){
        alert("Preencha as lacunas!");
        respone.innerText = `Valores inválidos`;
        resptwo.innerText = `Valores Inválidos`;
    }else{

        const result = (notaone + notatwo) / 2;
        if(result >= 7.0){
            respone.innerText = `Você foi Aprovado !!!!!`;
            resptwo.innerText = `Sua nota foi ${result}`;
        }else{
            respone.innerText = 'Você não foi aprovado :c ';
            resptwo.innerText = `Sua nota foi ${result},0`;
        }
    }


    e.preventDefault();
});
