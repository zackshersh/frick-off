var c;
var ctx;

console.log("hello")

var char = {
    posX: 200,
    posY: 0,
    state: "walk",
    walkDir: "left",
    walkChng: 4,
    height: 128,
    width: 64
}

function init(){
    c = document.getElementById("canv")
    c.width = 600;
    c.height = 300;
    ctx = c.getContext('2d')

    setInterval(function(){
        charecterDraw()
    },100)

    char.posY = c.height-char.height


}


//the animation frames for dif states are stored here
var wFr = [document.getElementById("walk-1"),document.getElementById("walk-2"),document.getElementById("walk-3"),document.getElementById("walk-4"),document.getElementById("walk-5"),]


var frCnt = 0;

function charecterDraw(){


    ctx.clearRect(0,0,c.width,c.height)

    ctx.beginPath()
    ctx.rect(0,0,c.width,c.height);
    ctx.fillStyle = "#ffe400";
    ctx.closePath()
    ctx.fill();

    //Code that changes location and animations given the state of the charecter
    if(char.state == "idle"){
        ctx.rect(char.posX,char.posY,char.width,char.height);
        ctx.strokeStyle = "blue"
        ctx.stroke()
    } else if (char.state == "walk") {
        
        if (frCnt >= wFr.length){
            console.log('over')
            frCnt = 0
        }

        if (char.walkDir == "left"){
            char.posX -= char.walkChng
            ctx.drawImage(wFr[frCnt],char.posX,char.posY);
        } else if (char.walkDir == "right"){
            char.posX += char.walkChng;
            ctx.drawImage(wFr[frCnt],char.posX,char.posY);
        }




        frCnt++;

    } else if (char.state == "watch") {

    } else if (char.state == "answer") {

    }
}


init()