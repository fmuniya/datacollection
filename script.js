const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFifth = document.querySelector(".prev-4");
const nextBtnFifth = document.querySelector(".next-4");
const prevBtnSixth = document.querySelector(".prev-5");
const nextBtnSixth = document.querySelector(".next-5");
const prevBtnSeventh = document.querySelector(".prev-6");
const nextBtnSeventh = document.querySelector(".next-6");
const prevBtnEighth = document.querySelector(".prev-7");
const nextBtnEighth = document.querySelector(".next-7");
const prevBtnNinth = document.querySelector(".prev-8");
const nextBtnNinth = document.querySelector(".next-8");
const prevBtnTenth = document.querySelector(".prev-9");
const nextBtnTenth = document.querySelector(".next-9");
const prevBtnEleventh = document.querySelector(".prev-10");
const nextBtnEleventh = document.querySelector(".next-10");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-100%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnFifth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-125%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSixth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-150%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSeventh.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-175%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnEighth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-200%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnNinth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-225%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnTenth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-250%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnEleventh.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-275%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFifth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnSixth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-100%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnSeventh.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-125%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnEighth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-150%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnNinth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-175%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnTenth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-200%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnEleventh.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-225%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

// save data in object #############

 let datacoll = [];
      const adddatacoll = (ev)=>{
        ev.preventDatafault();
        let domdata = {
          domain_url: document.getElementById('domain_url').value,
          top_level_domain: document.getElementById('top_level_domain').value,
          webmaster_email: document.getElementById('webmaster_email').value,
          contacted_by: document.getElementById('contact').value,
          date_contacted: document.getElementById('datepick').value,
          domain_lang: document.getElementById('domlanguage').value,
        }

        datacoll.push(domdata);
        document.forms[0].reset(); //clear form for new additions
        
        console.warn('added' , {datacoll} );
        let pre = document.querySelector('#msg pre');
        pre.textContent = '\n' + JSON.stringify(datacoll, '\t', 2);
      }

      document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('sbmt').addEventListener('click', adddatacoll )
      });

// a test fetch

const fetch = require("node-fetch")

// Error checking 

function checkResponseStatus(res) {
  if(res.ok){
      return res
  } else {
      throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
  }
}

//fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        console.log("First user in the array:");
        console.log(json[0]);
        console.log("Name of the first user in the array:");
        console.log(json[0].name);
})

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        console.log("First user in the array:");
        console.log(json[0]);
        console.log("Name of the first user in the array:");
        console.log(json[0].name);
})

//   a tets post

let todo = {
  userId: 123,
  title: "loren impsum doloris",
  completed: false
};

fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  body: JSON.stringify(todo),
  headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err))
