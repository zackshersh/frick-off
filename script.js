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
            watsonKeyword = parsed.keywords[0].text
            console.log(watsonKeyword)

        }};
    
    // var data = `{
    //     "text": "Should I get a dog?",
    //     "features": {
    //     "keywords": {
    //         "limit": 3
    //     }
    //     }
    // }`;

    
    var data = `{
        "text": "`+question+`",
        "features": {
        "keywords": {
            "limit": 1
        }
        }
    }`;
    
    xhr.send(data);

}


function ballResponse(){

}

var insults = [
    "no, that's a fucking stupid idea", "what the fuck are you thinking, no", "no, dumbass",
    "fuck that, no", "fuck you, that question sucks","sure, but fuck you for asking", "yes, now fuck off",
    "yes, why did you fucking ask", "are you retarded, yes"
]



function shuffle(insults) {
    var ctr = insults.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index

        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = insults[ctr];
        insults[ctr] = insults[index];
        insults[index] = temp;
    }
    
    return insults;
}

const yesNoResponse = yesOrNo
yesNoResponse.replace("fuck", watsonResponse)


//document.getElementById("ans").textContent = answer;
