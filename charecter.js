var c;
var ctx;

console.log("hello")

var char = {
    posX: 200,
    posY: 0,
    state: "walk",
    walkDir: "left",
    walkChng: 24,
    height: 256,
    width: 128
}

var scene = {
    bd: 70,
}


function init(){
    c = document.getElementById("canv")
    console.log($("main")[0])
    c.width = $("main")[0].offsetWidth
    c.height = 600;
    ctx = c.getContext('2d')

    setInterval(function(){
        ctx.clearRect(0,0,c.width,c.height)
        sceneDraw()
        charecterDraw()
    },120)

    ctx.imageSmoothingEnabled = false

    char.posY = c.height-char.height

}

document.addEventListener("keydown",function(event){
    console.log(event.key)
    if (event.key == "ArrowLeft"){
        char.walkDir = "left"
    } else if (event.key == "ArrowRight"){
        char.walkDir = "right"
    } else if (event.key == "ArrowUp"){
        char.posY -= 2
    } else if (event.key == "ArrowDown"){
        char.posY += 2
    }
})


function sceneDraw(){

    ctx.beginPath()
    ctx.rect(0,0,c.width,c.height)
    ctx.stroke();
    ctx.fillStyle = "#ffe400"
    ctx.fill();
    ctx.closePath();

    ctx.moveTo(0,0);
    ctx.lineTo(scene.bd,scene.bd);
    ctx.moveTo(c.width,0);
    ctx.lineTo(c.width-scene.bd,scene.bd);
    ctx.moveTo(0,c.height);
    ctx.lineTo(scene.bd,c.height-scene.bd);
    ctx.moveTo(c.width,c.height);
    ctx.lineTo(c.width-scene.bd,c.height-scene.bd);

    ctx.rect(scene.bd,scene.bd,c.width-(scene.bd*2),c.height-(scene.bd*2))
    ctx.lineWidth = 2
    ctx.strokeStyle = "black"
    ctx.fillStyle = "#ffe400"
    ctx.fill();
    ctx.stroke();

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

    //Code that changes location and animations given the state of the charecter
    if (char.state == "walk") {
        

        if (frCnt >= wFr.length){
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


        // loops through charecter pixels to turn from white to dif color
        // var imageData = ctx.getImageData(char.posX,char.posY,char.width,char.height);
        // var data = imageData.data
        // for (var i=0;i<data.length;i+=4){
        //     data[i] = 0
        // }
        // ctx.putImageData(imageData,char.posX,char.posY)
        // ctx.globalCompositeOperation = "source-atop"

}

var countDown;
var waiting = false;
var interval = 0;


//action when inputting text, switches state to watch and starts a countdown after which goes back to walking, coiuntdown reset on keystroke
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

//when button is pressed charecter switches to talk state for 5 seconds 
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
