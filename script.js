


function sendMail(e){
    console.log("reached")
    var params = {/*
    full_name : document.getElementById('fullName').value,
    email : document.getElementById('email').value,
    subject : document.getElementById('subject').value,
    message : document.getElementById('message').value,
*/
    full_name: "tt",
    email: "tt",
    subject: "tt",
    message: "tt",
   }
   emailjs.sendForm("service_f6vgr2r","template_vt0ouh7", params).then(function() {
    console.log('SUCCESS!');
    }, function(error) {
        console.log('FAILED...', error);
    });

}

const btn = document.getElementById("btn");

btn.addEventListener("click",() => console.log('submitted'));