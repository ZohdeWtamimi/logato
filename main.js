// console.log('hello')
const btn = document.getElementById('btn')
btn.addEventListener("mouseenter", (event) => {
    btn.style.background = 'blue'
});
btn.addEventListener("mouseleave", (event) => {
    btn.style.background = 'red'
});