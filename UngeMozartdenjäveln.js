const [läggTillEventLyssnare, frågeVäljareAlla, bakgrundsPlatsX, bakgrundsPlatsY, bredd, höjd, sant, falskt, dokument, kropp, stil, fönster, begärAnimationsRuta, förVarje, hämtaGränsKlientFyrkant, omskalning, pekarförflyttning, matte] = ["addEventListener", "querySelectorAll", "backgroundPositionX", "backgroundPositionY", "width", "height", true, false, document, document.body, "style", window, requestAnimationFrame, "forEach", "getBoundingClientRect", "resize", "mousemove", Math]

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
    const fyrkanten = kropp[hämtaGränsKlientFyrkant]()
    alltsåNånslagsGränsFårDetVälVa.x = fyrkanten[bredd];
    alltsåNånslagsGränsFårDetVälVa.y = fyrkanten[höjd]
    if(fyrkanten[bredd] > fyrkanten[höjd]) {
        störstaVärdet.x = störstaDistansen * (fyrkanten[höjd]/fyrkanten[bredd]);
        störstaVärdet.y = störstaDistansen
    } else {
        störstaVärdet.x = störstaDistansen;
        störstaVärdet.y = störstaDistansen * (fyrkanten[bredd]/fyrkanten[höjd]) 

    }
}
påomskalning()
fönster[läggTillEventLyssnare](omskalning, påomskalning)
kropp[läggTillEventLyssnare](pekarförflyttning, (händelse) => {
    if (!avstudsare) {
        avstudsare = sant
        mål.x = (händelse.x / alltsåNånslagsGränsFårDetVälVa.x) * störstaVärdet.x - störstaVärdet.x
        mål.y = (händelse.y / alltsåNånslagsGränsFårDetVälVa.y) * störstaVärdet.y - störstaVärdet.y;
        if (!animeras) {
            animeras = sant
            begärAnimationsRuta(rörPåDigDÅ)
        }
    };
})

klämtill = (x, liten, stor) => matte.min(stor, matte.max(liten, x));
korsfalna = (x, a, b) => x*a + (1-x)*b;
bjällerKurva = (x) => 1 - korsfalna(x, x*x, (1-x)*(1-x))
interpolera = (x, början, slutet) => (1-x) * början + x * slutet;
mjukare = (x, liten, stor, utjämnare) => interpolera(utjämnare(x), liten, stor)
slumpa = (början, slutet, utjämnare = x => x) => mjukare(matte.random(), början, slutet, utjämnare)
blanda = (matris) => [...matris].sort(() => slumpa(-1,1))

dokument[frågeVäljareAlla](".stjärna")[förVarje]((lillbabs) => {
    let x = 0;
    let riktning = blanda(["left", "right", "top", "bottom"])[0]
    let steg = slumpa(1, 10, (x) => x*x*x);
    let sovstund = slumpa(5000, 25000, a => a*a)
    const stjärnstoff = () => {
        lillbabs.style[riktning] = (x -= matte.round(matte.random()*steg+1)) + "px"; 
        setTimeout(stjärnstoff, matte.random()*sovstund+250);
    }
    setTimeout(stjärnstoff, matte.random()*10000+5000)
})
