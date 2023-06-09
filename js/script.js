function ativateScript() {
    const header = document.querySelector(".header");
    const headerList = document.querySelector(".header__list");
    const headerItems = document.querySelectorAll(".header__item");
    const headerBurger = document.querySelector(".header__burger");
    const headerBurgerBars = document.querySelectorAll(".burger__bar");
    const overlay = document.querySelector(".overlay");

    headerBurger.addEventListener("click", () => {
        header.classList.toggle("h-active")
        header.classList.toggle("h-not-active")
        headerBurger.classList.toggle("b-active");
        headerBurger.classList.toggle("b-not-active");
        headerList.classList.toggle("hl-active");
        headerList.classList.toggle("hl-not-active");
        headerBurgerBars.forEach(el => {
            el.classList.toggle("bb-active");
            el.classList.toggle("bb-not-active");
        })
        overlay.classList.toggle("overlay-not-active");
        overlay.classList.toggle("overlay-active");
    });

    headerItems.forEach(elem => {
        elem.addEventListener("click", () => {
            header.classList.toggle("h-active")
            header.classList.toggle("h-not-active")
            headerBurger.classList.remove("b-active");
            headerBurger.classList.add("b-not-active");
            headerList.classList.remove("hl-active");
            headerList.classList.add("hl-not-active");
            headerBurgerBars.forEach(el => {
                el.classList.remove("bb-active");
                el.classList.add("bb-not-active");
            })

            if (overlay.classList.contains("overlay-active")) {
                overlay.classList.toggle("overlay-not-active");
                overlay.classList.toggle("overlay-active");
            }
        })
    });

    overlay.addEventListener("click", () => {
        header.classList.toggle("h-active")
        header.classList.toggle("h-not-active")
        headerBurger.classList.toggle("b-active");
        headerBurger.classList.toggle("b-not-active");
        headerList.classList.toggle("hl-active");
        headerList.classList.toggle("hl-not-active");
        headerBurgerBars.forEach(el => {
            el.classList.toggle("bb-active");
            el.classList.toggle("bb-not-active");
        })
        overlay.classList.toggle("overlay-not-active");
        overlay.classList.toggle("overlay-active");
    });
}

ativateScript();