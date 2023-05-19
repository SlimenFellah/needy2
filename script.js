
ScrollReveal().reveal('#hero');
ScrollReveal().reveal('#second');
ScrollReveal().reveal('#third');
ScrollReveal().reveal('#fourth');
ScrollReveal().reveal('#fifth');
ScrollReveal().reveal('#footer');

var downloadSection = document.getElementById("download")
var bigContainer = document.getElementById("bigContainer")
function showDownload(){
    downloadSection.classList.remove("hidden")
    bigContainer.classList.remove("blur-none")
    downloadSection.classList.add("fixed")
    bigContainer.classList.add("blur-md")
}
function hideDownload(){
    if (downloadSection.classList.contains("fixed")){
        
        downloadSection.classList.remove("fixed")
        bigContainer.classList.remove("blur-md")
        downloadSection.classList.add("hidden")
        bigContainer.classList.add("blur-none")
    }
}


var body = document.getElementById("body")
function switchMode(){
    if(body.classList.contains("white")){
        body.classList.remove("white", "bg-slate-50", "text-black")
        body.classList.add("dark", "bg-gray-700", "text-white")
    }
    else if(body.classList.contains("dark")){
        body.classList.remove("dark", "bg-gray-700", "text-white")
        body.classList.add("white", "bg-slate-50", "text-black")
    }
}
/*
var apkDiv = document.getElementsByClassName("apkDiv")
apkDiv.addEventListener('click', {
    download("./Assets/N.png", "Needy.apk")
},false)*/