var speechRec = window.webkitSpeechRecognition;

var recognition = new speechRec();

var textbox = $("#textbox");

var instructions = $("#instructions");
var todaystime = $("#todaystime");

var diagnostic = document.querySelector(".output");

var content = "";

var date = new Date();

recognition.continuous = true;
// recognition.continuous = false;
// recognition.continuous = false;
// recon
recognition.onstart = function () {
  instructions.text("Voice Recognition is on");
  //   todaystime.text(date.toLocaleString("en-us", { weekday: "long" }));
};

recognition.onspeechend = function () {
  instructions.text("No Activity");
};
recognition.onerror = function () {
  instructions.text("Try Again");
};

// recognition.onresult = function () {
//   var current = event.resultIndex;
//   var transcript = event.results[current][0].transcript;
//   content += transcript;
//   textbox.val(content);
// };
recognition.onresult = function () {
  //   recognition.continuous = false;
  var textInput = event.results[0][0].transcript;
  //   diagnostic.textContent = "Result received: " + textInput + ".";
  console.log(textInput);

  if (
    textInput == "rowdy what day is it" ||
    textInput == "Rowdy what day is it"
  ) {
    // diagnostic.textContent = textInput;

    let todaysTime =
      date.toLocaleString("en-us", { weekday: "long" }) +
      ", " +
      date.toLocaleString("en-us", { month: "long" }) +
      ", " +
      date.getDate();
    todaystime.text(todaysTime);
    let utterance = new SpeechSynthesisUtterance(todaysTime);
    speechSynthesis.speak(utterance);

    recognition.stop();
  }

  if (
    textInput == "rowdy what time is it" ||
    textInput == "Rowdy what time is it"
  ) {
    let timeToday = date.toLocaleString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
    });
    todaystime.text(timeToday);
    let utterance = new SpeechSynthesisUtterance(timeToday);
    speechSynthesis.speak(utterance);
    recognition.stop();
  }
  if (
    textInput == "rowdy tell me a joke" ||
    textInput == "Rowdy tell me a joke"
  ) {
    let joke = returnJoke();
    todaystime.text(joke);
    let utterance = new SpeechSynthesisUtterance(joke);
    speechSynthesis.speak(utterance);
    recognition.stop();
  }
  if (
    textInput == "rowdy write a message" ||
    textInput == "Rowdy write a message"
  ) {
    console.log("inside if");
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    content += transcript;
    textbox.val(content);
    recognition.continuous = true;
  }
};
// return a random bubbles color
function returnJoke() {
  let num = Math.random();
  // 50% of jokes
  if (num < 0.4) {
    return "I'm not smart, i'm just artficially Intelligent";
    // 50% of jokes
  } else if (num < 0.6) {
    return "Knock knock... Who’s, there?.. Interrupting cow... Interrupting c– MOO!";
    // 50% of jokes
  } else if (num < 0.8) {
    return "I just saw my life flash before my eyes and all I could see was a close tag…";
    // 50% of jokes
  } else {
    return "Debugging: Removing the needles from the haystack.";
  }
}

$("#start-btn").click(function (event) {
  if (content.length) {
    content += "";
  }
  //   let utterance = new SpeechSynthesisUtterance("Hello world!");
  //   speechSynthesis.speak(utterance);
  recognition.start();
});
$("#stop-btn").click(function (event) {
  if (content.length) {
    content += "";
  }

  recognition.stop();
});
