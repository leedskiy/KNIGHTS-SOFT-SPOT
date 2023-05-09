function ativateP1Script() {
    const elem = document.documentElement;
    let elemWidth = elem.clientWidth;
    const block1Text = document.querySelector('.block1__text');
    const block5Paragraph = document.querySelector('.block5__paragraph');

    function windowSizeChange() {
        elemWidth = elem.clientWidth;

        if (elemWidth < 650) {
            block1Text.innerHTML = `<h1 class="block1__name">KNIGHT'S<br>SOFT SPOT</h1>
        <div class="block1__separator"></div>
        <h3 class="block1__phrase1">Even knights<br>can't resist pets</h3>
        <h3 class="block1__phrase2">Shelter a new<br>friend in<br>your castle</h3>`;
            block5Paragraph.innerHTML = `There are many others<br> which also need your help. <br>Here you can find some of
        them:`;
        }
        else {
            block1Text.innerHTML = `<h1 class="block1__name">KNIGHT'S SOFT SPOT</h1>
        <div class="block1__separator"></div>
        <h3 class="block1__phrase1">Even knights can't resist pets</h3>
        <h3 class="block1__phrase2">Shelter a new friend in your castle</h3>`;
            block5Paragraph.innerHTML = `There are many others which also need your help. <br>Here you can find some of
        them:`;
        }
    }

    windowSizeChange();

    window.addEventListener("resize", windowSizeChange);
}

ativateP1Script();