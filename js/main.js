// select the target element
const target = document.querySelector(".header__top");

// function to add the class when scroll position is reached
function addClassOnScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 20) {
        target.classList.add("header__top--active");
    } else {
        target.classList.remove("header__top--active");
    }
}

// listen to the scroll event
window.addEventListener("scroll", addClassOnScroll);
