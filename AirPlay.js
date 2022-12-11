// DEFINE COLOR OF CHRONO COUNT:
const color = ['white', 'red', 'yellow','green'];
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

// FUNCTION TO RANDOM COLOR OF SNAKE AND FOOD

function   setColor(){
    const color = ['red','green','blue','yellow','purple','orange','pink'];
    choice_color = color [Math.round(Math.random()*color.length-1)]
    return choice_color;      
}

//FUNCTION TO RETURN THE KEYBOARD KEY PRESSED:
function getKeyboardPress(){
   
}

class Snake{
    
    constructor() {
        this.headSnake=[document.createElement('div')];
        round.appendChild(this.headSnake[0]);
        this.headSnake[0].id="snake";
        this.direction ='gauche';
        this.position_x = 400;
        this.position_y = 238;
        this.headSnake[0].style.left=this.position_x+'px';
        this.headSnake[0].style.top=this.position_y+'px';
       
    }
    getDimension(){ 
        const width = this.headSnake[0].style.width.replace('px', '');
        const height = this.headSnake[0].style.height.replace('px', '');
        return { width: width, height: height };
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
            this.position_x = this.position_x;
            this.position_y = this.position_y; 
            switch (this.direction) {   
                case 'gauche':
                    if(this.position_x >= -400){
                        this.position_x -= 20;
                        if(this.position_x == -420){
                            this.position_x = 400;
                            this.headSnake[0].style.left = this.position_x+'px';
                        }             
                    }
                       break;
                case 'droite':
                    if(this.position_x <= 400){
                        this.position_x += 20;
                        if(this.position_x == 420){
                            this.position_x = -400;
                            this.headSnake[0].style.left = this.position_x+'px';
                        }                                              
                    }
                    break; 
                case 'bas':
                    if(this.position_y <= 240){
                        this.position_y += 28;
                        if(this.position_y >= 264){
                            this.position_y = -238;
                            this.headSnake[0].style.top = this.position_y+'px';
                        }
                    }
                    break;  
                case 'haut':
                    if(this.position_y >= -240){
                        this.position_y -= 28;
                        if(this.position_y <= -264){
                            this.position_y = 238;
                            this.headSnake[0].style.top = this.position_y+'px';
                        }
                    }
                    break;    
                default:
                    break;
            }
                this.headSnake[0].style.left = this.position_x+'px';
                this.headSnake[0].style.top = this.position_y+'px';
            }, 500);
    }
        snakeDetails(){
            console.log(this.headSnake[0]);
        }
}
//INITIALIZE AND CREATE THE FOOD OF SNAKE
class Food{
    constructor(position_x,position_y) {
        // this.headSnake[0]=document.createElement('div');
        this.position_x = position_x;
        this.position_y = position_y;
        }
        defineColor(){

        }
        mooveSnake(){

        }
}
Round.setOnscreen();
Chrono.setOnround();
let snake = new Snake('red',1,2);
snake.snakeDetails();
snake.setOnRound();
snake.moveToRound();
// var chrono=new Chrono('chrono1',dimens.ledposition_x,dimens.ledposition_y);

