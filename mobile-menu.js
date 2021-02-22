let mobileNavIn = anime({
    targets: ".nav-list-mobile",
    translateY: [-200, 0],
    opacity: [0, 1],
    autoplay: false,
    duration: 500,
    easing: 'easeInOutSine',
})

let mobileNavOut = anime({
    targets: ".nav-list-mobile",
    translateY: [0, -200],
    opacity: [1, 0],
    autoplay: false,
    duration: 500,
    easing: 'easeInOutSine',
})

document.getElementsByClassName("fa-bars")[0].addEventListener("click", ()=>{
    mobileNavIn.play();
    setTimeout(()=>{
        document.getElementsByClassName("nav-list-mobile")[0].style.display = "inline-block";
    }, 10)
})

document.getElementsByClassName("fa-times")[0].addEventListener("click", ()=>{
    mobileNavOut.play();
    setTimeout(()=>{
        document.getElementsByClassName("nav-list-mobile")[0].style.display = "none";
    }, 500)
})

