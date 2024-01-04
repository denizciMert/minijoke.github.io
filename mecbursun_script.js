function nextPage() {
    window.location.href = "evet.html";
}

var gifs = ["https://media.giphy.com/media/OsEUELlzF4lGuchFJQ/giphy.gif",
    "https://media.giphy.com/media/ZIdLWI26SMY0qjRKQT/giphy.gif",
    "https://media.giphy.com/media/WJaeeOEt41YfmUzZOq/giphy.gif",
    "https://media.giphy.com/media/zK6nLVvYJnbEcYbTj6/giphy.gif"];
var initGif = 0;

var headers = ["Hayır Tuşuna mı Basacaktın?",
    "Basamazsın Naz Yapma",
    "Mecburen Seveceksin",
    "Tekrar Deneyecek Misin?"];
var initHeader = 0;

var buttons = ["Kaçtım",
    "Basamazsın",
    "Deneme",
    "Cidden?"];
var initButton = 0;

function changeGif() {
    initGif = (initGif + 1) % gifs.length;
    document.getElementById("gifId").src = gifs[initGif];
}

function changeHeader() {
    initHeader = (initHeader + 1) % headers.length;
    document.getElementById("header1").innerText = headers[initHeader];
}

function changeButton() {
    initButton = (initButton + 1) % buttons.length;
    document.getElementById("noButton").innerText = buttons[initButton];
}

function moveButton() {
    var x =
        Math.random() *
        (window.innerWidth -
            document.getElementById("noButton").offsetWidth) -
        85;
    var y =
        Math.random() *
        (window.innerHeight -
            document.getElementById("noButton").offsetHeight) -
        48;
    document.getElementById("noButton").style.left = `${x}px`;
    document.getElementById("noButton").style.top = `${y}px`;
}

function changeAll() {
    moveButton();
    changeHeader();
    changeGif();
    changeButton();
}

function changeBack() {
    document.getElementById("gifId").src = "https://media.giphy.com/media/8XwtXLnEKbaBwm25Bt/giphy.gif";
    document.getElementById("header1").innerText = "Heh Şöyle Yola Gel!";
    document.getElementById("noButton").innerText = "Gelmem";
}