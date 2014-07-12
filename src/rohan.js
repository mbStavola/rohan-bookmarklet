debugger;
var numberOfPages = document.querySelector("td.specialtext:nth-child(2) > a:nth-child(6)").href.match(/page=\d+/)[0].match(/\d+/)[0];
var randomPage = Math.floor(Math.random() * numberOfPages) + 1;

var iframe = document.createElement("IFRAME");
iframe.style.display = "none";
document.body.appendChild(iframe);
setTimeout(function(){iframe.src = getRandomPage()}, 5000);

var inter = window.setInterval(function() {
    if (iframe.contentWindow.document.readyState === "complete") {
      window.clearInterval(inter);
      getRandomManga();
    }
}, 100);

function getRandomPage(){
    return window.location.href.replace(/page=\d+/, "page=" + randomPage).replace(/perpage=\d+/, "perpage=100");
}

function getRandomManga(){
    var links = iframe.contentWindow.document.querySelectorAll("a[alt='Series Info']");
    window.location.href = links[Math.floor((Math.random() * links.length))];
}
