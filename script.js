
// burger

let Burgermenu = document.querySelector('.menu-btn');

let  menuOpen = false;

Burgermenu.addEventListener('click', () =>{
    if (!menuOpen){
        Burgermenu.classList.add('open');
        menuOpen = true;
  
    } else {
        Burgermenu.classList.remove('open');
        menuOpen = false;
    }
});


// crolltop

let scroll = document.getElementById('Scrooltop');

   scroll.addEventListener('click', () =>  {
   window.scrollTo({
    top: 0,
    behavior: 'smooth',
   })
    
})

// cookies

setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60  *1000));
    const expries = 'expries=' + date.toUTCString();
    document.cookie = cName + '=' + cValue + ":" + expries + '; path=/';
}

getcookie = (cName) => {
    const name = cName + '='
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split (';');
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0) value = val.substring(name.length);
    })
    return value;
}

document.getElementById('cookies_btn').addEventListener('click', () => {
    document.getElementById('cookies').style.display = 'none';
    setCookie('cookie', true, 30);
})

cookieMessage = () => {
    if (!getcookie('cookie')) 
    document.getElementById('cookies').style.display = 'block';
        
    }

    window.addEventListener('load', cookieMessage);



// slider //


let DataSlides = [
    {
       id: 1,
       imgUrl:'images/Tbilisi.jpg',
       title: '',
       url : 'https://www.google.com/',
    } ,

    {
        id: 2,
        imgUrl:'images/Adjara.jpg',
        title: ' ',
        url : 'https://www.google.com/',
     },

     {
        id: 3,
        imgUrl:'images/Svaneti.jpg',
        title: ' ', 
        url : 'https://www.google.com/',
     },

     {
        id: 4,
        imgUrl:'images/Kakheti1.jpg',
        title: ' ',
        url : 'https://www.google.com/',
     },
]

const leftArrow = document.getElementById ('arrLeft');
const rightArrow = document.getElementById ('arrRight');
const sliderContent = document.getElementById ('sliderContent');

let sliderindex = 0 ;


function Atagfunction (item) {
const Atagelement = document.createElement ('span');
Atagelement.setAttribute('href', item.url);
Atagelement.classList.add('slides');

return Atagelement
}

function imgtagfunction (item){
 const tagBgImage = document.createElement ('div');
 tagBgImage.style.backgroundImage = ` url(${item.imgUrl})`;
 tagBgImage.classList.add('BGslider')

 return tagBgImage

}

function H2tagfunction (item) {
const H2tag = document.createElement ('h2');
H2tag.textContent = item.title;
H2tag.classList.add('slidetitle');

return H2tag 
}


function Sliderfunc () {
sliderContent.innerHTML = '';
const slideritem = Atagfunction(DataSlides[sliderindex]);
const Images = imgtagfunction(DataSlides[sliderindex]);
const titles = H2tagfunction (DataSlides[sliderindex]);

slideritem.appendChild(Images);
slideritem.appendChild(titles);

sliderContent.appendChild(slideritem);
console.log(slideritem);
}

function LeftArrowClick() {
if (sliderindex == 0) {
sliderindex = DataSlides.length - 1 ;
Sliderfunc();
return;

}
sliderindex -=1;
Sliderfunc();
}

function RightArrowClick (){
if (sliderindex == DataSlides.length - 1) {
sliderindex = 0
Sliderfunc();
return;
}
sliderindex +=1;
Sliderfunc();
}

leftArrow.addEventListener('click', LeftArrowClick ) ;
rightArrow.addEventListener('click', RightArrowClick ) ;


Sliderfunc();



// accordion//

let accordion = document.querySelectorAll('.acordion-box');

for (let item of accordion) {
   item.addEventListener('click', function () {
     this.classList.toggle('active');
    });


}



// xmlt https  team

function getUsers() {
    let Req = new XMLHttpRequest;
      
    function render(){
       let Answer = this.responseText;
       let jsAnswer = JSON.parse(Answer);
       console.log(jsAnswer);
      
       const fragment = document.createDocumentFragment();
    
       jsAnswer.data.forEach(element => {
        let li = document.createElement ('li');
        li.classList.add('team-li')
         let span = document.createElement('span');
         span.textContent = element.first_name;
         span.classList.add('teamnames')
         let img = document.createElement ('img');
         img.src  = element.avatar;
         img.classList.add('teamimages');

         li.appendChild(span);
         li.appendChild(img);

         fragment.appendChild(li);
        
        });
          
        document.getElementById('team').appendChild(fragment);
    }
    
   Req.addEventListener('load', render);
   Req.open('GET', 'https://reqres.in/api/users?page=1');
   Req.send();
  }
   
   getUsers()



// subscribe email with fetch 

const form = document.getElementById('formblock');

form.addEventListener('Submit', event => {
   
   preventDefault();
    
     const formdata = new Formdata(form);
     const data = Object.fromEntries(formdata);

     fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)
     }).then(res => res.json())
       .then(data => console.log(data))
       .catch(error => console.log(error));

});
