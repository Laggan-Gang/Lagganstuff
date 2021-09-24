(() => {
    ljud=blanda(document.getElementById("hästisar").children)
    document.getElementById("horsey").addEventListener("mouseenter", (e) => { nyaljud = blanda(ljud);nyaljud[0].play();nyaljud[1].play() });
})()