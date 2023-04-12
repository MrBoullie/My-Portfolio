const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");


inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateBtn()

function updateBtn(){
    if(inputEl.checked === true){
        bodyEl.style.backgroundColor = "#242424";
        bodyEl.style.color = "#f3f5f8";
        
    }
    else{
        bodyEl.style.backgroundColor = "#f3f5f8"
        bodyEl.style.color = "#242424";
    }
}

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}
inputEl.addEventListener("input",()=>{
    updateBtn()
    updateLocalStorage()
})

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    });
})
const hidden = document.querySelectorAll(".hidden");

hidden.forEach((el) => observer.observe(el));








