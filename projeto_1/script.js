var luzes = []
var index = 0

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll(".luz").forEach(luz => {
        luzes.push(luz)
    })
})
function alterar(){
    luzes.forEach(luz => luz.classList.remove("ativo"))
    luzes[index].classList.toggle("ativo")
    if (index+1 >= luzes.length){
        index=0
        return
    }
    index+=1
}