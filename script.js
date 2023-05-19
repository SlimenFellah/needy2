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
/*
Thank you for choosing needy :
Choose your option
*/
let lang = {
    en : {
        mark : "Help people, make people happy.",
        download : "Download the app",
        knowMore : "Know more",
        wru : 'Who are us ?',
        we :'We are ',
        weare : 'a group of computer science students at esi sba, who opted for the needy app as a 2cpi project title. Our team members are: Ouerred islem, Fellah slimene, Mokhtari meriem, Oueddan youcef, Zenasni youcef, Chaib fakhreddin.',
        whatis : 'The needy app is an app for helping people find their needs from objects to services that are provied by other users.',
        title2:'The need never stops !',
        parag2:'4.5 million Americans will a need blood transfusion each year, 18 percent of the nations population are homeless, the biggest part of the world have limited income. and can t buy enough tools, or pay services.',
        parag21:'So why not help this people in their needs ?',
        btn2:'Start helping now',
        title3:'With needy',
        card1t:'Find the closest',
        card1p:'Due to needy geolocalisation system, you can find the closest helper from you.',
        card2t:'Be safe',
        card2p:'Have enough informations about your contact make your dealing safe, and avoids you scammers.',
        card3t:' Multiple categories',
        card3p:'Needy offers multiple categories donations, to make sure you will find your needs.',  
        card4t:'All over the world',
        card4p:'Wherever you are you can use needy, it is not specified to any country or region.',
        mm:'And much more...',
        title4:'Give a feed back :',
        parag4:'Contribute in making needy a better application : By giving a feed back about the idea, or your experience with the application. We love to hear from you.',
        fn:'Full name: ',
        em:'Email: ',
        sb:'Subject: ',
        msg:'Message : ',
        sbm:'Submit',
        tnk:'Thank you for choosing needy',
        cho:'Choose your option'
    },
    fr : {
        mark : "Aider les gens, leur rend heureux.",
        download : "Telecharger l'application",
        knowMore : "Savoir plus",
        wru : 'Qui somme nous',
        we:'Nous sommes',
        weare : ' un groupe d etudiant en informatique , qui ont optée pou l application needy comme titre de projet 2cpi. Notre equipe se compose de : Ouerred islem, Fellah slimene, Mokhtari meriem, Oueddan youcef, Zenasni youcef, Chaib fakhreddin.',
        whatis : 'L application needy est une application pour aider les gens a trouver leurs besions des services au objets qui sont fournis par d autres utilisateur.',
        title2:'Le besoin ne s arrete jamais ! ',
        parag2:'4.5 million Americans ont besoine du don de sange, 18 pourcent de la population sont sansabri, La plus grande partie du monde ont des revenu limité et ne peuvent pas achter leur neccesité. Alors pourquoi on aide pas ces gens dans leurs besoins !',
        parag21:'Alors pourquoi on aider pas ces gens ?',
        btn2:'Commencer a aider mainetant',
        title3:'Avec needy',
        card1t:'Trouver le plus proche',
        card1p:'Grace au needy geolocalisation systeme, tu peut trouver le donnater le plus proche de vous',
        card2t:'Soyez Securisé',
        card2p:'Savoir assez d information sur vous contact vous faire en tout securité, et vous eloigne des scammers.',
        card3t:'Categories multiples',
        card3p:'Needy propose de multiple categories de donation. pour etre sur de trouver vous besoins',  
        card4t:'Sur tous le monde',
        card4p:'Queleque soit votre position vous pouvez utuliser needy, ce n est pas specifié pour une région ou un pays ',
        mm:'Et beacoup plus...',
        title4:'Donner un feedback',
        parag4:'Contribuez à faire des nécessiteux une meilleure application : En donnant un retour sur l idée, ou votre expérience avec l application. Nous aimons avoir de vos nouvelles.',
        fn:'Nom : ',
        em:'Email: ',
        sb:'Sujet: ',
        msg:'Message : ',
        sbm:'Enregister',
        tnk:'Merci d avoir choisi needy',
        cho:'choisir votre option'
    },
    ar : {
        mark : "ساعد الناس, اجعهم سعداء.",
        download : "حمل التطبيق",
        knowMore : "اعرف اكثر",
        wru : 'من نحن ؟',
        we:'',
        weare : 'نحن مجموعة من طلاب علوم الكمبيوتر في esi sba ، اخترنا التطبيق needy كعنوان لمشروع 2cpi. أعضاء فريقنا هم: Ouared islem، Fellah Slimene، Mokhtari Meriem، Oueddan Youscef، Zenasni Yousef، Chaib fakhreddin.',
        whatis : 'التطبيق needy هو تطبيق لمساعدة الأشخاص في العثور على احتياجاتهم من الأشياء إلى الخدمات التي يتم إثباتها من قبل مستخدمين آخرين.',
        title2:'الاحتياج لا يتوقف ابدا! ',
        parag2:'سيحتاج 4.5 مليون أميركي إلى نقل دم كل عام ، 18 في المائة من سكان الدول بلا مأوى ، الجزء الأكبر من العالم لديه دخل محدود. ولا يمكنهم شراء أدوات كافية ، أو دفع خدمات.',
        parag21:'اذن لمذا لا نساعد هؤلاء المحتاجين ؟',
        btn2:'ساعد الان.',
        title3:'مع needy',
        card1t:'اوجد الاقرب',
        card1p:'نظرًا لنظام تحديد الموقع الجغرافي المحتاج ، يمكنك العثور على أقرب مساعد منك.',
        card2t:'كن في امان',
        card2p:'احصل على معلومات كافية حول جهة الاتصال الخاصة بك ، مما يجعل تعاملاتك آمنة ، وتجنبك المحتالين.',
        card3t:'فئات متعددة',
        card3p:'تقدم Needy فئات متعددة من التبرعات ، للتأكد من أنك ستجد احتياجاتك.',  
        card4t:'في كل مكان',
        card4p:'أينما كنت يمكنك استخدام Needy ، فهو غير محدد لأي دولة أو منطقة.',
        mm:'و المزيد...',
        title4:'قدم رايك',
        parag4:'المساهمة في جعل تطبيق نيدي أفضل للمحتاجين: من خلال إعطاء تغذية راجعة عن الفكرة ، أو تجربتك مع التطبيق. نحن نحب أن نسمع منك.',
        fn:'الاسم كاملا: ',
        em:'الايمايل : ',
        sb:'الموضوع: ',
        msg:'الرسالة : ',
        sbm:'ارسل',
        tnk:'شكرا لاختيار Needy',
        cho:'اختر نوعك'
    }
}
let selector = document.getElementById('selector')
function changeLanguage () {
    let language = selector.options[selector.selectedIndex].value;
    console.log("language is : " + language)
    let nodes = document.querySelectorAll('[data-lang]')
    let i = nodes.length;
    while(i--){
        let key = nodes[i].getAttribute('data-lang')
        nodes[i].innerHTML= lang[language][key];
    }

}

