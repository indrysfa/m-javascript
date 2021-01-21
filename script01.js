/*--------------- Javascript @indrysfa -----------------*/

/*--------------- Function didalam Object -----------------*/
function showroom() {
    var Mobil = {
        nama: "Avanza",
        merk: "Toyota",
        tahun: 2010,
        pemilik: ['nana', 'nunu', 'jaja']
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
function Luassegi4(panjang, lebar) {
    document.write("Luas segi4 dengan panjang " + panjang + " dan lebar " + lebar + " adalah " + panjang + lebar)
}

Luassegi4(4, 6)

/*--------------- Nested Array -----------------*/
function mahasiswa() {
    var it = {
        nama: "Ali",
        nilai: {
            nilaihtml: 50,
            nilaicss: 75,
            nilaijs: 100
        }
    }

    console.log(it.nilai.nilaicss)
    console.log(it.nilai.nilaijs)
}

mahasiswa()

/*--------------- For in -----------------*/
function callObject() {
    var mahasiswa = {
        nama: "nana",
        umur: 18,
        jurusan: "sistem Informasi"
    }

    for (var alias in mahasiswa) {
        document.write(alias + "<br>") // panggil variabel
        document.write(mahasiswa[alias] + "<br>") // panggil value
    }

    for (var alias of angka) {
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
    var motor = ["Honda", "Suzuki", "Kawasaki", "BMW", "Yamaha"]
    console.log(motor)
    motor.pop() // untuk memanipulasi array dengan menghilangkan value yg terakhir

    return motor
}

document.write(callPop()) //value yamaha menghilang

/*--------------- Manipulasi Array dengan push -----------------*/
function karyawan() {
    var nama = ["Daniel", "Seungjae", "Jungkook", "Heejin"]
    console.log(nama)

    nama.push("HanSoHee", "Mina") // untuk memanipulasi array dengan menambahkan value pada variabel
    nama.push(10, 11, 12)
    nama.push(20 + 30)

    return nama
}

document.write(karyawan())

/*--------------- Manipulasi Array dengan splice -----------------*/
function callSpice() {
    var makanan = ["cilok", "cilor", "cireng", "cimol", "kentang", "tahu"]
    console.log(makanan)

    makanan.splice(2, 2, "martabak", "telor") // menghapus value dari parameter awal dan untuk value kedua dihitung dari value pada parameter awal
    // value cireng & cimol hilang tergantikan dengan martabak & telor

    return makanan
}

document.write(callSpice())

/*--------------- Manipulasi Array dengan unshift -----------------*/
function callUnshift() {
    var minuman = ["espresso", "americano", "numero uno", "white coffee"]
    console.log(minuman)

    minuman.unshift("Avogato", "Long black") // menambahkan value di value awal pada variabel

    return minuman
}

document.write(callUnshift())

/*--------------- ConTOH -----------------*/
var teks = "Edutech weekend batch 2"
panjanng = teks.length;
document.write(teks)
console.log(panjang)

var array = [1, 2, 3, 4, 5, 6, 7, 8]
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
    var angka = [1, 2, 3, 4, 5, 6, 7, 8]
    var nama = ["edu", "tech"]
    console.log(angka)
    console.log(nama)

    angka.splice(2, 1, "edu")
    angka.splice(4, 2, "tech", "edu")
    angka.push("edu", "tech")

    return angka
}

document.write(School())

/*--------------- Javascript DOM -----------------*/
function dataPribadi() {
    console.log(document.getElementById("nama"))
    console.log(document.getElementById("alamat"))
}

function checking() {
    document.getElementById('textcheck').checked = true;
}

function hide() {
    document.getElementById('textcheck').checked = false;
}

function displayDate() {
    document.getElementById("demo").innerHTML = Date()
    document.getElementById("demo2").value = Date()
}

function start() {
    document.getElementById("ayam").disabled = false;
}

function stop() {
    document.getElementById("ayam").disabled = true;
}


/*--------------- Javascript Pembentukan dengan Bintang (*) -----------------*/
document.write("<br><hr>")
document.write("bintang")
document.write("<br><hr>")

//*
//**
//***
//****
//*****
//*****
//****
//***
//**
//*

for (var i = 0; i < 6; i++) {
    for (var j = 0; j < i; j++) {
        document.write("*")
    }
    document.write("<br>")
}

for (var i = 0; i < 5; i++) {
    for (var j = 5; j > i; j--) {
        document.write("*")
    }
    document.write("<br>")
}

document.write("<br><hr>")
document.write("diamond symbol")
document.write("<br><hr>")

//_____*
//____***
//___*****
//__*******
//_*********
//_*********
//__*******
//___*****
//____***
//_____*


for (var i = 0; i <= 10; i++) {
    for (var j = 10; j >= i; j--) {
        document.write("_")
    }

    for (var j = 0; j < i; j++) {
        document.write("*")
    }

    for (var j = 0; j < i - 1; j++) {
        document.write("*")
    }

    for (var j = 10; j > i; j--) {
        document.write("_")
    }

    document.write("<br>")
}

for (var i = 0; i <= 10; i++) {
    for (var j = 0; j < i; j++) {
        document.write("_")
    }

    for (var j = 10; j > i; j--) {
        document.write("*")
    }

    for (var j = 10; j > i - 1; j--) {
        document.write("*")
    }

    for (var j = 0; j < i; j++) {
        document.write("_")
    }
    document.write("<br>")
}


document.write("<br><hr>")
document.write("mengubah font")
document.write("<br><hr>")

var message = "Batch 2"
var format = message.toUpperCase()
document.write(message)
document.write(format.fontsize(6))
document.write(message[3].fontsize(5))
document.write(message.charAt(2).fontsize(7))

//Indry Sefviana

// TUGAS
document.write("<br><hr>")
document.write("Tugas mengubah font")
document.write("<br><hr>")

var i = "Indry Sefviana"
var format = i.toUpperCase()
var format1 = i.fontsize(3)
var format2 = i.fontsize(4)
var format3 = i.fontsize(5)
var format4 = i.fontsize(6)

for (var a = 0; a < i.length; a++) {
    document.write(i[a].fontsize(1))

}

/*--------------- DOM ByClassName -----------------*/

var penampungclass = document.getElementsByClassName("warna")

//opsi 1
penampungclass[0].style.background = "orange"
//opsi 2
document.getElementsByClassName("warna")[1].style.background = "green"

var penampungtag = document.getElementsByTagName("p")

//opsi 1
penampungtag[4].style.background = "red"
//opsi 2
document.getElementsByTagName("p")[2].style.background = "blue"

/*--------------- DOM ByClassName Color Striped -----------------*/

var a = document.getElementsByClassName("color")

for (var i = 0; i < a.length; i++) {
    if (a[i].className == "color") {
        a[i].style.background = "yellow"
    }
}

/*--------------- DOM ByClassName Color All -----------------*/

var a = document.getElementsByClassName("pink")

for (var i = 0; i < a.length; i++) {
    if (a[i].className == "pink") {
        a[i].style.background = "pink"
    }
}

/*--------------- Contoh Mengubah Font dengan Javascript -----------------*/
document.write("<br><hr>")
document.write("Contoh Mengubah Font dengan Javascript".fontsize(5).fontcolor('blue'))
document.write("<br><hr>")

var message = "Batch 2"
var format = message.toUpperCase()
document.write(message)
document.write(format.fontsize(6))
document.write(message[3].fontsize(5))
document.write(message.charAt(2).fontsize(7))


/*--------------- Tugas Mengubah Font & 7 Warna dengan Javascript -----------------*/
//Indry Sefviana
// TUGAS
document.write("<br><hr>")
document.write("Tugas Mengubah Font & 7 Warna dengan Javascript".fontsize(5).fontcolor('blue'))
document.write("<br><hr>")

var i = "indrysefviana"
var format = i.toUpperCase()

// for (var b = 0; b < format.length; b++) {
var size = 1;
var color = ['red', 'purple', 'yellow', 'green', 'blue', 'brown', 'pink']
for (var a = 0; a < format.length; a++) {
    // document.write(format.charAt(a).fontsize(size))
    // for (var c = 0; c < color.length; c++) {
    document.write(format.charAt(a).fontsize(size).fontcolor(color[size - 1]))
    if (size < 7) {
        size += 1
    } else {
        size = 1
    }
}
/*--------------- Contoh Mengabungkan String -----------------*/
document.write("<br><hr>")
document.write("Contoh Mengabungkan String".fontsize(5).fontcolor('blue'))
document.write("<br><hr>")

var part1 = "Kalimat pertama digabungkan dengan ";
var part2 = "Kalimat kedua";
var s = part1.concat(part2);
document.write(s);

/*--------------- Contoh Merubah Warna Table dengan DOM ByClassName & ByTagName -----------------*/
document.write("<br><hr>")
document.write("Tugas 1".fontsize(5).fontcolor('blue'))
document.write("<br><hr>")

var a = document.getElementsByClassName("karyawan")

for (var i = 0; i < a.length; i++) {
    a[i].style.border = "1px solid black"
    a[i].style.width = "200px";
}


var b = document.getElementsByTagName("td")

for (var i = 4; i < b.length; i++) {
    b[i].style.border = "1px solid red"
    b[i].style.width = "200px";
}

/*--------------- Select Option + Read Value -----------------*/
document.write("<br><hr>")
document.write("Select Option + Read Value".fontsize(5).fontcolor('blue'))
document.write("<br><hr>")

function dor() {
    var a = document.getElementsByTagName("option")
    if (a[1].selected == true) {
        document.getElementById("tampil").value = "Safari"
    } else if (a[2].selected == true) {
        document.getElementById("tampil").value = "Chrome"
    } else if (a[3].selected == true) {
        document.getElementById("tampil").value = "Firefox"
    } else {
        document.getElementById("tampil").value = "Internet Explorer"
    }
}

/*--------------- Select Option Sederhana-----------------*/
function pilih() {
    var a = document.getElementById("menu").value

    document.getElementById("data").innerHTML = "Kamu mau " + a + " kan"
}

/*--------------- Tulisan Terbalik -----------------*/
function terbalik(x) {
    var a = ""

    for (var i = x.length - 1; i >= 0; i--) {
        a += x[i];
    }
    return a
}
document.write(terbalik("indrysefviana"))

terbalik("x")

/*--------------- activeElement -----------------*/
function tombol() {
    var a = document.activeElement.tagName;
    document.getElementById("jalan").innerHTML = a;
}

/*--------------- Popup -----------------*/
function load() {
    alert("Selamat");
}

/*--------------- Alert Setelah Copy -----------------*/
function copyText() {
    document.getElementById("dolar").innerHTML = document.getElementsByTagName("input").value + "Duit berhasil di copy";
}

function pasteText() {
    document.getElementById("dolar").innerHTML = "Selamat!"
}

/*--------------- Fungsi Klik & Double Klik -----------------*/

document.addEventListener("dblclick", function () {
    document.getElementById('jalan').innerHTML = "Hati-Hati"
})

document.getElementById('jalan').addEventListener("click", function () {
    document.getElementById('jalan').innerHTML = "Jalan lagi"
})

/*--------------- Kosongkan Halaman -----------------*/

function jalankan() {
    document.open()
    document.write("<h1>Selamat Hari Raya Idul Fitri</h1>")
}

/*--------------- Drag & Drop -----------------*/

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id)
}

