// DEFINE COLOR OF CHRONO COUNT:
const color = ['white', 'red', 'yellow','green'];
// SET PARAMETER OF ROUND TO PLAY:
var round =document.querySelector('#container');
const Round={
    width:(window.innerWidth)*0.6,
    height:(window.innerHeight)*3,
    setOnscreen:roundSet=>{
        round.style.width=Round.width+'px';
        round.style.height=Round.height+'px';
    },
    getDimension:dimens=>{
        // dimens dimension depending of Object what we want to display
       if( dimens == "snake"){
        return [(Round.width)/35, Round.height/60]

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
        var chrono_end = 4;
       
        var myChrono = setInterval(() => { 
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
    console.log(choice_color);
    return choice_color;      
}

//INITIALIZE AND CREATE THE SNAKE




class Snake{
    
    constructor() {
        this.headSnake=[document.createElement('div')];
        round.appendChild(this.headSnake[0]);
        this.headSnake[0].id="snake";
        const snake_parameter = {
            headSnakePosition_x:Round.getDimension("snake")[0],
            headSnakePosition_y:Round.getDimension("snake")[1]
        }
    }

    
   
    setOnRound(){
        this.headSnake[0].style.backgroundColor = setColor();
        this.headSnake[0].style.width = Round.getDimension("snake")[0]+'px';
        this.headSnake[0].style.height = Round.getDimension("snake")[1]+'px';
        this.headSnake[0].style.border = '1px solid blue';
        
    }
    mooveSnake(){

    }
        snakeDetails(){
            console.log(this.headSnake);
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
// var chrono=new Chrono('chrono1',dimens.ledposition_x,dimens.ledposition_y);
