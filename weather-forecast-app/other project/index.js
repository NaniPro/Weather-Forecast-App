let mhm = document.getElementById("#1")
let pick = document.getElementById("pick")


pick.addEventListener("change", (e) => {

    if(e.target.value == "red"){
        pick.className = ""
        pick.classList.add("bgRed")

    }else if(e.target.value == "blue"){
        pick.className = ""
        pick.classList.add("bgBlue")

    }else if(e.target.value == "pinkish"){
        pick.className = ""
        pick.classList.add("bgPinkish")

    }else if(e.target.value == "pink"){
        pick.className = ""
        pick.classList.add("bgPink")

    }else if(e.target.value == "default"){
        pick.className = ""
    }
})