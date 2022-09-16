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

// setInterval(() => {
//    RightArrowClick();
// }, 3000);

Sliderfunc();



// accordion//

let accordion = document.querySelectorAll('.acordion-box');

for (let item of accordion) {
   item.addEventListener('click', function () {
     this.classList.toggle('active');
    });


}