
let oxygen = 100;
let power = 100;
let food = 10;
let energy = 100;

const oxygenText = document.getElementById('oxygen-level');
const powerText = document.getElementById('power-level');
const foodText = document.getElementById('food-level');
const energyText= document.getElementById('energy-level');

const btnOxygen=document.getElementById('btn-oxygen');
const gameOverScreen = document.getElementById('game-over-screen');

const foodFill=document.getElementById('food-fill');
const energyFill=document.getElementById('energy-fill');
const oxygenFill=document.getElementById('oxygen-fill');
const powerFill=document.getElementById('power-fill');

const btnEat = document.getElementById('btn-eat');
const btnRest = document.getElementById('btn-rest');
const btnRepair=document.getElementById('btn-repair');
const btnGreenhouse=document.getElementById('btn-greenhouse');

const btnRestart = document.getElementById('btn-restart');
const btnQuit = document.getElementById('btn-quit');


function eatRation() {
    if (food > 0) {
        food = food - 1;      
        energy = energy + 15; 
        
         
        if (energy > 100) {
            energy = 100;
        }

       
        foodText.innerText = food;
        foodFill.style.width=(food*10) + '%'
        energyFill.style.width=energy + '%';
        energyText.innerText=energy;
    } else {
        alert("Warning: No food remaining!");
    }
}
function restPlayer(){
    if(oxygen>=10){
        oxygen=oxygen-10;
        energy=energy+30;
        if(energy>=100){
            energy=100;
        }
        oxygenText.innerText=oxygen;
        energyText.innerText=energy;
        oxygenFill.style.width=oxygen+'%';
        energyFill.style.width=energy+"%";
        
    }
    else{
        alert("Warning: Oxygen too Low!");
    }
}
function operateGreenhouse(){
    if(power>=20){
        power=power-20;
        food=food+2;
        if(food>=10)food=10;
        powerText.innerText=power;
        powerFill.style.width=power+'%';
        foodText.innerText=food;
        foodFill.style.width=(food*10)+'%';
    }
    else{
        alert("Warning: Power too Low!");
    }
}
function repairSolar(){
    if(energy>=20){
        energy-=20;
        power+=30;
        if(power>=100)power=100;
        energyText.innerText=energy;
        energyFill.style.width=energy+'%';
        powerText.innerText=power;
        powerFill.style.width=power+'%';
    }
    else{
        alert("Warning: Energy too Low!");
    }
}
function o2Refil(){
    if(power>=15){
        power-=15;
        oxygen+=25;
        if(oxygen>=100)oxygen=100;
        oxygenText.innerText=oxygen;
        oxygenFill.style.width=oxygen+'%';
        powerText.innerText=power;
        powerFill.style.width=power+'%';
    }
    else{
        alert("Warning: Power too Low!")
    }
}

function gameTick() {
    
    oxygen = oxygen - 5;
    food = food - 2;
    energy = energy - 1; 
    if(oxygen<=0)oxygen=0;
    if(food<=0)food=0;
    if(energy<=0)energy=0;
    oxygenText.innerText=oxygen;
    oxygenFill.style.width=oxygen+'%';
    energyText.innerText=energy;
    energyFill.style.width=energy+'%';
    foodText.innerText=food;
    foodFill.style.width=(food*10)+'%';

    if (oxygen <= 0 || food <= 0 || energy <= 0) {
        clearInterval(gameInterval);
        gameOverScreen.classList.remove('hidden');
        btnEat.disabled = true;
        btnRest.disabled = true;
        btnRepair.disabled = true;
        btnOxygen.disabled = true;
        btnGreenhouse.disabled = true;
    }
}
function restartGame() {
    location.reload();
}

function quitGame() {
    document.body.style.background = "black";
    document.body.innerHTML = "<h1 style='color: #2ecc71; text-align: center; margin-top: 20%; font-family: monospace;'>SIMULATION TERMINATED. <br><br> YOU MAY CLOSE YOUR BROWSER.</h1>";
}

// 3. Attach the event listener to your Quit button
btnQuit.addEventListener('click', quitGame);

let gameInterval = setInterval(gameTick, 5000);

btnEat.addEventListener('click', eatRation);
btnRest.addEventListener('click',restPlayer);
btnGreenhouse.addEventListener('click',operateGreenhouse);
btnRepair.addEventListener('click',repairSolar);
btnOxygen.addEventListener('click',o2Refil);
btnRestart.addEventListener('click', restartGame);