debugger;

var jqScript = document.createElement("script");
jqScript.src = "//code.jquery.com/jquery-1.11.3.min.js";
document.head.appendChild(jqScript);

var done = false;
jqScript.onload = jqScript.onreadystatechange = function(){
    if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
        
        $.get(getRandomPage(), function(data) {
            getRandomManga(data);
        });
    }
};

function getRandomPage() {
    var resultURL = window.location.href;

    var numberOfPages = document.querySelector("td.specialtext:nth-child(2)").childNodes[0].nodeValue.match(/Pages \(\d+\)/)[0].match(/\d+/)[0];
    var randomPage = Math.floor(Math.random() * numberOfPages) + 1;

    if(resultURL.indexOf("?page=") > -1 || resultURL.indexOf("&page=") > -1 ) {
        resultURL = resultURL.replace(/page=\d+/, "page=" + randomPage);
    } else {
        resultURL = resultURL + "&page=" + randomPage;
    }

    return resultURL;
}

function getRandomManga(url) {
    var parser = new DOMParser()
    var doc = parser.parseFromString(url, "text/html");

    var links = doc.querySelectorAll("a[alt='Series Info']");
    window.location.href = links[Math.floor((Math.random() * links.length))];
}
