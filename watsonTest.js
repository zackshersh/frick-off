
function watsonApi(question){
//     fetch("https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/7cb89b9f-38db-412a-8c0f-2d5e93e53386/v1/analyze?version=2019-07-12", {
//   body: "{\"url\\\":\\\"http://newsroom.ibm.com/Guerbet-and-IBM-Watson-Health-Announce-Strategic-Partnership-for-Artificial-Intelligence-in-Medical-Imaging-Liver\\\",\\\"features\\\":{\\\"sentiment\\\":{},\\\"categories\\\":{},\\\"concepts\\\":{},\\\"entities\\\":{},\\\"keywords\\\":{}}}",
//   headers: {
//     Authorization: "Basic YXBpa2V5OnNOLXA0R0wxZDFmLUIyZlVRdkZNRXlSQkprVkRuMzZlc0ZFM2ZWTUpWQzlY",
//     "Content-Type": "application/json"
//   },
//   method: "POST"
// })

var url = "https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/7cb89b9f-38db-412a-8c0f-2d5e93e53386/v1/analyze?version=2019-07-12";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Basic YXBpa2V5OnNOLXA0R0wxZDFmLUIyZlVRdkZNRXlSQkprVkRuMzZlc0ZFM2ZWTUpWQzlY");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
  "text": "Should I get a dog?",
  "features": {
    "keywords": {
      "limit": 3
    }
  }
}`;

xhr.send(data);


}

watsonApi()

