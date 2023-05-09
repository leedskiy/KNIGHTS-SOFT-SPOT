function ativateSbtnSctipt() {
    const elem = document.documentElement;
    let elemHeight = elem.clientHeight;
    const SBtn = document.querySelector('.SBtn');
    let windowScrollTop = window.pageYOffset;

    function windowSizeChange() {
        elemHeight = elem.clientHeight;
    }

    window.addEventListener("resize", windowSizeChange);

    function scroll() {
        window.scrollTo(0, 0);
    }

    window.addEventListener('scroll', (e) => {
        windowScrollTop = parseInt(window.pageYOffset);

        if (windowScrollTop > elemHeight){
            if(!(SBtn.classList.contains('SBtn-active'))) {
                SBtn.classList.toggle('SBtn-not-active');
                SBtn.classList.toggle('SBtn-active');

                SBtn.addEventListener('click', scroll);
            }
        }
        else {
            if(!(SBtn.classList.contains('SBtn-not-active'))) {
                SBtn.classList.toggle('SBtn-not-active');
                SBtn.classList.toggle('SBtn-active');

                SBtn.removeEventListener('click', scroll);
            }
        }
    });
}

ativateSbtnSctipt();