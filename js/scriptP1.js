const elem = document.documentElement;
let elemWidth = elem.clientWidth;
const block1Text = document.querySelector('.block1__text');

window.addEventListener("resize", windowSizeChange);

function windowSizeChange() {
    elemWidth = elem.clientWidth;

    if(elemWidth < 600) {
        block1Text.innerHTML = `<h1 class="block1__name">KNIGHT'S<br/>SOFT SPOT</h1>
        <div class="block1__separator"></div>
        <h3 class="block1__phrase1">Even knights<br/>can't resist pets</h3>
        <h3 class="block1__phrase2">Shelter a new<br/>friend in<br/>your castle</h3>`;
    }
    else {
        block1Text.innerHTML = `<h1 class="block1__name">KNIGHT'S SOFT SPOT</h1>
        <div class="block1__separator"></div>
        <h3 class="block1__phrase1">Even knights can't resist pets</h3>
        <h3 class="block1__phrase2">Shelter a new friend in your castle</h3>`;
    }
}

windowSizeChange();