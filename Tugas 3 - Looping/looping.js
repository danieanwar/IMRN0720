//Soal No.1 - Looping While
console.log("Soal No.1 - Looping While");
console.log("");

var angkaLoop = 2;

while(angkaLoop < 21){
	console.log(angkaLoop + " - I Love Coding")
	angkaLoop = angkaLoop + 2;
}

console.log("LOOP KEDUA");

while(angkaLoop > 0){
	angkaLoop = angkaLoop - 2;
	console.log(angkaLoop + " - I will become a mobile developer")
}

console.log("");

//Soal No.2 - Looping For
console.log("Soal No.2 - Looping For");
console.log("");
var i;

for(i = 1; i < 21; i++){
	if(i%2 == 0){
		console.log(i + " - Berkualitas");
	}
	else if(i%3 == 0){
		console.log(i + " - I Love Coding");
	}
	else {
		console.log(i + " - Santai")
	}
}

console.log("");

//Soal No.3 - Looping Persegi Panjang
console.log("Soal No.3 - Looping Persegi Panjang");
console.log("");

var x;
var y = 0;
var teks = "";

for(x = 1; x < 5; x++){
	while(y<4){
		teks = teks + "#";
		y = y + 1;
	}
	console.log(teks);
	y = 0;
	teks = "";
}

console.log("");

//Soal No.4 - Looping Tangga
console.log("Soal No.4 - Looping Tangga");
console.log("");

var x;
var y = 0;
var teks = "";

for(x = 1; x < 8; x++){
	while(y < x){
		teks = teks + "#";
		y = y+1;
	}
	console.log(teks);
}

console.log("");

//Soal No.5 - Looping Papan Catur
console.log("Soal No.5 - Looping Papan Catur");
console.log("");
var x;
var y = 0;

for(x = 1; x < 9; x++){
	if(x%2 == 0){
		console.log("# # # # ");
	}
	else if(x%3 == 0){
		console.log(" # # # #");
	}
	else {
		console.log(" # # # #")
	}
}