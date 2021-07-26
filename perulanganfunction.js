function angka(awal, akhir){
    for(var y= awal; y <akhir; y++){
        for(var x= awal; x< akhir; x++){
            if(x == 9-(y-1)){
                var hasil =x * 2 - 2
                // var hasil2 = hasil* 3
            document.write(hasil)
            }else{
                document.write("_")
            }
            // document.write("<br/>")
        }
            document.write("<br/>")
    } 
}
angka(1, 10)



// function deretAngka(awal,akhir){
//     for()
// }
