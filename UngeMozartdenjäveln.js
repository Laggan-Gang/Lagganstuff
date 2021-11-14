[läggTillHändelseSpanare, frågeVäljareAlla, bakgrundsPlatsX, bakgrundsPlatsY, bredd, höjd, sant, falskt, dokument, kropp, stil, fönster, begärAnimationsRuta, förVarje, hämtaGränsKlientFyrkant, omskalning, pekarförflyttning, Matte, sättVäntetid, sortera, slump, funktion, typav, om, avrunda, animering, ingen, absolut, notera, Matris, klicka, muterad, hämtaRadiatorEfterLegitimation, förminska, knuffa, skär, längd, barn, källa, ersätt, sökVäg, förläggning, klyv, sammanfoga, förena, vänster, höger, toppen, bottnen, tavelPlättar, invändigÖOPS, ÖverOrdalydelsePåläggSpråk, tillLagad, lokalLagring, hämtaFöremål, sättFöremål, skapaElement, tavla, nätmb, hämtaSammanhang, bifogaBarn, skapaSkuggare, VERTEX_SKUGGARE, skuggarKälla, kompileraSkuggare, hämtaSkuggVariabel, KOMPILATIONS_STATUS, hämtaSkuggDeklarationsLoggbok, utplånaSkuggare, kasta, fångaFel, SKÄRV_SKUGGARE, skapaDagordning, bifogaSkuggare, länkaDagordning, hämtaDagordningsVariabel, användDagordning, hämtaDagordningsInformationsLoggbok, förstörDagordning, LÄNK_STATUS, Objekt, poster, hämtaEgenskapsPlats, skapaBuffert, snärjBuffert, MATRIS_BUFFER, tillgängliggörVertexEgenskapsMatris, vertexEgenskapsPekare, FLYTTAL, definieraEgendom, ställ, hämta, egenskap, likformsTyper, hämtaLikformigPlats, OSIGNERAD_OKTETT, skapaStruktur, snärjStruktur, STRUKTUR_2D, strukturBild2D, strukturVariabelHeltal, nyOsigneradHeltalsOktettMatris, påLaddning, STRUKTUR_MINIFIERINGSSIL, STRUKTUR_FÖRSTORINGSSIL, STRUKTUR_OMSLAG_S, STRUKTUR_OMSLAG_T, LINJÄR, KLÄMTILL_MOT_KANT, τ, möjliggör, SAMMANSMÄLTNING, GALLRA_YTA, KÄLLA_OGENOMSKINLIGHET, sammansmältningsFunktion, stängAv, DJUP_TEST, ETT, fönsterHamn, rengörNyans, buffraInnehåll, nyFlyttals32Matris, STATISK_RITNING, prestanda, nu, rensa, NYANSBUFFERBIT, PUNKTER, ritaMatriser, tomhet, huvud, flyttal, bivektor, trivektor, quadvektor, bimatris, trimatris, quadmatris, högn, noggrannhet, mb_Plats, mb_PunktStorlek, likformig, brokig, mb_SkärvNyans, struktur2D, mb_PunktPlats, provtagare2D, värdelös, kompensationsBredd, kompensationsHöjd, från, placeraMellanakt, golva] = 
["addEventListener", "querySelectorAll", "backgroundPositionX", "backgroundPositionY", "width", "height", true, false, document, "body", "style", window, requestAnimationFrame, "forEach", "getBoundingClientRect", "resize", "mousemove", Math, setTimeout, "sort", () => Matte.random(), "function", (variabel) => typeof variabel, (kanske, ja, nej = () => undefined) => (typeof kanske === funktion ? kanske() : kanske) ? ja() : nej(), (x) => Math.round(x), "animation", "none", (x) => Math.abs(x), (...data) => console.log(...data), Array, "click", "muted", i => document.getElementById(i), "reduce", "push", "slice", "length", "children", "src", "replace", "pathname", "location", "split", "concat", "join", "left", "right", "top", "bottom", "px", "innerHTML", "html", "toFixed", "localStorage", "getItem", "setItem", (...värden) => document.createElement(...värden), "canvas", "webgl", "getContext", "appendChild", "createShader", "VERTEX_SHADER", "shaderSource", "compileShader", "getShaderParameter", "COMPILE_STATUS", "getShaderInfoLog", "deleteShader", (i) => { throw i }, (agitatör, felhanterare) => { try { agitatör() } catch(e) { felhanterare(e) }}, "FRAGMENT_SHADER", "createProgram", "attachShader", "linkProgram", "getProgramParameter", "useProgram", "getProgramInfoLog", "deleteProgram", "LINK_STATUS", Object, "entries", "getAttribLocation", "createBuffer", "bindBuffer", "ARRAY_BUFFER", "enableVertexAttribArray", "vertexAttribPointer", "FLOAT", "defineProperty", "set", "get", "attribute", {flyttal: 'uniform1f',heltal: 'uniform1i',bivektor: 'uniform2f',trivektor: 'uniform3f',quadmatris: 'uniformMatrix4fv'}, 'getUniformLocation', "UNSIGNED_BYTE", "createTexture", "bindTexture", "TEXTURE_2D", "texImage2D", "texParameteri", (i) => new Uint8Array(i), "onload", "TEXTURE_MIN_FILTER", "TEXTURE_MAG_FILTER", "TEXTURE_WRAP_S", "TEXTURE_WRAP_T", "LINEAR", "CLAMP_TO_EDGE", Math.PI*2, "enable", 'BLEND', 'CULL_FACE', 'SRC_ALPHA', 'blendFunc', 'disable', 'DEPTH_TEST', 'ONE', "viewport", "clearColor", "bufferData", (data) => new Float32Array(data), "STATIC_DRAW", performance, "now", "clear", "COLORBUFFERBIT", "POINTS", "drawArrays", "void", "main", "float", "vec2", "vec3", "vec4", "mat2", "mat3", "mat4", "highp", "precision", "gl_Position", "gl_PointSize", "uniform", "varying", "gl_FragColor", "texture2D", "gl_PointCoord", "sampler2D", null, "offsetWidth", "offsetHeight", "from", setInterval, Math.floor]
;[FÜR_ALLE] = ["forEach"]



