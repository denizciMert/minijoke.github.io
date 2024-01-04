var gifs = ["https://media.giphy.com/media/ryL7JeWS2lmMfby9IY/giphy.gif",
    "https://media.giphy.com/media/Ftp2R3N3SXi7arGTVf/giphy.gif",
    "https://media.giphy.com/media/FJ8VKLyQFZkykU4vV3/giphy.gif",
    "https://media.giphy.com/media/o0MwvmkUdgGPvnIKch/giphy.gif",
    "https://media.giphy.com/media/ZWJzjThtBpWHT96sZw/giphy.gif",
    "https://media.giphy.com/media/Jy5FVxqIQRbgYrZpLc/giphy.gif",
    "https://media.giphy.com/media/BivPT6sMJgLU26SSic/giphy.gif"];
var initGif = 0;

function changeGif() {
    initGif = (initGif + 1) % gifs.length;
    document.getElementById("gifId").src = gifs[initGif];
}

setInterval(changeGif, 2000);

function backPage() {
    window.location.href = "index.html";
}