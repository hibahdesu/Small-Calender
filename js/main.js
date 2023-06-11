const calender = document.querySelector('.calender');
const mName = document.getElementById('mName');
const dName = document.querySelector('.dName');
const dNum = document.getElementById('dNum');
const year = document.querySelector('.year');
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');


const date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());


const month = date.getMonth();
mName.innerText = date.toLocaleDateString("en", {
    month: "long"
});

dName.innerText = date.toLocaleString("en", {
    weekday: "long"
});


const day = date.getDate();
dNum.innerText = day;


const fullYear = date.getFullYear()
year.innerText = fullYear;

hour.innerText = date.getHours();

min.innerText = date.getMinutes();

sec.innerText = date.getSeconds();