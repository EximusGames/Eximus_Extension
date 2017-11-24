var load_btn = document.getElementById("load-btn");
var holder = document.getElementById("holder");
var i = 0;

load_btn.addEventListener("click", function(){
    var newsRequest = new XMLHttpRequest();
    newsRequest.open("GET", "https://rawgit.com/eximusgames/Eximus_Extension/master/Json/news.json");
    newsRequest.onload = function () {
        var newsData = JSON.parse(newsRequest.responseText);
        fetchHTML(newsData);
    }
    newsRequest.send();
});

function fetchHTML(data){
    var count = 0;
    for(i; count <= 3; i++){
        var htmlStringLink =                 '<a href="'+ data[i].link + '" target="_blank">';
        var htmlStringFirstDiv =             '<div class="row middle-xs middle-sm middle-md middle-lg message-content">';
        var htmlStringSecoundDiv =           '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 showcase-image">';
        var htmlStringI =                    '<i class="fa ' + data[i].icon +'"></i>';
        var htmlStringCloseSecoundDiv =      '</div>';
        var htmlStringThirdDiv =             '<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">';
        var htmlStringArgument =             '<h1>' + data[i].main_title + '</h1>' + '<h2>' + data[i].descripction +'</h2>' + '<h3>' + data[i].time +'</h3>';
        var htmlStringCloseThirdDiv =        '</div>';
        var htmlStringCloseFirstDiv =        '</div>';
        var htmlStringCloseLink =            '</a>';

        htmlString = htmlStringLink + htmlStringFirstDiv + htmlStringSecoundDiv + 
        htmlStringI + htmlStringCloseSecoundDiv + htmlStringThirdDiv + htmlStringArgument + 
        htmlStringCloseThirdDiv + htmlStringCloseFirstDiv + htmlStringCloseLink;

        holder.insertAdjacentHTML("beforeend",htmlString);
    } count = 0;
}