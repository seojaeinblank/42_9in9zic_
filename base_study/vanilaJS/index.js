const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS); // 토글은 요약 
}

function init(){
    title.addEventListener("click", handleClick);
}
init();
