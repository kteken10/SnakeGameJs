// DEFINE COLOR OF CHRONO COUNT:
const color = ['white', 'red', 'yellow','green'];
// SET PARAMETER OF ROUND TO PLAY:
var round =document.querySelector('#container');
const Round={
    width:(window.innerWidth)*0.6+'px',
    height:(window.innerHeight)*3+'px',
    setOnscreen:roundSet=>{
        round.style.width=Round.width;
        round.style.height=Round.height;
    },
    getDimension:dimens=>{
        return [Round.width, Round.height]
    }
}
// CREATE THE CHRONO OBJECT AND INITIALIZE IT:
const Chrono={
    width :  (window.innerWidth)/20+'px',
    height : (window.innerHeight)/10+'px',
    setOnround  : roundSet=>{
        let chrono = document.createElement("div");
        chrono.id   =  'chrono';
        round.appendChild(chrono);
        let  getDimension=    Round.getDimension();
        chrono.style.marginLeft =  0+'px';
        chrono.style.marginTop  =  0+'px';
        var chrono_start    =0;
        var chrono_end  =4;
       
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

//INITIALIZE AND CREATE THE SNAKE

class Snake{
    constructor(color,position_x,position_y) {
        this.elem=document.createElement('div');
        this.elem.id="snake";
        this.color = color;
        this.position_x = position_x;
        this.position_y = position_y;
        }

    
        defineColor(){

        }
        mooveSnake(){

        }
        snakeDetails(){
            console.log(this.elem.id);
        }
}
//INITIALIZE AND CREATE THE FOOD OF SNAKE
class Food{
    constructor(color,position_x,position_y) {
        this.elem=document.createElement('div');
       
        this.color = color;
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
snake = new Snake('red',1,2);
snake.snakeDetails()
// var chrono=new Chrono('chrono1',dimens.ledposition_x,dimens.ledposition_y);