function dragging(event) {
    document.getElementById("objectText").innerHTML = "Data sedang di drop"
}

function allowDrop(event) {
    event.preventDefault()
}

function drop(event) {
    event.preventDefault()
    var data = event.dataTransfer.getData("Text")
    event.target.appendChild(document.getElementById(data))
    document.getElementById("objectText").innerHTML = "Data sudah di drag"
}

/*--------------- Mengubah fungsi didalam body & element (tambah button & ubah warna -----------------*/

function klik() {
    var data = document.anchors.length
    console.log(document.anchors)
    document.getElementById("data").innerHTML = data
}

var a = true

function warna() {
    if (a == true) {
        document.body.style.backgroundColor = "yellow"
        a = false
    } else {
        document.body.style.backgroundColor = "orange"
        a = true
    }
}

function tambah() {
    var button = document.createElement('button')
    button.innerHTML = "button tambahan loh"
    button.style.backgroundColor = "pink"
    document.querySelectorAll('div')[2].appendChild(button)
}

/*--------------- Fungsi Event onerror -----------------*/
function errorData() {
    alert("Error nih")
}

/*--------------- Fungsi Event onfocus -----------------*/
function eventFocus(x) {
    x.style.background = "#7FFFD4"
}

/*--------------- Fungsi Event onkeypress -----------------*/
function ubah(x) {
    x.style.background = "#7FFF00"
}

