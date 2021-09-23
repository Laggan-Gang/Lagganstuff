const [läggTillEventLyssnare, frågeVäljareAlla, bakgrundsPlatsX, bakgrundsPlatsY, bredd, höjd, sant, falskt, dokument, kropp, stil, fönster, begärAnimationsRuta, förVarje] = ["addEventListener", "querySelectorAll", "backgroundPositionX", "backgroundPositionY", "width", "height", true, false, document, document.body, "style", window, requestAnimationFrame, "forEach"]

const mål = { x: 0, y: 0 }
const sportNytt = { x: 0, y: 0 }
const alltsåNånslagsGränsFårDetVälVa = { x: 0, y: 0 };
const störstaVärdet = { x: 0, y: 0 }
const hastighet = 0.05
const inverteradHastighet = 1 - hastighet;
let animeras = falskt
let avstudsare = falskt
const fä = kropp[stil]
const rörPåDigDÅ = () => {
    avstudsare = falskt
    sportNytt.x = sportNytt.x * inverteradHastighet + mål.x * hastighet
    if(sportNytt.x - mål.x < 0.0001) { sportNytt.x = mål.x };
    sportNytt.y = sportNytt.y * inverteradHastighet + mål.y * hastighet
    if(sportNytt.y - mål.y < 0.0001) { sportNytt.y = mål.y }
    fä[bakgrundsPlatsX] = sportNytt.x + "px";
    fä[bakgrundsPlatsY] = sportNytt.y + "px"
    if (sportNytt.x == mål.x && sportNytt.y == mål.y) {
        animeras = falskt
    } else {
        begärAnimationsRuta(rörPåDigDÅ)
    }
}
const påomskalning = () => {
    const rect = document.body.getBoundingClientRect()
    alltsåNånslagsGränsFårDetVälVa.x = rect[bredd];
    alltsåNånslagsGränsFårDetVälVa.y = rect[höjd]
    if(rect[bredd] > rect[höjd]) {
        störstaVärdet.x = störstaDistansen * (rect[höjd]/rect[bredd]);
        störstaVärdet.y = störstaDistansen
    } else {
        störstaVärdet.x = störstaDistansen;
        störstaVärdet.y = störstaDistansen * (rect[bredd]/rect[höjd]) 

    }
}
påomskalning()
fönster[läggTillEventLyssnare]("resize", påomskalning)
const lyssnare = (e) => {
    if (!avstudsare) {
        avstudsare = sant
        mål.x = (e.x / alltsåNånslagsGränsFårDetVälVa.x) * störstaVärdet.x - störstaVärdet.x
        mål.y = (e.y / alltsåNånslagsGränsFårDetVälVa.y) * störstaVärdet.y - störstaVärdet.y;
        if (!animeras) {
            animeras = sant
            begärAnimationsRuta(rörPåDigDÅ)
        }
    };
}
kropp[läggTillEventLyssnare]("mousemove", lyssnare)

const klämtill = (x, liten, stor) => Math.min(stor, Math.max(liten, x));
blanda = (matris) => [...matris].sort(() => Math.random()*2-1)
const interpolera = (x, början, slutet) => (1-x) * början + x * slutet;
const mjukare = (x, liten, stor, utjämnare) => interpolera(utjämnare(x), liten, stor)

dokument[frågeVäljareAlla](".stjärna")[förVarje]((lillbabs) => {
    let x = 0;
    let riktning = blanda(["left", "right", "top", "bottom"])[0]
    let steg = mjukare(Math.random(), 1, 10, (x) => x*x*x);
    let sovstund = mjukare(Math.random(), 5000, 25000, a => a*a)
    const stjärnstoff = () => {
        lillbabs.style[riktning] = (x -= Math.round(Math.random()*steg+1)) + "px"; 
        setTimeout(stjärnstoff, Math.random()*sovstund+250);
    }
    setTimeout(stjärnstoff, Math.random()*10000+5000)
})
