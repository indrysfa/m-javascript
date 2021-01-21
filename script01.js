/*--------------- Javascript @indrysfa -----------------*/

/*--------------- Function didalam Object -----------------*/
function showroom(){
    var Mobil = {
        nama: "Avanza",
        merk: "Toyota",
        tahun: 2010,
        pemilik: ['nana','nunu','jaja']
    }

    console.log(Mobil.pemilik)
    console.log(Mobil.nama)
    console.log(Mobil.merk)
    console.log(Mobil.tahun)

    document.write(Mobil.pemilik + "<br>")
    document.write(Mobil.pemilik[1] + "<br>")
    document.write(Mobil.nama + "<br>")
}

showroom()

/*--------------- Penggunaan Variabel -----------------*/
function Luassegi4(panjang,lebar){
    document.write("Luas segi4 dengan panjang " + panjang + " dan lebar " + lebar + " adalah " + panjang + lebar)
}

Luassegi4(4,6)

/*--------------- Nested Array -----------------*/
function mahasiswa(){
    var it = {
        nama: "Ali",
        nilai: {
            nilaihtml : 50,
            nilaicss : 75,
            nilaijs :100
        }
    }

    console.log(it.nilai.nilaicss)
    console.log(it.nilai.nilaijs)
}

mahasiswa()

/*--------------- For in -----------------*/
function callObject(){
    var mahasiswa = {
        nama: "nana",
        umur: 18,
        jurusan: "sistem Informasi"
    }

    for (var alias in mahasiswa){
        document.write(alias + "<br>") // panggil variabel
        document.write(mahasiswa[alias] + "<br>") // panggil value
    }

    for (var alias of angka){
        document.write(angka[i] + "<br>")
    }
}

callObject()

/*--------------- Manipulasi Array dengan Shift -----------------*/
function callShift() {
    var kota = ["Jakarta", "Bandung", "Semarang", "Surabaya"]
    console.log(kota)

    kota.shift() //manipulasi array dengan menghilangkan nilai pertama
    return kota

}

// contoh satu
console.log(callShift())

var a = callShift()
document.write(a)

// contoh dua
function callShift2() {
    var mahasiswa = ["Daniel", "Seungjae", "Jungkook", "Heejin"]

    mahasiswa.shift() //manipulasi array dengan menghilangkan nilai pertama
    
    return mahasiswa

}
// callShift() -->ini tidak berfungsi
var hasil = callShift2()
document.write(hasil[1] + " " + hasil[2])

/*--------------- Manipulasi Array dengan pop -----------------*/
function callPop() {
    var motor = ["Honda","Suzuki","Kawasaki","BMW","Yamaha"]
    console.log(motor)
    motor.pop() // untuk memanipulasi array dengan menghilangkan value yg terakhir

    return motor
}

document.write(callPop()) //value yamaha menghilang

/*--------------- Manipulasi Array dengan push -----------------*/
function karyawan() {
    var nama = ["Daniel", "Seungjae", "Jungkook", "Heejin"]
    console.log(nama)

    nama.push("HanSoHee","Mina") // untuk memanipulasi array dengan menambahkan value pada variabel
    nama.push(10,11,12)
    nama.push(20+30)

    return nama
}

document.write(karyawan()) 

/*--------------- Manipulasi Array dengan splice -----------------*/
function callSpice() {
    var makanan = ["cilok","cilor","cireng","cimol","kentang","tahu"]
    console.log(makanan)

    makanan.splice(2,2,"martabak","telor") // menghapus value dari parameter awal dan untuk value kedua dihitung dari value pada parameter awal
    // value cireng & cimol hilang tergantikan dengan martabak & telor
    
    return makanan
}

document.write(callSpice())

/*--------------- Manipulasi Array dengan unshift -----------------*/
function callUnshift() {
    var minuman = ["espresso","americano","numero uno","white coffee"]
    console.log(minuman)

    minuman.unshift("Avogato","Long black") // menambahkan value di value awal pada variabel

    return minuman
}

document.write(callUnshift())

/*--------------- ConTOH -----------------*/
var teks = "Edutech weekend batch 2"
panjanng = teks.length;
document.write(teks)
console.log(panjang)

var array = [1,2,3,4,5,6,7,8]
console.log(array.length)

var message = "Welcome to the javascript"
document.write(message.toUpperCase().bold().italics() + "<br>")
document.write(message.toLowerCase().italics() + "<br>")



// TUGAS
/*--------------- function didalam nya ada array -----------------*/
// 1 2 edu 4 tech edu 7 8 edu tech
// berupa function didalam nya ada array
// didalam for ada if
function School() {
    var angka = [1,2,3,4,5,6,7,8]
    var nama = ["edu","tech"]
    console.log(angka)
    console.log(nama)

    angka.splice(2,1,"edu")
    angka.splice(4,2,"tech","edu")
    angka.push("edu","tech")
    
    return angka
}

document.write(School())