/*--------------- Fungsi Event onkeydown -----------------*/
function tekan(x) {
    x.style.background = "#9932CC"
}

function lepas(x) {
    x.style.background = "#FF8C00"
}

/*--------------- Fungsi Event onmouseover & onmouseout -----------------*/
function muncul(x) {
    x.style.fontSize = "80px"
    x.style.background = "#FF00FF"
}

function hilang(x) {
    x.style.fontSize = "18px"
    x.style.background = "#DCDCDC"
}

function muncul1(x) {
    x.style.width = "300px"
    x.style.background = "#FF00FF"
}

function hilang1(x) {
    x.style.width = "40px"
    x.style.background = "#DCDCDC"
}

/*--------------- Fungsi Event geolocation -----------------*/
var p = document.getElementById('lokasi')

function getLoc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posisi);
    } else {
        p.innerHTML = "Lokasi tidak di support oleh browser anda"
    }
}

function posisi(position) {
    p.innerHTML = "Koordinat (Latitude): " + position.coords.latitude + "<br>Koordinat (Longitude): " + position.coords.longitude
}

// fungsi ini butuh api
function posisi1(position) {
    p.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4457311971883!2d' + position.coords.longitude + '!3d' + position.coords.latitude + '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6db34e3fb49%3A0x7ca7ebb35431f4a!2sJl.%20Salam%20Raya%2017-2%2C%20RT.1%2FRW.3%2C%20Sukabumi%20Utara%2C%20Kec.%20Kb.%20Jeruk%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011540!5e0!3m2!1sid!2sid!4v1591432023835!5m2!1sid!2sid" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
}

