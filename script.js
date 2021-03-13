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
function speech(){
    var msg = new SpeechSynthesisUtterance();
    shuffle(insults);
    msg.text = insults[0];
    window.speechSynthesis.speak(msg);

}