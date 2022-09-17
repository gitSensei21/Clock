const hour = document.querySelector('.h'),
  minut = document.querySelector('.m'),
  secund = document.querySelector('.s'),
  numHour = document.querySelector('.hours'),
  numMinut = document.querySelector('.minutes'),
  hours2 = document.querySelector('.hours'),
  minutse2 = document.querySelector('.minutes'),
  shour = document.querySelector('.stopwatch__hours'),
  sminute = document.querySelector('.stopwatch__minutes'),
  sSecond = document.querySelector('.stopwatch__seconds'),
  watchBtn = document.querySelector('.stopwatch__btn1');


function clock() {
  let date = new Date();
  let hours = (date.getHours() + date.getMinutes()/60) / 12 * 360;
  let minutes = (date.getMinutes() + date.getSeconds()/60) * 6;
  let secunds = (date.getSeconds() + date.getMilliseconds()/1000) * 6;

  secund.style = `transform:rotate(${secunds}deg)`
  hour.style = `transform:rotate(${hours}deg)`;
  minut.style = `transform:rotate(${minutes}}deg)`;
  requestAnimationFrame(clock)
}
clock()

function clockTwo() {
  let date2 = new Date()
  let hours22 = date2.getHours();
  let minutse22 = date2.getMinutes()
  if (hours22 < 10) {
    hours22 = '0' + hours22
  }
  if (minutse22 < 10) {
    minutse22 = '0' + minutse22
  }

  hours2.innerHTML = hours22
  minutse2.innerHTML = minutse22

  setTimeout(clockTwo, 1000)
}
clockTwo()

let stopInterval = null;
watchBtn.addEventListener("click", function () {
  if (watchBtn.innerHTML === "start") {
    watchBtn.innerHTML = "stop";
    watch();
  } else if (watchBtn.innerHTML == "stop") {
    watchBtn.innerHTML = "clear";
    clearTimeout(stopInterval);
  } else if (watchBtn.innerHTML === "clear") {
    watchBtn.innerHTML = "start";
    sSecond.innerHTML = '00';
    sminute.innerHTML = '00';
    shour.innerHTML = '00';
  }
});

function watch() {
  if (sSecond.innerHTML < 59) {
    sSecond.innerHTML++;
    if (sSecond.innerHTML < 10) {
      sSecond.innerHTML = '0' + sSecond.innerHTML
    }
  }else {
    sSecond.innerHTML = 0;
    if (sminute.innerHTML < 59) {
      sminute.innerHTML++;
      if (sminute.innerHTML < 10) {
        sminute.innerHTML = '0' + sminute.innerHTML
      }
    } else {
      sminute.innerHTML = 0;
      if (shour.innerHTML < 24) {
        shour.innerHTML++;
        if (shour.innerHTML < 10) {
          shour.innerHTML = '0' + shour.innerHTML
        }
      } else {
        shour.innerHTML = 0;
      }
    }
  }
  stopInterval = setTimeout(() => watch(), 1000);
}



const tabsBtn = document.querySelectorAll('.tabsItem'), // knopkalar
  tabsContent = document.querySelectorAll('.tabsContentItem'); // knopkalarni tegidegi contentlar

for (let i = 0; i < tabsBtn.length; i++) {
  let btn = tabsBtn[i]

  btn.addEventListener('click', function () {

    for (let k = 0; k < tabsBtn.length; k++) {
      tabsBtn[k].classList.remove('active')
      tabsContent[k].classList.remove('active')
    }

    btn.classList.add('active')
    tabsContent[i].classList.add('active')

  })
}