/*--------------- Fungsi Event back, forward & go -----------------*/
// buka sebelum dan sesudah sebanyak 2 halaman masing2 untuk testing
// sama fungsi seperti back & forward pada page browser
function back() {
    window.history.back()
}

function forward() {
    window.history.forward()
}

function go(x) {
    window.history.go(x)
}

/*--------------- Fungsi Event geolocation -----------------*/
function dataElement() {
    var h3 = document.getElementsByTagName('h3')
    for (var i = 0; i < h3.length; i++) {
        alert(h3.item(i).innerHTML)
    }
}

function location1() {
    location.hash = "Karyawan nomor 1"
    var x = "sekarang di data" + location.hash
    document.getElementById("tampil").innerHTML = x
}

function location2() {
    location.hash = "Karyawan2"
    var x = "sekarang di data" + location.hash
    document.getElementById("tampil").innerHTML = x
}

/*--------------- Fungsi Event hostname & href -----------------*/
//hostname
function lihatServer() {
    var data = location.hostname
    document.getElementById('hasil').innerHTML = data
}

// href
function lihatLokasi() {
    var data = location.href
    var p = document.getElementsByTagName('p')
    // pemanggilan array p terakhir pada html
    // p[p.length-1].innerHTML = data
    document.getElementById('hasil').innerHTML = data
}

