const progress = document.getElementById("progress");
const stepCircles = document.querySelectorAll(".circle");
const bar = document.getElementById("progressBar");
const LOADING = document.getElementById("gif");
const score = document.getElementById("score");
let currentActive = 1;

//NOTE CHANGE HERE TO 1-4
//1=25%
//2=50%
//3=75%
//4=100%
update(1);

function update(currentActive) {
  stepCircles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + "%";
}

//QUIZ

let firstAnswer = "";
let secondAnswer = "";
let thirdAnswer = "";
let forthAnswer = "";

//screen

var firstQustion = document.getElementById("firstQustion");
var secondQustion = document.getElementById("secondQustion");
var thiredtQustion_home = document.getElementById("thiredtQustion_home");
var thiredtQustion_inside = document.getElementById("thiredtQustion_inside");
var thiredtQustion_outside = document.getElementById("thiredtQustion_outside");
var forthQustion = document.getElementById("forthQustion");

//library
var saving = document.getElementById("saving");
var loded = document.getElementById("loded");
var outside = document.getElementById("outside");
var inside = document.getElementById("inside");
var home = document.getElementById("home");
var painting = document.getElementById("painting");
var shibari = document.getElementById("shibari");
var cooking = document.getElementById("cooking");
var icecream = document.getElementById("icecream");
var dinner = document.getElementById("dinner");
var shoping = document.getElementById("shoping");
var walk = document.getElementById("walk");
var picnic = document.getElementById("picnic");
var coffee = document.getElementById("coffee");
var day = document.getElementById("day");
var night = document.getElementById("night");

//1
saving.addEventListener("click", function () {
  firstQustion.style.display = "none";
  secondQustion.style.display = "block";
  firstAnswer = "small budget";
  console.log(firstAnswer);
  update(2);
});

loded.addEventListener("click", function () {
  firstQustion.style.display = "none";
  secondQustion.style.display = "block";
  firstAnswer = "big budget";
  console.log(firstAnswer);
  update(2);
});

//2
outside.addEventListener("click", function () {
  secondQustion.style.display = "none";
  thiredtQustion_outside.style.display = "block";
  secondAnswer = " go outside";
  console.log(secondAnswer);
  update(3);
});

inside.addEventListener("click", function () {
  secondQustion.style.display = "none";
  thiredtQustion_inside.style.display = "block";
  secondAnswer = "  go to the mall";
  console.log(secondAnswer);
  update(3);
});

home.addEventListener("click", function () {
  secondQustion.style.display = "none";
  thiredtQustion_home.style.display = "block";
  secondAnswer = "stay at home";
  console.log(secondAnswer);
  update(3);
});

//3.1

painting.addEventListener("click", function () {
  forthQustion.style.display = "block";
  thiredtQustion_home.style.display = "none";
  thirdAnswer = "paint";
  update(4);
});

shibari.addEventListener("click", function () {
  forthQustion.style.display = "block";
  thiredtQustion_home.style.display = "none";
  thirdAnswer = " do shibari";
  update(4);
});

cooking.addEventListener("click", function () {
  forthQustion.style.display = "block";
  thiredtQustion_home.style.display = "none";
  thirdAnswer = "cook a little";
  update(4);
});

//3.2

icecream.addEventListener("click", function () {
  forthQustion.style.display = "block";
  thiredtQustion_inside.style.display = "none";
  thirdAnswer = " get icecream or dessert";
  update(4);
});

dinner.addEventListener("click", function () {
  forthQustion.style.display = "block";
  thiredtQustion_inside.style.display = "none";
  thirdAnswer = "go to a resturant ";
  update(4);
});

shoping.addEventListener("click", function () {
  forthQustion.style.display = "block";
  thiredtQustion_inside.style.display = "none";
  thirdAnswer = " go shoping";
  update(4);
});

//3.3
walk.addEventListener("click", function () {
  forthQustion.style.display = "block";
  thiredtQustion_outside.style.display = "none";
  thirdAnswer = "go on a walk";
  update(4);
});

picnic.addEventListener("click", function () {
  forthQustion.style.display = "block";
  thiredtQustion_outside.style.display = "none";
  thirdAnswer = "plan a picnic";
  update(4);
});

coffee.addEventListener("click", function () {
  forthQustion.style.display = "block";
  thiredtQustion_outside.style.display = "none";
  thirdAnswer = "go get coffee";
  update(4);
});

//4

day.addEventListener("click", function () {
  forthAnswer = "in the morning";
  bar.style.display = "none";
  forthQustion.style.display = "none";
  LOADING.style.display = "BLOCK";
  console.log(forthAnswer, thirdAnswer, secondAnswer, firstAnswer);
  setTimeout(function () {
    LOADING.style.display = "none";
  }, 3000);
  setTimeout(function () {
    let text = document.createTextNode(
      `okay so  ${forthAnswer}  with a ${firstAnswer} we will ${secondAnswer} and   ${thirdAnswer}  `
    );
    score.appendChild(text);
    console.log(text);
  }, 3500);
  const recipient = "km1234593@gmail.com";
  const subject = "new date requested";
  const body = ` a new date request from your wife
  she wants :
  okay so ${forthAnswer}  with a ${firstAnswer} we will ${secondAnswer} and   ${thirdAnswer}   `;
  const mailtolink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtolink;
  console.log(mailtolink);
});

night.addEventListener("click", function () {
  forthAnswer = "in the evening";
  forthQustion.style.display = "none";
  bar.style.display = "none";
  LOADING.style.display = "BLOCK";
  console.log(forthAnswer, thirdAnswer, secondAnswer, firstAnswer);
  setTimeout(function () {
    LOADING.style.display = "none";
  }, 3000);
  setTimeout(function () {
    let text = document.createTextNode(
      `okay so  ${forthAnswer}  with a ${firstAnswer} we will ${secondAnswer} and   ${thirdAnswer}   `
    );
    score.appendChild(text);
    console.log(text);
  }, 3500);

  const recipient = "km1234593@gmail.com";
  const subject = "new date requested";
  const body = ` a new date request from your wife
  she wants :
  okay so ${forthAnswer}  with a ${firstAnswer} we will ${secondAnswer} and   ${thirdAnswer}   `;
  const mailtolink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtolink;
  console.log(mailtolink);
});

//KJY6MGH656R1ERF8SFYM9CJV
