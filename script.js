/*vamos chamar o nosso elemento pelo id no caso display */
let display = document.getElementById('display'); 

/*vamos chamar tambem os nossos elementos de class no caso todos os botões*/
let buttons = Array.from(document.getElementsByClassName('button'));
/*vamos mapear o nosso array de botões*/

buttons.map(button => {
    button.addEventListener('click', (e) => {
        
        /*teste console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);*/
        /*agora vamos ecrever para fazer leitura na tela*/
        switch(e.target.innerText){
            case'C':
                display.innerText='';
                break;
            case'CE':
                display.innerText='';
                break;
            case'←':
                if(display.innerText){
                    display.innerText=display.innerText.slice(0,-1);
                }
                break;
               
            case'=': 
                try{
                     display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = "NaN" /*EM CASO DE ERRO RESOLVEREMOS COM A SEGUINTE FUNÇÃO*/
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });

});



