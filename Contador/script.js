const tN1 = document.querySelector('#n1');
const tN2 = document.querySelector('#n2');
const tN3 = document.querySelector('#n3');
const btn = document.querySelector('.btn');
const p   = document.querySelector('.result')
const clear = document.querySelector('.clear')

btn.addEventListener('click', contar);
clear.addEventListener('click', apagar);
console.log("oi")

function contar(){
    let n1 = Number(tN1.value);
    let n2 = Number(tN2.value);
    let n3 = Number(tN3.value);

   if(n1 < n2){
        for(let i = n1; i <= n2; i +=n3)
            {
            p.innerText += ` ${i} `
            console.log(i)
            clear.style.visibility = "visible"

             }
   }else if(n1 > n2){
        for(let i = n1; i >= n2; i -=n3)
            {
            p.innerText += ` ${i} `
            console.log(i)
            clear.style.visibility = "visible";

            }
        }else if(n1 == 0 && n2 == 0){
            window.alert("[ERROR] Impossível contar")
        }
}
function apagar(){
    p.innerText = 'Resultado ->'
}

contar();
apagar()

