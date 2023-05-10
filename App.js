const getMailto = document.getElementById("mailto-link");
const getEmail = document.getElementById("mailto-adress");
const getImgTech = document.getElementById("tech");
const getImgUI = document.getElementById("UI-design");
const getImgPython = document.getElementById("python3");
const getImgSoftware = document.getElementById("software-knowledge");
const getClock = document.getElementById("clock");
function decodeB64(str, encode) {
  encode = atob(str);
  return (window.location.href = "mailto:" + encode);
}
// decodeB64();

function displayClock() {
  const dateToday = new Date();
  let hour = dateToday.getHours();
  let minutes = dateToday.getMinutes();
  let seconds = dateToday.getSeconds();
  hour = checkTime(hour);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  getClock.textContent = `${hour}:${minutes}:${seconds} : ${dateToday.toUTCString()}`;
  setTimeout(displayClock, 1000);
}
function checkTime(i) {
  if (i < 10) {
    {
      i = "0" + i;
    }
  }
  return i;
}

function displayNewPage(url, value) {
  if (value === 1) {
    url = "https://jorgen-kodehode.github.io/Meme-generator/";
    window.open(url, "_blank");
  } else if (value === 2) {
    url = "https://jorgen-kodehode.github.io/Meme-generator/";
    window.open(url, "_blank");
  } else {
    return console.log("Error");
  }
}
