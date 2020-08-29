// Soal No.1 - Balik Kata

console.log("Soal No.1 - Balik Kata");
console.log("");

var output = [];
var teks = "";
var panjang;
var i = 0;

function balikString(input){
	output = [];
	panjang = input.length - 1;
	teks = input;
	while(panjang >= i){
		output.push(teks[panjang]);
		panjang--;
	}

	return output;
}

console.log(balikString("abcde")) // edcba
console.log(balikString("rusak")) // kasur
console.log(balikString("racecar")) // racecar
console.log(balikString("haji")) // ijah


console.log("");

// Soal No.2 - Palindrome

console.log("Soal No.2 - Palindrome");
console.log("");
var i;
var count;
var bandingkata;

function palindrome(input){
    count = input.length-1;
    count2 = count/2;
 
    for (i = 0; i <= count2 ; i++) {
      if (input.charAt(i) != input.charAt(count-i)) {
         return false;
      }
    }
    return true;
 } 

console.log(palindrome("kasur rusak")) 
console.log(palindrome("haji ijah")) 
console.log(palindrome("nabasan"))
console.log(palindrome("nababan")) 
console.log(palindrome("jakarta"))

console.log("");

// Soal No.3 - Bandingkan

console.log("Soal No.3 - Bandingkan");
console.log("");

function bandingkan(angka1, angka2){
	if((angka1 < 0 || angka2 < 0) || (angka1 < 0 && angka2 < 0 )){
		return -1;
	}
	else if(angka1 > angka2){
		return angka1;
	}

	else if(angka1 < angka2){
		return angka2;
	}
	else if(angka1 = angka2){
		return -1;
	}
	else if((angka1 == null || angka2 == null) || (angka1 == null && angka2 == null)){
		return 1;
	}
	else {
		return 0;
	}
}

console.log(bandingkan(10, 15)); // 15
console.log(bandingkan(12, 12)); // -1
console.log(bandingkan(-1, 10)); // -1
console.log(bandingkan(112, 121));// 121
console.log(bandingkan(1)); // 1
console.log(bandingkan()); // -1
console.log(bandingkan("15", "18")) // 18
console.log("");

//Soal No.4 - Descending Ten

console.log("Soal No.4 - Descending Ten");
console.log("");

var angka = [];
var descending = "";
var count;
var i;

function descendingTen(input){
	count = input;
	descending = "";
	if (input == null){
		return " -1";
	}
	else {
	
	i = input - 10;
		while(count > i){
			descending = descending+ " " + count;
			count--;
			
		}
	return descending;
	}
}

console.log(descendingTen(100)); // 100 99 98 97 96 95 94 93 92 91
console.log(descendingTen(10)); // 10 9 8 7 6 5 4 3 2 1
console.log(descendingTen()); // -1
console.log("")

// Soal No.5 - Ular Tangga
console.log("Soal No.5 - Ular Tangga");
console.log("");

var angka = 100;
var angkStr;
var loop;
var i;
var j;
function ularTangga(){
	for(i = 0 ; i < 9; i++){
		angkaStr = "";
		loop = angka - 9;
		for(j = 0; j < 9; j++){
			while (angka >= loop){
				angkaStr = angkaStr + " " + angka;
				angka--;
			}
		}
		console.log(angkaStr);
	}

	angka = 0;
	angkaStr="";
	for(i = 0; i< 11; i++){
		angkaStr = angkaStr + " " + angka;
		angka++;
	}
	console.log(angkaStr);
}

ularTangga();