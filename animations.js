document.querySelectorAll(".gallery-item").forEach((item)=>{
    item.style.transform = "translateX(-50%)";
})

const maintl = anime.timeline({
    easing: 'easeOutCubic',
    loop: false,
    duration: 1000,
})

maintl.add({
    targets: ['.big-text span', '.small-text span'],
    translateY: [80, 0],
    delay: 100,
})
.add({
    targets: ['.nav-item'],
    translateY: [-100, 0],
    opacity: [0,1],
    duration: 500,
    delay: (el, i)=>{
        return 100 * i;
    },
})
.add({
    targets: ['#nav-logo'],
    translateY: [-100, 0],
    opacity: [0,1],
    duration: 500,
}, "-=500")
.add({
    targets: ['.stat', '.stat-desc', '.stats-table'],
    translateY: [100, 0],
    duration: 500,
    opacity: [0,1]
})


anime({
    targets: "body",
    delay: 200,
    duration: 3000,
    opacity: [0,1]
})

const tl = anime.timeline({
    direction: 'normal',
    duration: 2000,
    loop: false,
    autoplay: false,
    easing: 'linear',

})

tl.add({
    targets: '.description-interior',
    translateX: [400, 0],
    opacity: [0, 1],
}).add({
    targets: '.description-safety',
    translateX: [-400, 0],
    opacity: [0, 1],
}).add({
    targets: '.description-networking',
    translateX: [400, 0],
    opacity: [0, 1],
}).add({
    targets: '.gallery-item',
    translateY: [-200, 0],
    opacity: [0, 1],
}).add({
    targets: '.description-sport',
    translateX: [400, 0],
    opacity: [0, 1],
})

const scrollPercent = () => {
    var h = document.documentElement,
    b = document.body
    return (h['scrollTop'] || b['scrollTop']) / ((h['scrollHeight'] || b['scrollHeight']) - h.clientHeight) * 100;
  }

window.addEventListener("load", ()=>{
    tl.seek((scrollPercent() / 100) * tl.duration);
})

window.addEventListener("scroll", ()=>{
    tl.seek((scrollPercent() / 100) * tl.duration);
})