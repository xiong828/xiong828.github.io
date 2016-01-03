
var navBorderBottom = "2px solid rgb(1,188,243)";
var navBorderBottom0 = "2px solid transparent";
var linkColor = "rgb(21,134,196)";
var map = new Object();
map["index.html"] = 0;
map["pub.html"] = 1;
map["sdm.html"] = 2;
map["contact.html"] = 3;





function mouseOn(id,cur) {
    return function() { 
        if (id != cur) {
            var ul = document.getElementById("nav-ul");
            ul.children[id].style.borderBottom = navBorderBottom;
        }
    }
      
}

function mouseOff(id,cur) {
    return function() {
        if (id != cur) {
            var ul = document.getElementById("nav-ul");
            ul.children[id].style.borderBottom = navBorderBottom0;
        }
    }
}


function addEventsToHTML() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page.length === 0)  
        page = "index.html";
    
    var curPage = map[page];
    var navlinks = document.getElementsByClassName("navlink");
    navlinks[curPage].style.color = linkColor;
    var navlists = document.getElementsByClassName("navbar-li");
    navlists[curPage].style.borderBottom = navBorderBottom;
    //console.log(page); 
    //highlightNavBar();
    for (var i = 0; i < navlinks.length; i++) { 
        navlinks[i].onmouseover = mouseOn(i,curPage);
        navlinks[i].onmouseout  = mouseOff(i,curPage);
    }
}


window.onload = addEventsToHTML;
