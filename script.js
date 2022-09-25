// burger

const toggleNav = () => {
  if (!menuOpen) {
    Burgermenu.classList.add("open");
    menuOpen = true;

    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
    Burgermenu.classList.remove("open");
    menuOpen = false;
  }
};

let Burgermenu = document.querySelector(".menu-btn");

let menuOpen = false;
const nav = document.getElementById("nav-items");

Burgermenu.addEventListener("click", () => {
  toggleNav();
});

nav.addEventListener("click", () => {
  toggleNav();
});

// scrolltop

let scroll = document.getElementById("Scrooltop");

scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// cookiesbaner local storage

const Cookies1 = document.querySelector(".cookies");
const CookiesBtn = document.querySelector(".cookies_btn");

CookiesBtn.addEventListener("click", () => {
  Cookies1.classList.remove("active");
  localStorage.setItem("cookiebanner", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookiebanner")) {
    Cookies1.classList.add("active");
  }
}, 1500);

// slider //

let DataSlides = [
  {
    id: 1,
    imgUrl: "images/Tbilisi.jpg",
    title: "",
    url: "https://www.google.com/",
  },

  {
    id: 2,
    imgUrl: "images/Adjara.jpg",
    title: " ",
    url: "https://www.google.com/",
  },

  {
    id: 3,
    imgUrl: "images/Svaneti.jpg",
    title: " ",
    url: "https://www.google.com/",
  },

  {
    id: 4,
    imgUrl: "images/Kakheti1.jpg",
    title: " ",
    url: "https://www.google.com/",
  },
];

const leftArrow = document.getElementById("arrLeft");
const rightArrow = document.getElementById("arrRight");
const sliderContent = document.getElementById("sliderContent");

let sliderindex = 0;

function Atagfunction(item) {
  const Atagelement = document.createElement("span");
  Atagelement.setAttribute("href", item.url);
  Atagelement.classList.add("slides");

  return Atagelement;
}

function imgtagfunction(item) {
  const tagBgImage = document.createElement("div");
  tagBgImage.style.backgroundImage = ` url(${item.imgUrl})`;
  tagBgImage.classList.add("BGslider");

  return tagBgImage;
}

function H2tagfunction(item) {
  const H2tag = document.createElement("h2");
  H2tag.textContent = item.title;
  H2tag.classList.add("slidetitle");

  return H2tag;
}

function Sliderfunc() {
  sliderContent.innerHTML = "";
  const slideritem = Atagfunction(DataSlides[sliderindex]);
  const Images = imgtagfunction(DataSlides[sliderindex]);
  const titles = H2tagfunction(DataSlides[sliderindex]);

  slideritem.appendChild(Images);
  slideritem.appendChild(titles);

  sliderContent.appendChild(slideritem);
  console.log(slideritem);
}

function LeftArrowClick() {
  if (sliderindex == 0) {
    sliderindex = DataSlides.length - 1;
    Sliderfunc();
    return;
  }
  sliderindex -= 1;
  Sliderfunc();
}

function RightArrowClick() {
  if (sliderindex == DataSlides.length - 1) {
    sliderindex = 0;
    Sliderfunc();
    return;
  }
  sliderindex += 1;
  Sliderfunc();
}

leftArrow.addEventListener("click", LeftArrowClick);
rightArrow.addEventListener("click", RightArrowClick);

Sliderfunc();

// accordion//

let accordion = document.querySelectorAll(".acordion-box");

for (let item of accordion) {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// xmlt https  team

function getUsers() {
  let Req = new XMLHttpRequest();

  function render() {
    let Answer = this.responseText;
    let jsAnswer = JSON.parse(Answer);
    console.log(jsAnswer);

    const fragment = document.createDocumentFragment();

    jsAnswer.data.forEach((element) => {
      let li = document.createElement("li");
      li.classList.add("team-li");
      let span = document.createElement("span");
      span.textContent = element.first_name;
      span.classList.add("teamnames");
      let img = document.createElement("img");
      img.src = element.avatar;
      img.classList.add("teamimages");

      li.appendChild(span);
      li.appendChild(img);

      fragment.appendChild(li);
    });

    document.getElementById("team").appendChild(fragment);
  }

  Req.addEventListener("load", render);
  Req.open("GET", "https://reqres.in/api/users?page=1");
  Req.send();
}

getUsers();

// subscribe email with fetch

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("Emails");

  const userEmails = emailInput.value;
  debugger;

  const formdata = new FormData();
  formdata.append("user-emails", userEmails);

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: formdata,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(emailInput);
      emailInput.value = "";
    })
    .catch((err) => console.log(err));
});
