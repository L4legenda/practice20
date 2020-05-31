let navbar          = document.querySelectorAll('.header li'),
    contactbar      = document.querySelectorAll('.head-contacts > div'),
    lazy            = document.querySelectorAll('.lazy'),
    receptionInput  = document.querySelectorAll('.input-box > input'),
    receptionButton = document.querySelector('.head > button'),
    receptionBlock  = document.querySelector('.reception'),
    receptionExit   = document.querySelector('.exit'),
    tagline         = document.querySelector('.head > h1'),
    orderButton     = document.querySelector('.reception > div > button')
    messageBox      = document.querySelector('.message');


tagline.classList.add('l-active');
receptionButton.classList.add('l-active');


navbar[0].addEventListener('click', () => {
    document.querySelector('.about').scrollIntoView({
        behavior: 'smooth'
    })
})

navbar[1].addEventListener('click', () => {
    document.querySelector('.service').scrollIntoView({
        behavior: 'smooth'
    })
})

navbar[2].addEventListener('click', () => {
    document.querySelector('.barber').scrollIntoView({
        behavior: 'smooth'
    })
})

navbar[3].addEventListener('click', () => {
    document.querySelector('.product').scrollIntoView({
        behavior: 'smooth'
    })
})

navbar[4].addEventListener('click', () => {
    document.querySelector('.find').scrollIntoView({
        behavior: 'smooth'
    })
})


contactbar[0].addEventListener('click', () => {
    window.open('https://ru-ru.facebook.com/');
})

contactbar[1].addEventListener('click', () => {
    window.open('https://www.instagram.com/');
})

contactbar[2].addEventListener('click', () => {
    window.open('https://vk.com/');
})


receptionButton.addEventListener('click', () => {
    receptionBlock.classList.add('active');
})


receptionInput.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value != '') {
            input.nextElementSibling.classList.add('hidden');
        }
        else {
            input.nextElementSibling.classList.remove('hidden');
        }
    })
})


receptionExit.addEventListener('click', () => {
    receptionBlock.classList.remove('active');
})


orderButton.addEventListener('click', () => {
    messageBox.innerHTML = 'Заявка отправлена'
    for (i = 0; i < 3; i++) {
        if (receptionInput[i].value == '') {
            messageBox.innerHTML = 'Заполните заявку';
            break;
        }
    }
    messageBox.classList.add('active');
    setTimeout(() => {
        messageBox.classList.remove('active')
    }, 3000)
})


window.addEventListener('scroll', () => {
    lazy.forEach(elem => {
        if (!elem.classList.contains('l-active')) {
            if (this.pageYOffset + document.documentElement.clientHeight > elem.offsetTop + (document.documentElement.clientHeight / 4)) {
                elem.classList.add('l-active')
            }
        }
    })
})
