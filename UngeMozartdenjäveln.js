[läggTillHändelseSpanare, frågeVäljareAlla, bakgrundsPlatsX, bakgrundsPlatsY, bredd, höjd, sant, falskt, dokument, kropp, stil, fönster, begärAnimationsRuta, förVarje, hämtaGränsKlientFyrkant, omskalning, pekarförflyttning, matte, sättVäntetid] = ["addEventListener", "querySelectorAll", "backgroundPositionX", "backgroundPositionY", "width", "height", true, false, document, document.body, "style", window, requestAnimationFrame, "forEach", "getBoundingClientRect", "resize", "mousemove", Math, setTimeout]




klämtill = (x, liten, stor) => matte.min(stor, matte.max(liten, x));
korsfalna = (x, a, b) => x*a + (1-x)*b;
bjällerKurva = (x) => 1 - korsfalna(x, x*x, (1-x)*(1-x))
interpolera = (x, början, slutet) => (1-x) * början + x * slutet;
mjukare = (x, liten, stor, utjämnare) => interpolera(utjämnare(x), liten, stor)
slumpa = (början, slutet, utjämnare = x => x) => mjukare(matte.random(), början, slutet, utjämnare)
blanda = (matris) => [...matris].sort(() => slumpa(-1,1))



mål = { x: 0, y: 0 }
sportNytt = { x: 0, y: 0 }
alltsåNånslagsGränsFårDetVälVa = { x: 0, y: 0 };
störstaVärdet = { x: 0, y: 0 }
hastighet = 0.05
inverteradHastighet = 1 - hastighet;
animeras = falskt
avstudsare = falskt
fä = kropp[stil]
rörPåDigDÅ = () => {
    avstudsare = falskt
    sportNytt.x = sportNytt.x * inverteradHastighet + mål.x * hastighet
    if(sportNytt.x - mål.x < 0.0001) { sportNytt.x = mål.x };
    sportNytt.y = sportNytt.y * inverteradHastighet + mål.y * hastighet
    if(sportNytt.y - mål.y < 0.0001) { sportNytt.y = mål.y }
    fä[bakgrundsPlatsX] = sportNytt.x + "px";
    fä[bakgrundsPlatsY] = sportNytt.y + "px"
    extraPara[förVarje](([djur, [karaktärsdragX, karaktärsdragY]]) => {
        djur[stil][karaktärsdragX[0]] = sportNytt.x * karaktärsdragX[1] + "px";
        djur[stil][karaktärsdragY[0]] = sportNytt.y * karaktärsdragY[1] + "px";
    })
    if (sportNytt.x == mål.x && sportNytt.y == mål.y) {
        animeras = falskt
    } else {
        begärAnimationsRuta(rörPåDigDÅ)
    }
}
påomskalning = () => {
    fyrkanten = kropp[hämtaGränsKlientFyrkant]()
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
fönster[läggTillHändelseSpanare](omskalning, påomskalning)

sättVäntetid(() => {
    kropp[läggTillHändelseSpanare](pekarförflyttning, (e) => {
    if (!avstudsare) {
        avstudsare = sant
        mål.x = (e.x / alltsåNånslagsGränsFårDetVälVa.x) * störstaVärdet.x - störstaVärdet.x
        mål.y = (e.y / alltsåNånslagsGränsFårDetVälVa.y) * störstaVärdet.y - störstaVärdet.y;
        if (!animeras) {
            animeras = sant
            begärAnimationsRuta(rörPåDigDÅ)
        }
    };
})
}, avvakta || 0); 

dokument[frågeVäljareAlla](".stjärna")[förVarje]((lillbabs) => {
    x = 0;
    riktning = blanda(["left", "right", "top", "bottom"])[0]
    steg = slumpa(1, 10, (x) => x*x*x);
    sovstund = slumpa(5000, 25000, a => a*a)
    stjärnstoff = () => {
        lillbabs.style[riktning] = (x -= matte.round(matte.random()*steg+1)) + "px"; 
        setTimeout(stjärnstoff, matte.random()*sovstund+250);
    }
    setTimeout(stjärnstoff, matte.random()*10000+5000)
})
