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
    width: 128,
    phrase: "",
}

var scene = {
    bd: 70,
}

var otherElemH;

function init(){

    c = document.getElementById("canv")
    console.log($("main")[0])
    c.width = $("main")[0].offsetWidth - 40
    c.height = 600;

    c.width = window.innerWidth
    c.height = window.innerHeight

    char.posY = c.height-char.height

    // var mainH = $("main")[0].getBoundingClientRect().height;
    // var canvH =  c.getBoundingClientRect().height;
    // otherElemH =  mainH - canvH;
    // c.height = window.innerHeight - otherElemH - (window.innerHeight/20);
    // console.log(mainH, canvH)
    // console.log(c.height)




    var mainB = $("main")[0].getBoundingClientRect().bottom;

    if (mainB > char.posY){
        char.height = char.height/2
        char.width = char.width/2
        char.posY = c.height-char.height
        char.walkChng = char.walkChng/2
        scene.bd = 40
    }

    ctx = c.getContext('2d')

    var canvClock = setInterval(function(){
        ctx.clearRect(0,0,c.width,c.height)
        sceneDraw()
        charecterDraw()
    },120)

    ctx.imageSmoothingEnabled = false



}

// document.addEventListener("keydown",function(event){
//     console.log(event.key)
//     if (event.key == "ArrowLeft"){
//         char.walkDir = "left"
//     } else if (event.key == "ArrowRight"){
//         char.walkDir = "right"
//     } else if (event.key == "ArrowUp"){
//         char.posY -= 2
//     } else if (event.key == "ArrowDown"){
//         char.posY += 2
//     }
// })


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
        
        $("#response").remove()
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

        if (frCntTalk == 1){
            $("#response").remove()
            var resposneDiv = $("<div>")
            resposneDiv.css("position","absolute")
            resposneDiv.css("left",char.posX+110)
            resposneDiv.css("top",char.posY+otherElemH-30)
            resposneDiv.attr("id","response")
            resposneDiv.css("background-color","black")
            resposneDiv.css("border","2px solid black")
            resposneDiv.css("border-radius","10px")
            resposneDiv.css("color","white")
            resposneDiv.css("padding","10px")
            resposneDiv.text(char.phrase)
            $("main").append(resposneDiv)
        }

        setTimeout(function(){
            clearInterval(interval)
            char.state = "walk"
        }, 5000)


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
// submitBtn.on("click",function(event){
//     event.preventDefault();

//     console.log("submitted")

//     char.state = "talk"

//     setTimeout(function(){
//         clearInterval(interval)
//         char.state = "walk"
//     }, 5000)
// })




init()


var pageMain = $("main")
var pgMainElem = pageMain[0]

function layoutInit(){
    pageMain.css("left", scene.bd+20)
    pageMain.css("top", scene.bd+20)
    pageMain.css("width", (window.innerWidth-(scene.bd*2)-40))
}

layoutInit()



//this function handles reloading the page on page resize so things are better fit

window.onresize = resize

var resizeCountdown = 5;
var counting = false

function resize(){

    // console.log('resizing')
    resizeCountdown = 5
    
    if (counting == false){
        setTimeout(function(){
            counting = true;
            // console.log(resizeCountdown)
            resizeCountdown--;
            if (resizeCountdown <= 0){
                location.reload();
            }
        }, 1000)
    }

}