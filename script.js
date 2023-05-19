// import emailjs from '@emailjs/browser';

ScrollReveal().reveal('#hero');
ScrollReveal().reveal('#second');
ScrollReveal().reveal('#third');
ScrollReveal().reveal('#fourth');
ScrollReveal().reveal('#fifth');
ScrollReveal().reveal('#footer');

var downloadSection = document.getElementById("download")
var bigContainer = document.getElementById("bigContainer")

function showDownload(){
    if (downloadSection.classList.contains("hidden")){
        downloadSection.classList.remove("hidden")
        downloadSection.classList.add("fixed")
        bigContainer.classList.remove("blur-none")
        bigContainer.classList.add("blur-md")
        
    }

}
function hideDownload(){
    if (downloadSection.classList.contains("fixed")){
        downloadSection.classList.remove("fixed")
        downloadSection.classList.add("hidden")
        bigContainer.classList.remove("blur-md")
        bigContainer.classList.add("blur-none")
    }
}


document.getElementById('bigContainer')


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


function hearts(){
    const container = document.getElementById('bigContainer')
    const createElem = document.createElement('div')
    const hearthimg = document.createElement('img')
    hearthimg.src = './Assets/hearth.png'
    hearthimg.width = 30;
    createElem.appendChild(hearthimg)
    createElem.classList.add('hearts')
    createElem.style.left = Math.random() * 100 + 'vw' 
    createElem.style.animationDuration = Math.random() *3 + 2 + 's'
    container.appendChild(createElem)
    setTimeout(()=>{
        createElem.remove()
    },5000)
}



function getHearts(){

    for (let i = 1; i < 100; i++){
        hearts()
    }
    
}


function sendMail(e){
    e.preventDefault()
    console.log("reached")

    emailjs.send("service_sewddqx","template_g4majnr",{
        from_name: "from_name" ,
        email: "emailTST" ,
        subject: "sbjTest",
        message: "msgTst",
        reply_to: "reply_to_TST"
        /* 
        from_name: document.getElementById('name').value ,
        email: document.getElementById('email').value ,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        reply_to: "reply_to"
        */
    }).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
};
/*
emailjs.send("service_sewddqx","template_g4majnr",{
    from_name: "from_name" ,
    email: "emailTST" ,
    subject: "sbjTest",
    message: "msgTst",
    reply_to: "reply_to_TST"
}).then(function(response) {
   console.log('SUCCESS!', response.status, response.text);
}, function(error) {
   console.log('FAILED...', error);
});
*/