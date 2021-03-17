var insults = [
    "what the fuck are you thinking", 
    "dumbass", 
    "fuck you, that question sucks",
    "fuck you for asking", 
    "now fuck off",
    "why did you fucking ask", 
    "are you retarded",
    "I'd rather answer anything the fuck else", 
    "I'm going to hell for answering this",
    "fuck me sideways, that was easy", 
    "do you have anything better to do", 
    "your life is so miserable you're asking a machine about your problems, what a fucking waste of space",
    "why do you waste your time like this", 
    "you're an asshole for asking",
    "back to reddit, cuhck",
    "since you love wasting time so much, have this, uh like uh grapes uh young uh jackal uh US uh, 10 9 5 6 8 look behind you UHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUHUH 18 uh naked cowboys in the showers at uhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuhuh EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE intergalactic planetary EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE help me RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR i'm going to recite the bee movie script RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR ligma balls, bee movie time, According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway. Because bees don’t care what humans think is impossible.” SEQ. 75 - “INTRO TO BARRY” INT. BENSON HOUSE - DAY ANGLE ON: Sneakers on the ground. Camera PANS UP to reveal BARRY BENSON’S BEDROOM ANGLE ON: Barry’s hand flipping through different sweaters in his closet. BARRY Yellow black, yellow black, yellow black, yellow black, yellow black, yellow black...oohh, black and yellow... ANGLE ON: Barry wearing the sweater he picked, looking in the mirror. BARRY (CONT’D) Yeah, let’s shake it up a little. He picks the black and yellow one. He then goes to the sink, takes the top off a CONTAINER OF HONEY, and puts some honey into his hair. He squirts some in his mouth and gargles. Then he takes the lid off the bottle, and rolls some on like deodorant. CUT TO: INT. BENSON HOUSE KITCHEN - CONTINUOUS Barry’s mother, JANET BENSON, yells up at Barry. ok fuck it i'm bored",
    "go outside, get a life",
    "there has to be a book more interesting than this",
    "do the world a favor and stop wasting your time here",
    "get laid or something"
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(19));
  }

  var seed = getRandomInt()

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
    msg.text = insults[seed];
    window.speechSynthesis.speak(msg);

}

