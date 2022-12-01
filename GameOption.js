class Chrono{
    constructor(elem,position_x,position_y){
        this.elem=document.createElement("div");
        this.id=this.elem.id=elem;
        this.position_x=this.elem.style.marginLeft=position_x+ 'px';
        this.position_y=this.elem.style.marginTop=position_y+ 'px';  
    }
    setChrono(){
       
        var myChrono = setInterval(() => {
        let led=this.elem;
        document.querySelector('.container').appendChild(led);
        led.style.backgroundColor =color[Math.round(Math.random(0,1)*5)];
        led.style.width = dimens.width + 'px';
        led.style.height = dimens.height + 'px';
        console.log(led)
    }, 1000);
    }
}
var chrono=new Chrono('chrono1',100,100);
chrono.setChrono();