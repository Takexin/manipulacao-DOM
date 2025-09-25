var score1 = 0
var score2 = 0

var hasWon = false

var reacaoBarra = document.getElementById("reacao")
function onPress(event){
        if(hasWon){return}
        if (event.key == "a"){
            hasWon = true
            score1+=1
            document.getElementById("score1").textContent = score1
        }
        else if(event.key == "ArrowUp"){
            hasWon = true
            score2+=1
            document.getElementById("score2").textContent = score2
        }
        else{return}
        reacaoBarra.classList.remove("ativo")
        document.removeEventListener("keydown",onPress)
    }

function startButton(){
    reacaoBarra.classList.add("ativo")
    document.addEventListener("keydown",onPress)
}
function main(){
    hasWon = false
    var awaitTime = Math.floor(Math.random() * 5000);
    console.log(awaitTime)
    setTimeout(startButton, awaitTime)

}