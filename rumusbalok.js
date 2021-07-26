function hitungvolumeluaspemukaaan(panjang, lebar, tinggi) {
    volume = panjang * lebar * tinggi
    L_permukaan = 2 * panjang * lebar + 2 * panjang * lebar + 2 * tinggi * lebar

    document.write("panjang:" + panjang + "<br/>")
    document.write("lebar:" + lebar + "<br/>")
    document.write("tinggi:" + tinggi + "<br/>")
    document.write("volume:" + volume + "<br/>")
    document.write("L_permukaan;" + L_permukaan +"<br/>")  
}
inputpanjang = prompt("panjang")
inputlebar = prompt("lebar")
inputtinggi = prompt("tinggi")
hitungvolumeluaspemukaaan(inputpanjang, inputlebar, inputtinggi)