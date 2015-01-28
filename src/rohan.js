debugger;
var numberOfPages = document.querySelector("td.specialtext:nth-child(2)").childNodes[0].nodeValue.match(/Pages \(\d+\)/)[0].match(/\d+/)[0];
var randomPage = Math.floor(Math.random() * numberOfPages) + 1;

var parser = new DOMParser()
var doc = parser.parseFromString(getRandomPage(), "text/xml");

getRandomManga(doc);

function getRandomPage(){
    return httpGet(window.location.href.replace(/page=\d+/, "page=" + randomPage).replace(/perpage=\d+/, "perpage=100"));
}

function getRandomManga(doc){
    var links = doc.querySelectorAll("a[alt='Series Info']");
    console.log(links);
    window.location.href = links[Math.floor((Math.random() * links.length))];
}

function httpGet(theUrl){
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else {
        // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false);
    xmlhttp.send();
}
