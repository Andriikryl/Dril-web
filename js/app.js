const burger = document?.querySelector('[data-burger]');

const nav = document?.querySelector('[data-nav]');
const body = document.body;

burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    nav.classList.toggle('nav--visible');
})








const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button")


window.addEventListener("mousemove", (e) => {

    let x = e.pageX;
    let y = e.pageY;

    cursor.forEach(el => {
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;

        links.forEach(link => {
            link.addEventListener("mouseenter", () => {
                el.classList.add("hover");
            })
            link.addEventListener("mouseleave", () => {
                el.classList.remove("hover")
            })
        })


        buttons.forEach(link => {
            link.addEventListener("mouseenter", () => {
                el.classList.add("hover");
            })
            link.addEventListener("mouseleave", () => {
                el.classList.remove("hover")
            })
        })
    })

})