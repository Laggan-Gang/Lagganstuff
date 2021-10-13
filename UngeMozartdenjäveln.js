[läggTillHändelseSpanare, frågeVäljareAlla, bakgrundsPlatsX, bakgrundsPlatsY, bredd, höjd, sant, falskt, dokument, kropp, stil, fönster, begärAnimationsRuta, förVarje, hämtaGränsKlientFyrkant, omskalning, pekarförflyttning, Matte, sättVäntetid, sortera, slump, funktion, typav, om, avrunda, animering, ingen, absolut, notera, Matris] = ["addEventListener", "querySelectorAll", "backgroundPositionX", "backgroundPositionY", "width", "height", true, false, document, document.body, "style", window, requestAnimationFrame, "forEach", "getBoundingClientRect", "resize", "mousemove", Math, setTimeout, "sort", () => Matte.random(), "function", (variabel) => typeof variabel, (kanske, ja, nej = () => undefined) => (typeof kanske === funktion ? kanske() : kanske) ? ja() : nej(), (x) => Math.round(x), "animation", "none", (x) => Math.abs(x), (...data) => console.log(...data), Array]




klämtill = (x, liten, stor) => Matte.min(stor, Matte.max(liten, x));
korsfalna = (x, a, b) => x * a + (1 - x) * b;
bjällerKurva = (x) => 1 - korsfalna(x, x * x, (1 - x) * (1 - x))
interpolera = (x, början, slutet) => (1 - x) * början + x * slutet;
mjukare = (x, liten, stor, utjämnare) => interpolera(utjämnare(x), liten, stor)
slumpa = (början, slutet, utjämnare = x => x) => mjukare(slump(), början, slutet, utjämnare)
blanda = (matris) => [...matris][sortera](() => slumpa(-1, 1))


mål = { x: 0, y: 0 }
sportNytt = { x: 0, y: 0 }
alltsåNånslagsGränsFårDetVälVa = { x: 0, y: 0 };
störstaVärdet = { x: 0, y: 0 }
hastighet = 0.01
inverteradHastighet = 1 - hastighet;
animeras = falskt
avstudsare = falskt;
fä = kropp[stil]
rörPåDigDÅ = () => {
    avstudsare = falskt
    sportNytt.x = sportNytt.x * inverteradHastighet + mål.x * hastighet
    om(absolut(sportNytt.x - mål.x) < 0.0001, () => { sportNytt.x = mål.x });
    sportNytt.y = sportNytt.y * inverteradHastighet + mål.y * hastighet
    om(absolut(sportNytt.y - mål.y) < 0.0001, () => { sportNytt.y = mål.y })
    fä[bakgrundsPlatsX] = sportNytt.x + "px";
    fä[bakgrundsPlatsY] = sportNytt.y + "px"
    om(fönster.extraPara, () => fönster.extraPara(störstaVärdet, sportNytt))
    om(sportNytt.x == mål.x && sportNytt.y == mål.y, () => { animeras = falskt }, () => begärAnimationsRuta(rörPåDigDÅ, 250))
}
minStörstaDistans = window.störstaDistansen || 500;
påomskalning = () => {
    fyrkanten = kropp[hämtaGränsKlientFyrkant]()
    alltsåNånslagsGränsFårDetVälVa.x = fyrkanten[bredd];
    alltsåNånslagsGränsFårDetVälVa.y = fyrkanten[höjd]
    om(fyrkanten[bredd] > fyrkanten[höjd], () => {
        störstaVärdet.x = minStörstaDistans * (fyrkanten[höjd] / fyrkanten[bredd]);
        störstaVärdet.y = minStörstaDistans
    }, () => {
        störstaVärdet.x = minStörstaDistans;
        störstaVärdet.y = minStörstaDistans * (fyrkanten[bredd] / fyrkanten[höjd])
    })
}
påomskalning()
fönster[läggTillHändelseSpanare](omskalning, påomskalning)

sättVäntetid(() => {
    kropp[läggTillHändelseSpanare](pekarförflyttning, (händelse) => {
        om(() => !avstudsare, () => {
            avstudsare = sant
            mål.x = (händelse.x / alltsåNånslagsGränsFårDetVälVa.x) * störstaVärdet.x - störstaVärdet.x
            mål.y = (händelse.y / alltsåNånslagsGränsFårDetVälVa.y) * störstaVärdet.y - störstaVärdet.y;
            om(() => !animeras, () => {
                animeras = sant
                begärAnimationsRuta(rörPåDigDÅ)
            })
        });
    })
}, fönster.avvakta || 0);

dokument[frågeVäljareAlla](".stjärna")[förVarje]((lillbabs) => {
    x = 0;
    riktning = blanda(["left", "right", "top", "bottom"])[0]
    steg = slumpa(1, 10, (x) => x * x * x);
    sovstund = slumpa(5000, 25000, a => a * a)
    stjärnstoff = () => {
        lillbabs.style[riktning] = (x -= avrunda(slump() * steg + 1)) + "px";
        sättVäntetid(stjärnstoff, slump() * sovstund + 250);
    }
    sättVäntetid(stjärnstoff, slump() * 10000 + 5000)
})
