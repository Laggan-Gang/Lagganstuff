[lokation, behöva, lyssna, använd, statisk, notera, skickaFil, roten] = [__dirname, require, "listen", "use", "static", (...i) => console.log(...i), "sendFile", "root"]

pronto = behöva('express')

ansökan = pronto()

ansökan[använd](pronto[statisk](__dirname, {
    extensions: ['öops', 'html', 'htm'],
    etag: false,
    redirect: true,
    setHeaders: (anrop, sökväg) => {
        /öops$/.test(sökväg) && anrop.set('Content-Type', 'text/html; charset=UTF-8')
    }
}))
ansökan[använd]((anrop, gehör) => {
    gehör[skickaFil]("./404.html", { [roten]: __dirname})
})

ansökan[lyssna](3000, () => {
    notera("startad och redo")
})