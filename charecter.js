var c;
var ctx;

console.log("hello")

var char = {
    posX: 0,
    posY: 0,
    state: "idle"
}

function init(){
    c = document.getElementById("canv")
    c.width = window.innerWidth;
    c.height = 300;
    ctx = c.getContext('2d')

    ctx.rect(0,0,c.width,c.height);
    ctx.fillStyle = "#ffe400";
    ctx.fill();

}

function charecterDraw(){
    setInterval(function(){
        if(char.state == "idle"){

        }
    }, 60)
}


init()