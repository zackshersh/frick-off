var inputForm = $("#user-questions")
var textInput = inputForm.children('input')
var submitBtn = inputForm.children('button')

submitBtn.on('click',function(event){
    event.preventDefault();
    getResponse()
        .then(res => {
            return { first: res, second: watsonApi(textInput[0].value) }
        }).then(both => {
            console.log(both)
            console.log('hello')
        })

    // responseChecker()

})

var yesOrNo;
var watsonKeyword;

const API_url= 'https://yesno.wtf/api'
async function getResponse() {
        const response = await fetch(API_url);
        const data = await response.json();
        const { answer, image} = data;
        yesOrNo = answer;
        console.log(answer)

        return data.answer
            
    }




function watsonApi(question){
    console.log(question)
    //Did not want to use xhr but couldnt figure out how to send the watson specific url and apikey with fetch or ajax
    var url = "https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/7cb89b9f-38db-412a-8c0f-2d5e93e53386/v1/analyze?version=2019-07-12";
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Basic YXBpa2V5OnNOLXA0R0wxZDFmLUIyZlVRdkZNRXlSQkprVkRuMzZlc0ZFM2ZWTUpWQzlY");
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var data = xhr.responseText
            var parsed = JSON.parse(data)
            console.log(parsed)
            if (parsed.keywords.length > 0) {
                watsonKeyword = parsed.keywords[0].text
                console.log(watsonKeyword)
                console.log(yesOrNo)
            } else {
                watsonKeyword = "nada"
                console.log("no keyword")
            }

            
            
            //RESPONSE CODE LAUNCHED FROM HERE BECAUSE BOTH APIS HAVE RESPONDED BY THE TIME THIS CODE IS REACHED
            response()


        }};
    
        
    var data = `{
        "text": "`+question+`",
        "features": {
        "keywords": {
            "limit": 3
        }
        }
    }`;

    // var data = `{
    //     "text": "`+question+`",
    //     "features": {
    //     "semantic_roles": {}
    //     }
    // }`;
    
    xhr.send(data);
}

var yesResponsesKeyword = [`"Yes you idiot, " + word + "s are great."`, `"Yes, you f*cking moron " + word + "s are the bomb, you'd make it dumb though."`]

var noResponsesKeyword = [`"No, Are you kidding me? You and a " + word + " is the dumbest combination of things I've ever heard"`, `"No, never, you suck way too much for a " + word`]

var yesResponsesNoKey = ["yes, now f*ck off", "sure, but f*ck you for asking", "god you're dumb, yes, of course"]

var noResponsesNoKey = ["No, that's a f*cking stupid idea","What the f*ck are you thinking, no", "no.dumbass"]



function response(){

    var word = watsonKeyword

    var responsePhrase;

    if (watsonKeyword == "nada"){
        if (yesOrNo == "yes"){
            console.log("RESPONSE ANSWER:")
            console.log(yesResponsesNoKey[rndmNum(yesResponsesNoKey.length)])
            responsePhrase = yesResponsesNoKey[rndmNum(yesResponsesNoKey.length)]
        } else {
            console.log("RESPONSE ANSWER:")
            console.log(noResponsesNoKey[rndmNum(noResponsesNoKey.length)])
            responsePhrase = noResponsesNoKey[rndmNum(noResponsesNoKey.length)]
        }
    } else {
        if (yesOrNo == "yes"){
            console.log("RESPONSE ANSWER:")
            console.log(eval(yesResponsesKeyword[rndmNum(yesResponsesKeyword.length)]))
            responsePhrase = eval(yesResponsesKeyword[rndmNum(yesResponsesKeyword.length)])
        } else {
            console.log("RESPONSE ANSWER:")
            console.log(eval(noResponsesKeyword[rndmNum(noResponsesKeyword.length)]))
            responsePhrase = eval(noResponsesKeyword[rndmNum(noResponsesKeyword.length)])
        }
    }


    //     event.preventDefault();

//     console.log("submitted")

    char.state = "talk"
    char.phrase = responsePhrase

    setTimeout(function(){
        clearInterval(interval)
        char.state = "walk"
    }, 5000)

}

function rndmNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  