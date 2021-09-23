(() => {
    ljud=blanda(document.getElementById("hästisar").children)
    document.getElementById("horsey").addEventListener("mouseenter", (e) => { blanda(ljud);ljud[0].play();ljud[1].play() });
})()