window.onload = function(){
    const intro = document.getElementById("inicio");
 
    setTimeout(()=>{
        intro.classList.add("efeito-out")
 
        setTimeout(()=>{
            intro.style.display="none"
        }, 1500)
    },3000)
}
