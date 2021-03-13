var c;
var ctx;

console.log("hello")

var char = {
    posX: 200,
    posY: 0,
    state: "walk",
    walkDir: "left",
    walkChng: 20,
    height: 256,
    width: 128
}


function init(){
    c = document.getElementById("canv")
    console.log($("main")[0])
    c.width = $("main")[0].offsetWidth
    c.height = 300;
    ctx = c.getContext('2d')

    setInterval(function(){
        charecterDraw()
    },120)

    ctx.imageSmoothingEnabled = false

    char.posY = c.height-char.height

}

//the animation frames for dif states are stored here
var wFr = [document.getElementById("walk-1"),document.getElementById("walk-2"),document.getElementById("walk-3"),document.getElementById("walk-4"),document.getElementById("walk-5"),]
var wRFr = [document.getElementById("walkR-1"),document.getElementById("walkR-2"),document.getElementById("walkR-3"),document.getElementById("walkR-4"),document.getElementById("walkR-5"),]
var wtchFr = [document.getElementById("watch-1"), document.getElementById("watch-2"), document.getElementById("watch-3")]
var tlkFr = [document.getElementById("talk-1"), document.getElementById("talk-2"), document.getElementById("talk-3"), document.getElementById("talk-4"), document.getElementById("talk-5"), ]


var frCnt = 0;
var frCntWatch = 0;
var frCntTalk = 0;

function charecterDraw(){

    ctx.clearRect(0,0,c.width,c.height)

    ctx.beginPath()
    ctx.rect(0,0,c.width,c.height);
    ctx.fillStyle = "#ffe400";
    ctx.closePath()
    ctx.fill();

    //Code that changes location and animations given the state of the charecter
    if (char.state == "walk") {
        

        if (frCnt >= wFr.length){
            console.log('over')
            frCnt = 0
        }

        if(char.posX < 0){
            char.walkDir = "right"
        } else if ((char.posX+char.width) > c.width){
            char.walkDir = "left"
        }

        if (char.walkDir == "left"){
            char.posX -= char.walkChng
            ctx.drawImage(wFr[frCnt],char.posX,char.posY,char.width,char.height);
        } else if (char.walkDir == "right"){
            char.posX += char.walkChng;
            ctx.drawImage(wRFr[frCnt],char.posX,char.posY,char.width,char.height);
        }

        frCnt++;

        frCntWatch = 0;
        frCntTalk = 0;

    } else if (char.state == "watch") {

        if (frCntWatch >= wtchFr.length-1){
            frCntWatch = wtchFr.length-1
        }

        ctx.drawImage(wtchFr[frCntWatch],char.posX,char.posY,char.width,char.height)

        frCntWatch++;

    } else if (char.state == "talk") {
        if (frCntTalk >= tlkFr.length){
            frCntTalk = 0
        }


        ctx.drawImage(tlkFr[frCntTalk],char.posX,char.posY,char.width,char.height)

        frCntTalk++;

    }
}

var countDown;
var waiting = false;
var interval = 0;

textInput.on("input",function(){

    char.state = "watch";
    countDown = 30

    if(waiting == false) {
        interval = setInterval(function(){
            waiting = true;
            countDown--;
            if (countDown <= 0 && char.state != "talk"){
                char.state = "walk"
                countDown = 0;
                clearInterval(interval);
                waiting = false
            }
        },100)
    }

})

submitBtn.on("click",function(event){
    event.preventDefault();

    console.log("submitted")

    char.state = "talk"

    setTimeout(function(){
        clearInterval(interval)
        char.state = "walk"
    }, 5000)
})





init()
