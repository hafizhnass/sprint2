function datanilai(grade, nilai) {
    var nilai = prompt("masukkan nailai")
    var grade = ""

    switch(true){
    case nilai > 90:
    grade = "A"
    break

    case nilai > 80:
    grade = "B+"
    break

    case nilai > 70:
        grade = "B"
        break

        default:
            grade = "f"
}
 document.write(grade)   
}
datanilai()