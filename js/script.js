
const c = document.querySelector('#contact')
const d = document.querySelector('#disp')
const i = document.querySelector('#int')
const cf = document.querySelector('#conf')

c.addEventListener("click", () => {
    c.classList.add('active')
    d.classList.remove('active')
    i.classList.remove('active')
    cf.classList.remove('active')
})
d.addEventListener("click", () => {
    d.classList.add('active')
    c.classList.remove('active')
    i.classList.remove('active')
    cf.classList.remove('active')
})
i.addEventListener("click", () => {
    i.classList.add('active')
    d.classList.remove('active')
    c.classList.remove('active')
    cf.classList.remove('active')
})
cf.addEventListener("click", () => {
    cf.classList.add('active')
    d.classList.remove('active')
    i.classList.remove('active')
    c.classList.remove('active')
})
