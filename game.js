import {snakeSpeed, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'
// creating a game loop
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('snake-board');

function main(currentTime){
if(gameOver){
    if(confirm('You lost! Press ok to play again.')){
        window.location.reload()
    }
    return
}

    window.requestAnimationFrame(main);
    const timeSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(timeSinceLastRender < 1 / snakeSpeed) return;

    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}