//Tugas
function beli(number) {
    var daftar = document.createElement('button')
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    var table = document.getElementsByTagName('table')
    var isi = `
    
        <td>title</td>
        <td>ket</td>
        <td>harga</td>
    
    `

    var title = document.getElementsByTagName('h2')[number].innerHTML
    var ket = document.getElementsByTagName('p')[number].innerHTML
    var jumlah = document.getElementsByClassName('price')[number].innerHTML

    document.querySelectorAll('div h1')[number].appendChild(daftar)

    daftar.innerHTML = "table tr td" + title
    daftar.innerHTML = "td" + ket
    daftar.innerHTML = "td" + jumlah
    daftar.style.backgroundColor = "#6495ED"





    var harga = document.getElementsByClassName('price')[number].innerHTML
    total += parseInt(harga)
    document.querySelectorAll('div h3')[0].innerHTML = "Total Rp. " + total
}

var total = 0

/*--------------- Pindah Halaman Landing Page -----------------*/
var i = document.getElementsByTagName('a');
var a = document.getElementsByClassName('konten');

function arahan(x) {
    remove()
    i[x].attributes.getNamedItem("class").value += "active"
    a[x].attributes.getNamedItem("class").value += " select"
}

function remove() {
    for (var z = 0; z < a.length; z++) {
        i[z].attributes.getNamedItem("class").value = ""
        a[z].attributes.getNamedItem("class").value = "konten"
    }
}

/*--------------- Validasi Login -----------------*/
function validateForm(event) {
    var a = document.getElementById("uname");
    var b = document.getElementById("pwd");
    event.preventDefault()

    if (a.value == "" && b.value == "") {
        document.getElementById("message").innerHTML = "anda belum mengisi data";
    } else if (a.value == "") {
        document.getElementById("message").innerHTML = "username masih kosong";
    } else if (b.value == "") {
        document.getElementById("message").innerHTML = "password masih kosong";
    } else if (a.value == "indry" && b.value == "1234") {
        window.location.href = "http://indrysfa.com/"
    } else {
        document.getElementById("message").innerHTML = "username & password salah";
    }
}
document.querySelector(".form").addEventListener("submit", validateForm)

function halaman() {
    var x = document.baseURI.valueOf("http://indrysfa.com/");
    document.getElementById("demo").innerHTML = x;
}

/*--------------- createElement querySelectorAll -----------------*/
function beli(number) {
    var daftar = document.createElement('button')
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    var table = document.getElementsByTagName('table')
    var isi = `
    
        <td>title</td>
        <td>ket</td>
        <td>harga</td>
    
    `
    var title = document.getElementsByTagName('h2')[number].innerHTML
    var ket = document.getElementsByTagName('p')[number].innerHTML
    var jumlah = document.getElementsByClassName('price')[number].innerHTML

    document.querySelectorAll('div h1')[number].appendChild(daftar)

    daftar.innerHTML = "table tr td" + title
    daftar.innerHTML = "td" + ket
    daftar.innerHTML = "td" + jumlah
    daftar.style.backgroundColor = "#6495ED"

    var harga = document.getElementsByClassName('price')[number].innerHTML
    total += parseInt(harga)
    document.querySelectorAll('div h3')[0].innerHTML = "Total Rp. " + total
}

var total = 0

/*--------------- Calculator -----------------*/
function hilang() {
    document.querySelectorAll('input')[0].value = ""
}

function hapus() {
    var a = document.querySelectorAll('input')[0].value
    var b = document.querySelectorAll('input')

    document.querySelectorAll('input')[0].value = a.substr(0, a.length - 1)
}

(function (x) {
    var angka = x.scripts[x.scripts.length - 1];
    var pesan = ['[ionicons] Deprecated script, please remove: ' + angka.outerHTML];

    var parts = angka.src.split('/');
    parts.pop();

    var angka = x.createElement('script');
    angka.setAttribute('type', 'module');
    x.head.appendChild(angka);
    pesan.push(angka.outerHTML);

    angka = x.createElement('script');
    angka.setAttribute('nomodule', '');
    x.head.appendChild(angka);
    pesan.push(angka.outerHTML);

})(document);