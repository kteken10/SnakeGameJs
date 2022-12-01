// DEFINE COLOR OF CHRONO COUNT:
const color = ['white', 'red', 'yellow','green'];
// SET PARAMETER OF BRIGHNESS LED:
const dimens = {
    ledposition_x:100+'px',
    ledposition_y:100+'px'
}
// SET PARAMETER OF ROUND TO PLAY:
var round =document.querySelector('#container');
const Round={
    width:(window.innerWidth)*0.6+'px',
    height:(window.innerHeight)*3+'px',
    set:roundSet=>{
        round.style.width=Round.width;
        round.style.height=Round.height;
    }
}
// CREATE THE CHRONO OBJECT AND INITIALIZE IT:
const Chrono={
    width:(window.innerWidth)/40+'px',
    height:(window.innerHeight)/40+'px',
    set:roundSet=>{
        let chrono = document.createElement("div");
        chrono.id='chrono';
        round.appendChild(chrono);
        chrono.style.marginLeft=dimens.ledposition_x;
        chrono.style.marginTop=dimens.ledposition_y;
        var chrono_start=0;
        var chrono_end=4;
        console.log(chrono);
        var myChrono = setInterval(() => { 
            chrono.innerHTML='<h1 id="chrono">'+chrono_start+'</h1>'; 
            chrono.style.backgroundColor=color[chrono_start];
            chrono.style.position="absolute";
            chrono_start+=1;
            if ( chrono_start > chrono_end){
                chrono.remove();
                clearInterval(myChrono);
    
            }
            }, 1200);
        // round.style.width=Round.width;
        // round.style.height=Round.height;
    }
}
Round.set();
Chrono.set();
// var chrono=new Chrono('chrono1',dimens.ledposition_x,dimens.ledposition_y);
