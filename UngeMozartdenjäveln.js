"use strict";

const target = { x: 0, y: 0 }
const current = { x: 0, y: 0 }
const max = { x: 0, y: 0 }
const maxValue = { x: 0, y: 0 }
const distanceOffset = maxDistance * 0.5
const speed = 0.05
const speedI = 1 - speed
let raf = false
let debounce = false
const foo = document.body.style
const animate = () => {
    debounce = false
    current.x = current.x * speedI + target.x * speed
    if(current.x - target.x < 0.0001) { current.x = target.x }
    current.y = current.y * speedI + target.y * speed
    if(current.y - target.y < 0.0001) { current.y = target.y }
    foo.backgroundPositionX = current.x + "px"
    foo.backgroundPositionY = current.y + "px"
    if (current.x == target.x && current.y == target.y) {
        raf = false
    } else {
        requestAnimationFrame(animate)
    }
}
const onresize = () => {
    const rect = document.body.getBoundingClientRect()
    max.x = rect.width
    max.y = rect.height
    if(rect.width > rect.height) {
        maxValue.x = maxDistance * (rect.height/rect.width)
        maxValue.y = maxDistance
    } else {
        maxValue.x = maxDistance
        maxValue.y = maxDistance * (rect.width/rect.height) 

    }
    console.log("resize", max)
}
onresize()
window.addEventListener("resize", onresize)
const para = (e) => {
    if (!debounce) {
        debounce = true
        target.x = (e.x / max.x) * maxValue.x - maxValue.x
        target.y = (e.y / max.y) * maxValue.y - maxValue.y
        if (!raf) {
            raf = true
            requestAnimationFrame(animate)
        }
        console.log(e.x, e.y)
    }
}
document.body.addEventListener("mousemove", para)