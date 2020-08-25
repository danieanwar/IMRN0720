// Soal No. 1 conditional.js
var nama = "Danie";
var peran = "Penyihir";

console.log("Soal No. 1 - if else");
console.log("");
if((nama == "" || nama == " ") && (peran == "" || peran == " ")){
	console.log("Nama harus diisi!");
	console.log("Peran harus diisi!");
}
else if ((nama !== "" || nama !== " ") && (peran == "" || peran == " ")){
	console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
}
else {
	if (peran == "Penyihir"){
		console.log("Selamat datang di Dunia Werewolf, " + nama);
		console.log("Halo Penyihir "+ nama +", kamu dapat melihat siapa yang menjadi werewolf!");		
	}
	else if (peran == "Guard"){
		console.log("Selamat datang di Dunia Werewolf, " + nama);
		console.log("Halo Guard "+ nama +", kamu akan membantu melindungi temanmu dari serangan werewolf!");		
	}
	else if (peran == "Werewolf"){
		console.log("Selamat datang di Dunia Werewolf, " + nama);
		console.log("Halo Werewolf "+ nama +", Kamu akan memakan mangsa setiap malam!");
	}
}

// Soal No. 2 conditional.js

var tanggal = 39;
var bulan = 2;
var bulanText;
var tahun = 2000;

console.log("");
console.log("Soal No. 2 - switch case");
console.log("");
if((tanggal < 1 || tanggal > 31) && (bulan < 1 || bulan > 12) && (tahun < 1900 || tahun > 2200)){
	console.log("Tanggal, Bulan dan Tahun yang dimasukkan salah !");
}
else if((tanggal < 1 || tanggal > 31) && (bulan < 1 || bulan > 12) && (tahun > 1899 || tahun < 2201)){
	console.log("Tanggal dan Bulan yang dimasukkan salah !");
}
else if((tanggal < 1 || tanggal > 31) && (bulan > 0 || bulan < 13) && (tahun < 1900 || tahun > 2200)){
	console.log("Tanggal dan Tahun yang dimasukkan salah !");
}
else if((tanggal > 0 || tanggal < 32) && (bulan < 1 || bulan > 12) && (tahun < 1900 || tahun > 2200)){
	console.log("Bulan dan Tahun yang dimasukkan salah !");
}
else if((tanggal < 1 || tanggal > 31) && (bulan > 0 || bulan < 13) && (tahun > 1899 || tahun < 2201) && (bulan != 2)){
	console.log("Tanggal yang dimasukkan salah !");
}
else if((tanggal > 0 || tanggal < 32) && (bulan < 1 || bulan > 12) && (tahun > 1899 || tahun < 2201)){
	console.log("Bulan yang dimasukkan salah !");
}
else if((tanggal > 0 || tanggal < 32) && (bulan > 0 || bulan < 13) && (tahun < 1900 || tahun > 2200)){
	console.log("Tahun yang dimasukkan salah !");
}
else if ((tanggal < 1 || tanggal > 30) && (bulan = 2)){
	console.log("Bulan Februari hanya memiliki maksimal 30 hari");
}

else {
switch(bulan) {
  case 1:
    bulanText = "Januari";
    console.log(tanggal + " " + bulanText + " " + tahun);
    break;
  case 2:
    bulanText = "Februari";
    console.log(tanggal + " " + bulanText + " " + tahun);
    break;
  case 3:
    bulanText = "Maret";
    console.log(tanggal + " " + bulanText + " " + tahun);
    break;
  case 4:
    bulanText = "April";
    console.log(tanggal + " " + bulanText + " " + tahun);
    break;
  case 5:
    bulanText = "Mei";
    console.log(tanggal + " " + bulanText + " " + tahun);
    break;
  case 6:
    bulanText = "Juni";
    console.log(tanggal + " " + bulanText + " " + tahun);
    break;
  case 7:
    bulanText = "Juli";
    console.log(tanggal + " " + bulanText + " " + tahun);
    break;
  case 8:
    bulanText = "Agustus";
    console.log(tanggal + " " + bulanText + " " + tahun);
    break;
  case 9:
    bulanText = "September";
    console.log(tanggal + " " + bulanText + " " + tahun);
    break;
  case 10:
    bulanText = "Oktober";
    console.log(tanggal + " " + bulanText + " " + tahun);
    break;
  case 11:
    bulanText = "November";
    console.log(tanggal + " " + bulanText + " " + tahun);
    break;
  case 12:
    bulanText = "Desember";
    console.log(tanggal + " " + bulanText + " " + tahun);
    break;
  default:
    console.log("Au ah Gelap !");
	}
}


