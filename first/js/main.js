const activeMenu = document.querySelectorAll('.menu__list--link');
const contactsOverlay = document.getElementById("contacts--send--overlay");
const popupOverlay = document.getElementById("popup-overlay");
const finishSendContacts = document.getElementById("finish__send__contacts");
const form = document.querySelector('.contacts__form')
const privacyPolicy = document.querySelector('.privacyPolicy')
const requires = form.querySelectorAll(".requiredInput")
const inputForm = form.querySelectorAll(".input")
const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu--list--mobile');
const burger = document.querySelector(".burger")




menuBtn.addEventListener('click', ()=>{
    menuMobile.classList.add('menu--open');
})
burger.addEventListener('click', ()=>{
    menuMobile.classList.remove('menu--open');
})


for (let i = 0; i < activeMenu.length; i++) {
    activeMenu[i].addEventListener('click', function() {
        for (let i = 0; i < activeMenu.length; i++) {
            if (activeMenu[i] === this) {
                activeMenu[i].classList.add('menu__active')
            } else {
                activeMenu[i].classList.remove('menu__active')
            }
        }
    })
}

function hidePopup() {
    popupOverlay.style.display = "none";
}

function sendContacts() {
    contactsOverlay.style.display = "block";
}

function closeWindow() {
    contactsOverlay.style.display = "none";
    finishSendContacts.style.display = "none";
}

function hideContacts() {
    let errors = document.querySelectorAll('.error')
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove()
    }

    let isError = false
    for (let i = 0; i < requires.length; i++) {
        if (!requires[i].value) {
            isError = true
            let error = document.createElement('div')
            error.className = "error"
            error.innerHTML = "This field is required."
            form[i].parentElement.insertBefore(error, requires[i].nextSibling)
            requires[i].style.border = "1px solid #EC1211"
        } else {
            requires[i].style.border = "1px solid #F1F1F1"
            contactsOverlay.style.display = "none";
            inputForm[i].value = ""
            finishSendContacts.style.display = "block";
        }
    }
    if (isError) {
        let error = document.createElement('div')
        error.className = "error"
        error.innerHTML = "Please fill in all required fields"
        form.parentElement.insertBefore(error, privacyPolicy)
    }

}

