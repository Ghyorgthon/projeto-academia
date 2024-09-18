function menuShow(){
    var menuBtn = document.getElementById("navMenu");

    if(menuBtn.className === "nav-item"){
        menuBtn.classList.toggle("responsive")
        console.log("sucesso")
    }else{
        menuBtn.className = "nav-item"
    }
}
