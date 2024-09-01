let header = document.querySelector(".header");

let ul = document.querySelector("ul")


header.onclick = ()=>{
    header.classList.toggle('fa-xmark')
    ul.classList.toggle("active")

}
window.onscroll=()=>{
    header.classList.remove('fa-xmark')
    ul.classList.remove("active")
}