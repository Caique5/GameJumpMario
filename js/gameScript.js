const personagem = document.querySelector('.personagem'); //Aqui declaro uma const personagem e uso a funcão "document.querySelector" para chamar uma classe de css, nesse caso do "perssonagem" //
const encanamento = document.querySelector('.encanamento');

const jump = () => {            //Aqui criei uma const jump e dentro dela usei a const personagem criada e usei a funcao "classList.add" para adionar uma um evento do css que foi puxado com a funcao "document.addEventListener('keydown', jump);" que nada mais é do que puxar uma class e adicionar um evento, que nesse caso é o "keydown" ou seja a class vai ser acionado quando apertar um botao//
    personagem.classList.add('jump');

    setTimeout(() => {          // Aqui usei o setTimeout para adicionar uma funcao que vai ser executada pelo tempo que eu determinei, ou seja ela vai remover a class depois de 500ms//
        personagem.classList.remove('jump');
    }
        , 500);
}
const loop = setInterval(() =>{
    
    const encanamentoPosition = encanamento.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px','');

    if (encanamentoPosition < 82 && encanamentoPosition > 0 && personagemPosition < 72) {

        encanamento.style.animation = 'none';   //o style.animation, define oque vai acontecer com a aplicação quando entrar na condição do if, nesse caso o none para o evento"game"//
        encanamento.style.left = `${encanamentoPosition}px`;

        encanamento.style.animation = 'none';
        personagem.style.bottom = `${personagemPosition}px`;

        personagem.src = ('images/game-over.png')
        personagem.style.width = '50px'
        personagem.style.heigth = '1  0px'
        personagem.style.margin = '40px'
        
        clearInterval('loop')   //Usado para parar um evento, no caso o loop//
 
    }
}, 10);

document.addEventListener('keydown', jump); 