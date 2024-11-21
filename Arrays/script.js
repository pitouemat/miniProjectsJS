document.addEventListener('DOMContentLoaded', () => {
    const tN1 = document.querySelector('#n1');
    const btnInserir = document.querySelector('#btn1');
    const btnPronto = document.querySelector('#btn2');
    const select = document.querySelector('#slc');
    const list = document.querySelector('.list-area');  // Acessando a área onde os resultados aparecerão
    let arrayN1 = [];

    // Certifique-se de que os elementos existem antes de adicionar os eventListeners
    if (btnInserir && btnPronto && select && list) {
        btnInserir.addEventListener('click', inserir);
        btnPronto.addEventListener('click', pronto);
    } else {
        console.error("Um ou mais elementos não foram encontrados.");
    }

    // Função para inserir o número no array
    function inserir() {
        let n1 = Number(tN1.value);

        // Verifique se o valor inserido está entre 1 e 100 antes de adicionar
        if (n1 < 1 || n1 > 100 || isNaN(n1)) {
            window.alert('Por favor, digite um número válido entre 1 e 100.');
            return;  // Impede a adição do valor no array se for inválido
        }

        // Adiciona o número ao array
        arrayN1.push(n1);
        console.log(arrayN1);

        // Cria um novo item <option> para a lista <select>
        let option = document.createElement('option');
        option.text = `${n1} inserido!`;
        select.appendChild(option);
    }

    // Função para calcular e exibir os resultados quando o botão "Pronto" for clicado
    function pronto() {
        if (arrayN1.length === 0) {
            window.alert('A lista está vazia. Adicione números primeiro.');
            return;
        }

        // Soma e média dos valores
        let somaArray = arrayN1.reduce((acc, val) => acc + val, 0);
        let mediaArray = somaArray / arrayN1.length;

        // Verifique se já existe um parágrafo com a classe 'resultados'
        let pExistente = document.querySelector('.resultados');
        if (pExistente) {
            // Se o parágrafo já existir, remova-o
            pExistente.remove();
        }

        // Criação do novo parágrafo com os resultados
        let p = document.createElement('p');
        p.classList.add('resultados'); // Adiciona uma classe para identificar este parágrafo
        p.innerHTML = `
            O menor valor dessa lista é: ${Math.min(...arrayN1)} <br>
            O maior valor dessa lista é: ${Math.max(...arrayN1)} <br>
            A soma da lista toda é: ${somaArray} <br>
            A média dos valores é: ${mediaArray}
        `;
        
        // Adiciona o parágrafo com os resultados na área de lista
        list.appendChild(p);
    }
});