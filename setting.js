const settings = {
  async: true,
  crossDomain: true,
  url: "https://voicerss-text-to-speech.p.rapidapi.com/?key=undefined",
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  },
  data: {
    src: "Hello, world!",
    hl: "en-us",
    r: "0",
    c: "mp3",
    f: "8khz_8bit_mono",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