klämtill = (x, liten, stor) => Matte.min(stor, Matte.max(liten, x));
korsfalna = (x, a, b) => x * a + (1 - x) * b;
bjällerKurva = (x) => 1 - korsfalna(x, x * x, (1 - x) * (1 - x))
interpolera = (x, början, slutet) => (1 - x) * början + x * slutet;
mjukare = (x, liten, stor, utjämnare) => interpolera(utjämnare(x), liten, stor)
slumpa = (början, slutet, utjämnare = x => x) => mjukare(slump(), början, slutet, utjämnare)
blanda = (iMatris) => {
    [blyack, matris] = [[], [...iMatris]]
    matris[förVarje](() => {
        blyack[knuffa](matris[skär](slumpa(0, matris[längd])))
    })
    return matris
}

sköterDuDig = slumpa(0, 9010)
om(() => sköterDuDig > 9000, () => {
    fönster[förläggning][sökVäg] = fönster[förläggning][sökVäg][klyv]("/")[skär](0, -1)[sammanfoga](["/skärpDig.html"])[förena]("/")
})


mål = { x: 0, y: 0 }
sportNytt = { x: 0, y: 0 }
alltsåNånslagsGränsFårDetVälVa = { x: 0, y: 0 };
störstaVärdet = { x: 0, y: 0 }
hastighet = 0.01
inverteradHastighet = 1 - hastighet;
animeras = falskt
avstudsare = falskt;
kanAnimeras = fönster[lokalLagring][hämtaFöremål]('bidwin') !== "sant" && !fönster.skit_i_animering
sättVäntetid(() => {
    fä = dokument[kropp][stil]
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
        fyrkanten = dokument[kropp][hämtaGränsKlientFyrkant]()
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

    dokument[kropp][läggTillHändelseSpanare](pekarförflyttning, (händelse) => {
        om(() => !avstudsare, () => {
            avstudsare = sant
            mål.x = (händelse.x / alltsåNånslagsGränsFårDetVälVa.x) * störstaVärdet.x - störstaVärdet.x
            mål.y = (händelse.y / alltsåNånslagsGränsFårDetVälVa.y) * störstaVärdet.y - störstaVärdet.y;
            om(() => !animeras && kanAnimeras, () => {
                animeras = sant
                begärAnimationsRuta(rörPåDigDÅ)
            })
        });
    })
}, fönster.avvakta || 0);

dokument[frågeVäljareAlla](".stjärna")[förVarje]((lillbabs) => {
    x = 0;
    riktning = blanda([vänster, höger, toppen, bottnen])[0]
    steg = slumpa(1, 10, (x) => x * x * x);
    sovstund = slumpa(5000, 25000, a => a * a)
    stjärnstoff = () => {
        lillbabs[stil][riktning] = (x -= avrunda(slump() * steg + 1)) + tavelPlättar;
        sättVäntetid(stjärnstoff, slump() * sovstund + 250);
    }
    sättVäntetid(stjärnstoff, slump() * 10000 + 5000)
})
