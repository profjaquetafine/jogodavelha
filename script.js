//Inicial Data
let squere={
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};

let player = '';
let warning = '';
let playing = false;

reset();

//Events
document.querySelector('.reset').addEventListener('click',reset);
document.querySelectorAll('.item').forEach(item =>{
item.addEventListener('click', itemClick);
})


//Functions

function itemClick(event){
  let item =event.target.getAttribute('data-item');
  
  if(playing && squere[item]===''){
        squere[item]=player;
        renderSquere();
        togglePlayer();
  }

}
function reset(){
    warning = '';

    let random = Math.floor(Math.random()*2);
    player = (random===0) ? 'X' : 'O';

   for (let i in squere){
        squere[i] = '';
    }

    playing = true;
    renderSquere();
    renderInfor();
}

function renderSquere(){
    for(let i in squere){
       
        let item=document.querySelector(`div[data-item=${i}]`)
        item.innerHTML = squere[i];
    }

    checkGame();
}


function renderInfor(){
document.querySelector('.vez').innerHTML = player;
document.querySelector('.resultado').innerHTML = warning;

}
function togglePlayer(){
    player=(player==='X')? 'O' : 'X';
    renderInfor();
}
function checkGame(){
    if(checkWinnerFor('X')){
        warning = 'O "x" venceu!';
        playing = false;
    }else if (checkWinnerFor('O')){
        warning = 'O "o" venceu!';
        playing = false;
    }else if (isFull()){
        warning = 'Deu Empate';
        playing = false;
    }
}

function checkWinnerFor(player){
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
    ];
    for(let i in pos){
        let pArray = pos[i].split(',');

       let hasWon = pArray.every(option=>squere[option]===player)
         if(hasWon){
             return true;

         }
       
    }

    return false;
}

function isFull(){
    for(let i in squere){
        if (squere[i] === ''){
            return false;
        }
    }
    return true
}

