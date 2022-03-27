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

  if (textInput == "Rowdy what day is it") {
    // diagnostic.textContent = textInput;
    todaystime.text(
      date.toLocaleString("en-us", { weekday: "long" }) +
        ", " +
        date.toLocaleString("en-us", { month: "long" }) +
        ", " +
        date.getDate()
    );
    recognition.stop();
  }

  if (textInput == "Rowdy what time is it") {
    todaystime.text(
      date.toLocaleString("en-us", { hour: "2-digit", minute: "2-digit" })
    );
    recognition.stop();
  }
  if (textInput == "Rowdy tell me a joke") {
    todaystime.text("I'm not smart, i'm just artficially Intelligent");
    recognition.stop();
  }
  if (textInput == "Rowdy write a message") {
    console.log("inside if");
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    content += transcript;
    textbox.val(content);
    recognition.continuous = true;
  }
};

$("#start-btn").click(function (event) {
  if (content.length) {
    content += "";
  }

  recognition.start();
});
$("#stop-btn").click(function (event) {
  if (content.length) {
    content += "";
  }

  recognition.stop();
});
