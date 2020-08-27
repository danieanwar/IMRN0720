// Soal No.1 - Teriak
function teriak(){
	return "Halo Sanbers!";
}

console.log("Soal No.1 - Teriak");
console.log("");
console.log(teriak());

// Soal No.2 - Kalikan
function kalikan(angkaPertama, angkaKedua){
	return angkaPertama * angkaKedua;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1,num2);

console.log("");
console.log("Soal No.2 - Kalikan");
console.log("");
console.log(hasilKali);

// Soal No.3 - Introduce
function introduce(nama, umur, alamat, hobby){
	return "Nama Saya "+nama+", Umur Saya "+umur+" Tahun, Alamat saya di "+alamat+", dan saya punya hobby yaitu "+hobby;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);