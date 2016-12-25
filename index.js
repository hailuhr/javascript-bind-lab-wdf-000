const app = "I don't do much.";


function censor(word, string) {
  // return string.replace(`${word}`, "BLEEP")
  // debugger;
  var txt= new RegExp(`${word}`, "g");
  var newString = string.replace(txt, "BLEEP")
  return newString
};

const violenceCensor = censor.bind(null, "violence");


const drugsCensor = censor.bind(null, "drugs");


var digitalClock = {
  time: Math.round(Date.now() / 1000),

  startTicking() {
    setInterval(function(){
      this.time++
    }.bind(this), 1000)
  }

  // ^^ bind vs vv arrow
  
  // setInterval(() => this.time++, 1000)

}
