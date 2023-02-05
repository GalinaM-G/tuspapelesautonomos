// select the target element
const headerScroll = document.querySelector(".header__top");

// function to add the class when scroll position is reached
function addClassOnScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 20) {
        headerScroll.classList.add("header__top--active");
    } else {
        headerScroll.classList.remove("header__top--active");
    }
}

// listen to the scroll event
window.addEventListener("scroll", addClassOnScroll);
