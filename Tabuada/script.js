const tN = document.querySelector('#n1')
const btn = document.querySelector('.btn')
const clear = document.querySelector('.clear')
const p    = document.querySelector('.result');

btn.addEventListener('click',tabuada);
clear.addEventListener('click', limpar)

function tabuada(){
    let n1 = Number(tN.value)
    let i = 1;

    if(n1 == 0){
        window.alert('é serio?')
    }

    while(i<10){
        console.log(n1 * i)
        i++
        p.innerHTML+= `</br>${n1} x ${i} = ${n1 * i} `
        
    }
    btn.style.display = 'none'
    clear.style.display = 'block'

}
function limpar(){
    p.innerHTML = ""
    btn.style.display = 'block'
    clear.style.display = 'none';
    
}
