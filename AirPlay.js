// DEFINE COLOR OF CHRONO COUNT:
const color = ['white', 'red', 'yellow','green'];

const emoticon =['😝','❤','💛','🧡','💣','🦊',
                 '🐯','🐼','🍺','🍧','🍦','🥮', 
                 '🧭','⭐️','🌟','☄️','🔊','💶','💊']
// SET PARAMETER OF ROUND TO PLAY:
var round =document.querySelector('#container');
const Round={
    width:(window.innerWidth)*0.6,
    height:(window.innerHeight)*2.8,
    setOnscreen:roundSet=>{
        round.style.width=Round.width+'px';
        round.style.height=Round.height+'px';
    },
    getDimension:dimens=>{
        // dimens dimension depending of Object what we want to display
       if( dimens == "snake"){
        return [(Round.width)/35, Round.height/70]
       }    
    }
}
// CREATE THE CHRONO OBJECT AND INITIALIZE IT:
const Chrono={
    width :  (window.innerWidth)/20+'px',
    height : (window.innerHeight)/10+'px',
    setOnround  : roundSet=>{
        let chrono = document.createElement("div");
        chrono.style.position="absolute";
        chrono.id  = 'chrono';
        round.appendChild(chrono);
        chrono.style.marginLeft =  0+'px';
        chrono.style.marginTop  =  0+'px';
        var chrono_start = 0;
        const chrono_end = 4;
        const myChrono = setInterval(() => { 
            chrono.innerHTML  = '<h1 id="chronoNumber">' +   chrono_start+   '</h1>'; 
            let chronoNUmber = document.getElementById('chronoNumber');
            chronoNUmber.style.fontSize='43px';
            chrono.style.backgroundColor = color[chrono_start];
            chrono.style.width  =  Chrono.width;
            chrono.style.height = Chrono.height;
            chrono_start+=1;
            if ( chrono_start > chrono_end){
                chrono.remove();
                clearInterval(myChrono);
            }
            }, 1200);
    }
}

// FUNCTION TO RANDOM COLOR OF SNAKE AND FOOD:

function   setColor(){
    const color = [ 'rgb(255, 187, 0)',
                    'rgba(255, 0, 234, 0.89)',
                    'rgb(0, 255, 21)',
                    'rgba(0, 81, 255, 0.342)',
                    'rgb(0, 255, 255)',
                    'rgb(255, 102, 0)',
                    'rgb(255, 0, 0)',
                    'rgba(255, 0, 0, 0.534)'];
    choice_color = color [Math.round(Math.random()*color.length-1)]
    return choice_color;      
}

//FUNCTION THAT RETURNS THE SNAKE DIRECTION ACCORDING TO THE KEYBOARD KEY

function getKeyboardPress(){
    let KEYBOARD=document.addEventListener('keydown', event => {
        snake.direction=event.code;
    });
}


class Snake{
    
    constructor() {
        this.headSnake=[document.createElement('div')];
        round.appendChild(this.headSnake[0]);
        this.headSnake[0].id="snake";
        this.direction ='ArrowRight';
        this.headSnakePosition_x = 400;
        this.headSnakePosition_y = 238;
        this.headSnake[0].style.left=this.headSnakePosition_x+'px';
        this.headSnake[0].style.top=this.headSnakePosition_y+'px';
    }
    setOnRound(){
        this.headSnake[0].style.backgroundColor = setColor();
        this.headSnake[0].style.width = Round.getDimension("snake")[0]+'px';
        this.headSnake[0].style.height = Round.getDimension("snake")[1]+'px';
        this.headSnake[0].style.position = 'relative';
        this.headSnake[0].style.border = '1px solid #00e7ff';
    }
    moveToRound(){
        
        var myChrono = setInterval(() => { 
            this.headSnakePosition_x = this.headSnakePosition_x;
            this.headSnakePosition_y = this.headSnakePosition_y; 
            switch (this.direction) {   
                case 'ArrowLeft':
                    if(this.headSnakePosition_x >= -400){
                        this.headSnakePosition_x -= 20;
                        if(this.headSnakePosition_x == -420){
                            this.headSnakePosition_x = 400;
                            this.headSnake[0].style.left = this.headSnakePosition_x+'px';
                        }             
                    }
                       break;
                case 'ArrowRight':
                    if(this.headSnakePosition_x <= 400){
                        this.headSnakePosition_x += 20;
                        if(this.headSnakePosition_x == 420){
                            this.headSnakePosition_x = -400;
                            this.headSnake[0].style.left = this.headSnakePosition_x+'px';
                        }                                              
                    }
                    break; 
                case 'ArrowDown':
                    if(this.headSnakePosition_y <= 240){
                        this.headSnakePosition_y += 28;
                        if(this.headSnakePosition_y >= 264){
                            this.headSnakePosition_y = -238;
                            this.headSnake[0].style.top = this.headSnakePosition_y+'px';
                        }
                    }
                    break;  
                case 'ArrowUp':
                    if(this.headSnakePosition_y >= -240){
                        this.headSnakePosition_y -= 28;
                        if(this.headSnakePosition_y <= -264){
                            this.headSnakePosition_y = 238;
                            this.headSnake[0].style.top = this.headSnakePosition_y+'px';
                        }
                    }
                    break;    
                default:
                    break;
            }
                this.headSnake[0].style.left = this.headSnakePosition_x+'px';
                this.headSnake[0].style.top = this.headSnakePosition_y+'px';
            }, 200);
    }
        snakeDetails(){
            // console.log(this.headSnake[0]);
        }
}
//INITIALIZE AND CREATE THE FOOD OF SNAKE:
class Food{
    constructor() {
        const allFoods=['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🥜']
        }
        defineColor(){

        }
        Random(){

        }
}
//SET THE ROUND ON THE SCREEN 
Round.setOnscreen();
// SET THE CHRONO ON THE SCREEN
Chrono.setOnround();
// CREATE AN INSTANCE OF SNAKE
let snake = new Snake('red',1,2);
snake.snakeDetails();
// SET THE SNAKE ON ROUND
snake.setOnRound();
// MOVE SNAKE TO
snake.moveToRound();
// GET THE KEYBOARD DIRECTION
getKeyboardPress();


