let service1 = document.getElementById('service-tab-1');
let service2 = document.getElementById('service-tab-2');
let service3 = document.getElementById('service-tab-3');
let service4 = document.getElementById('service-tab-4');
let service5 = document.getElementById('service-tab-5');
let service6 = document.getElementById('service-tab-6');
let serviceText1 = document.getElementById('service_text-1');
let serviceText2 = document.getElementById('service_text-2');
let serviceText3 = document.getElementById('service_text-3');
let serviceText4 = document.getElementById('service_text-4');
let serviceText5 = document.getElementById('service_text-5');
let serviceText6 = document.getElementById('service_text-6');


let services = document.querySelectorAll('.service__tab');
const serviceTabs = document.querySelectorAll('.service__content') 

let abouts = document.querySelectorAll('.about__tab');
const aboutTabs = document.querySelectorAll('.about__content') 

/*Переключение табов service*/

services.forEach(service => {
  service.addEventListener('click', (e) => {
    services.forEach(service => {
      service.classList.remove('service__tab-active');
      let href = service.getAttribute('href');
      document.querySelector(href).style.display = 'none';
  });
    service.classList.add('service__tab-active');
    let href = service.getAttribute('href');
    document.querySelector(href).style.display = 'block';
    e.preventDefault();
  });
});


/*Появление текста на картинке service*/

service1.addEventListener( 'mouseover' , function(event) {
  serviceText1.style.display = 'block';
});

service1.addEventListener( 'mouseout' , function(event) {
  serviceText1.style.display = 'none';
});

service2.addEventListener( 'mouseover' , function(event) {
  serviceText2.style.display = 'block';
});

service2.addEventListener( 'mouseout' , function(event) {
  serviceText2.style.display = 'none';
});

service3.addEventListener( 'mouseover' , function(event) {
  serviceText3.style.display = 'block';
});

service3.addEventListener( 'mouseout' , function(event) {
  serviceText3.style.display = 'none';
});

service4.addEventListener( 'mouseover' , function(event) {
  serviceText4.style.display = 'block';
});

service4.addEventListener( 'mouseout' , function(event) {
  serviceText4.style.display = 'none';
});

service5.addEventListener( 'mouseover' , function(event) {
  serviceText5.style.display = 'block';
});

service5.addEventListener( 'mouseout' , function(event) {
  serviceText5.style.display = 'none';
});

service6.addEventListener( 'mouseover' , function(event) {
  serviceText6.style.display = 'block';
});

service6.addEventListener( 'mouseout' , function(event) {
  serviceText6.style.display = 'none';
});


/*Переключение табов about-main*/

abouts.forEach(about => {
  about.addEventListener('click', (e) => {
    abouts.forEach(about => {
      about.classList.remove('about__tab-active');
      let href = about.getAttribute('href');
      document.querySelector(href).style.display = 'none';
  });
    about.classList.add('about__tab-active');
    let href = about.getAttribute('href');
    document.querySelector(href).style.display = 'block';
    e.preventDefault();
  });
});


/* Dropdown для features */

let features = document.querySelectorAll('.feature__item');

let sectionFeature = document.querySelectorAll('.section__feature');


features.forEach(feature => {
  feature.addEventListener('click', () => {
    feature.querySelector('.feature__description').classList.toggle('feature__description-show');
  })
})


/* Carousel */


let btn_next = document.querySelector('.feed-btn-next');
let btn_prev = document.querySelector('.feed-btn-prev');


let feedbackItems = document.querySelectorAll('.feedback__carousel-list')

btn_next.addEventListener('click', () => {
  for (let i = 0; i < feedbackItems.length; i++) {
    console.log(feedbackItems[i].className == 'feedback__carousel-list feedback__list-show')
    if (feedbackItems[i].className == 'feedback__carousel-list feedback__list-show') {
      feedbackItems[i].classList.remove('feedback__list-show');
      i += 1;
      if (i >= feedbackItems.length) {
        i = 0;
      }
      feedbackItems[i].classList.add('feedback__list-show');
      break;
    }
  }
})

btn_prev.addEventListener('click', () => {
  for (let i = 0; i < feedbackItems.length; i++) {
    console.log(feedbackItems[i].className == 'feedback__carousel-list feedback__list-show')
    if (feedbackItems[i].className == 'feedback__carousel-list feedback__list-show') {
      feedbackItems[i].classList.remove('feedback__list-show');
      i -= 1;
      if (i < 0) {
        i = feedbackItems.length - 1;
      }
      feedbackItems[i].classList.add('feedback__list-show');
      break;
    }
  }
})

/* Carousel MB */


let btn_next_mb = document.querySelector('.feed-btn-next-mb');
let btn_prev_mb = document.querySelector('.feed-btn-prev-mb');


let feedbackItems_mb = document.querySelectorAll('.feedback-for-mb__item')

btn_next_mb.addEventListener('click', () => {
  for (let i = 0; i < feedbackItems_mb.length; i++) {
    if (feedbackItems_mb[i].className == 'feedback-for-mb__item feedback-for-mb__item-show') {
      feedbackItems_mb[i].classList.remove('feedback-for-mb__item-show');
      i += 1;
      if (i >= feedbackItems_mb.length) {
        i = 0;
      }
      feedbackItems_mb[i].classList.add('feedback-for-mb__item-show');
      break;
    }
  }
})

btn_prev_mb.addEventListener('click', () => {
  for (let i = 0; i < feedbackItems_mb.length; i++) {
    if (feedbackItems_mb[i].className == 'feedback-for-mb__item feedback-for-mb__item-show') {
      feedbackItems_mb[i].classList.remove('feedback-for-mb__item-show');
      i -= 1;
      if (i < 0) {
        i = feedbackItems_mb.length - 1;
      }
      feedbackItems_mb[i].classList.add('feedback-for-mb__item-show');
      break;
    }
  }
})

/* Questions hover*/

let questions = document.querySelectorAll('.questions__item');

questions.forEach(question => {
  question.addEventListener('mouseover', () => {
    let quest = question.querySelector('.questions__q');
    let answ = question.querySelector('.questions__a');
    quest.classList.add('questions__q-hover');
    answ.classList.add('questions__a-hover');
  });
  question.addEventListener('mouseout', () => {
    let quest = question.querySelector('.questions__q');
    let answ = question.querySelector('.questions__a');
    quest.classList.remove('questions__q-hover');
    answ.classList.remove('questions__a-hover');
  })
});

/*Popup*/

let buttons = document.querySelectorAll('.btn-for-popup');
let popup = document.getElementById('modal-popup');
let btn_close = document.querySelector('.btn-close')
let overlay = document.querySelector('.overlay')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    popup.style.display = "block"
  })
})

overlay.addEventListener('click', () => {
  popup.style.display = "none"
})
