var numberOfPages = document.querySelector("td.specialtext:nth-child(2) > a:nth-child(6)").href.match(/page=\d+/)[0].match(/\d+/)[0];
console.log(numberOfPages);
var randomPage = Math.floor(Math.random() * numberOfPages) + 1;
console.log(randomPage);

var iframe = document.createElement("IFRAME");
iframe.style.display = "none";
document.body.appendChild(iframe);
iframe.src = getRandomPage();

console.log(iframe.contentWindow.document.innerHTML);

var inter = window.setInterval(function() {
    if (iframe.contentWindow.document.readyState === "complete") {
      window.clearInterval(inter);
      getRandomManga();
    }
}, 100);

function getRandomPage(){
	console.log(window.location.href.replace(/page=\d+/, "page=" + randomPage).replace(/perpage=\d+/, "perpage=100"));
    setTimeout(return window.location.href.replace(/page=\d+/, "page=" + randomPage).replace(/perpage=\d+/, "perpage=100"), 10000);
}

function getRandomManga(){
    var links = iframe.contentWindow.document.querySelectorAll("a[alt='Series Info']");
    console.log(links);
    window.location.href = links[Math.floor((Math.random() * links.length))];
}
