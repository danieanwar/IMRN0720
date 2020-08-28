//Soal No.1 - Range
console.log("Soal No.1 - Range");
console.log("");

var angka = [];
var kosong = -1;
var i;

function range(startNum, finishNum){
	if(startNum > finishNum){
		angka = [];
		for(i = startNum; i >= finishNum; i--){
			angka.push(i);
		}
		return angka;
	}
	else if(startNum < finishNum){
		angka = [];
		for(i = startNum; i <= finishNum; i++){
			angka.push(i);
		}
		return angka;
	}
	else if(startNum == null || finishNum == null){
		return kosong;
	}
	else {
		return kosong;
	}
}

console.log(range(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)); // -1
console.log(range(11,18)); // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)); // [54, 53, 52, 51, 50]
console.log(range());
console.log("");
//Soal No.2 - Range With Step
console.log("Soal No.2 - Range With Step");
console.log("");

var angka = [];
var kosong = -1;
var i;
var x=0;

function rangeWithStep(startNum, finishNum, step){
	if((startNum > finishNum) && (step != null)){
		angka = [];
		while(startNum >= finishNum){
			i = startNum;
			angka.push(i);
			startNum = startNum - step;
		}
		return angka;
	}
	else if((startNum < finishNum) && (step != null)){
		angka = [];
		while(startNum <= finishNum){
			i = startNum;
			angka.push(i);
			startNum = startNum + step;
		}
		return angka;
	}
	else if((startNum == null || finishNum == null || step == null) || (startNum == null && finishNum == null) || (finishNum == null && step == null) || (startNum == null && step == null) || (startNum == null && finishNum == null && step == null)){
		return kosong;
	}
	else {
		return kosong;
	}

}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 
console.log("");

//Soal No.3 - Sum of Range
console.log("Soal No.3 - Sum of Range");
console.log("");

var angka = [];
var kosong = -1;
var jumlah = 0;
var i;
var x=0;

function sum(startNum, finishNum, step){
	if((startNum > finishNum) && (step != null)){
		angka = [];
		while(startNum >= finishNum){
			i = startNum;
			angka.push(i);
			startNum = startNum - step;
			jumlah = jumlah + i;
		}
		return jumlah;
	}
	else if((startNum < finishNum) && (step != null)){
		angka = [];
		while(startNum <= finishNum){
			i = startNum;
			angka.push(i);
			startNum = startNum + step;
			jumlah = jumlah + i;
		}
		return jumlah;
	}
	else if((startNum > finishNum) && (step == null)){
		while(startNum >= finishNum){
			i = startNum;
			angka.push(i);
			startNum = startNum - 1;
			jumlah = jumlah + i;
		}
		return jumlah;
	}
	else if((startNum < finishNum) && (step == null)){
		while(startNum <= finishNum){
			i = startNum;
			angka.push(i);
			startNum = startNum + 1;
			jumlah = jumlah + i;
		}
		return jumlah;
	}
	else if((startNum == null || finishNum == null) || (startNum == null && finishNum == null)){
		return kosong;
	}
	else {
		return kosong;
	}

}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 
console.log("");

//Soal No.4 - Array Multidimensi
console.log("Soal No.4 - Array Multidimensi");
console.log("");

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];

var index = ["Nomor ID: ","Nama Lengkap: ","TTL: ","Hobi: "];

var x = 0;
var y = 0;
var i = input.length;
var j = index.length;
var teks = "";

function dataHandling(){
	
	while(x < i){
		while(y < j){
			teks = index[y] + input[x][y];
			console.log(teks);
			y = y + 1;
		}
		console.log("");
		x++;
		y = 0;
	}
}

dataHandling();
console.log("");

//Soal No.5 - Balik Kata
console.log("Soal No.5 - Balik Kata");
console.log("");

var output = [];
var teks = "";
var panjang = 0;
var i;

function balikKata(input){
	output = [];
	i = input.length - 1;
	teks = input;
	while(panjang <= i){
		output.push(teks[i]);
		i--;
	}

	return output;
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I
console.log("");

//Soal No.6 - Metode Array
console.log("Soal No.6 - Metode Array");
console.log("");

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
var nama = input[1];
input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
input.splice(4, 1, "Pria", "SMA Internasional Metro");
ttl = input[3];
birthdate = ttl.split("/");
var ydm = [birthdate[2],birthdate[0],birthdate[1]];
var dateBirth = birthdate.join("-");
bulan = birthdate[1];
switch(bulan) {
  case "01":
    bulanText = "Januari";
    break;
  case "02":
    bulanText = "Februari";
    break;
  case "03":
    bulanText = "Maret";
    break;
  case "04":
    bulanText = "April";
    break;
  case "05":
    bulanText = "Mei";
    break;
  case "06":
    bulanText = "Juni";
    break;
  case "07":
    bulanText = "Juli";
    break;
  case "08":
    bulanText = "Agustus";
    break;
  case "09":
    bulanText = "September";
    break;
  case "10":
    bulanText = "Oktober";
    break;
  case "11":
    bulanText = "November";
    break;
  case "12":
    bulanText = "Desember";
    break;
  default:
    console.log("Au ah Gelap !");
	}
console.log(input);
console.log(bulanText);
console.log(ydm);
console.log(dateBirth);
console.log(nama);