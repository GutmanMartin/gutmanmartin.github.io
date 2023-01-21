// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})



for (let i = 0; i < 3; i++){

    let span = document.querySelector(".hidable-" + i)
    console.log(".hider-btn-" + i)
    document.querySelector(".hider-btn-" + i).addEventListener("click", function () {
        toggleHide(span, "block")
    })
}



function toggleHide(element, mode) {
    if (element.style.display === mode) {
        element.style.display = "none"
    } else {
        element.style.display = mode
    }
}