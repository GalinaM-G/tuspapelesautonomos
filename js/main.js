
const headerScroll = document.querySelector(".header__top");

function addClassOnScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 15) {
        headerScroll.classList.add("header__top--active");
    } else {
        headerScroll.classList.remove("header__top--active");
    }
}

window.addEventListener("scroll", addClassOnScroll);
