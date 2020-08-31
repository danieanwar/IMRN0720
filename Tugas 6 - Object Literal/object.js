// Soal No.1 - Array to Object
console.log("Soal No.1 - Array to Object");
console.log("");

var arrayOfObject = [];

var now = new Date();
var thisYear = now.getFullYear();

function arrayToObject(people){
	var length = people.length;

	for ( var i = 0; i < length; i++ ) {
		if(people[i][3] > thisYear){
		  var age = "Invalid Birth Year";
		}

		else if(people[i][3] == null){
		  var age = "Invalid Birth Year";
		}

		else {
		  var age = thisYear - people[i][3];
		}

	  var subArray = people[i],
	      item = {
	        firstName: subArray[0],
	        lastName: subArray[1],
	        gender : subArray[2],
	        age: age
	      };
	   arrayOfObject.push(item);

	   var count = i + 1,
	   	   fullName = count + ". " + item.firstName + " " + item.lastName;

	   console.log(fullName,item);
	}
}

var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ];
arrayToObject(people);

console.log("");

var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ];
arrayToObject(people2);

console.log("");

// Soal No.2 - Shopping Time
console.log("Soal No.2 - Shopping Time");
console.log("");

function shoppingTime(memberId, money){
	
	var budget = money, item = [] , barang = "";	

	if(budget < 50000){
		console.log("Mohon maaf, uang tidak cukup");
	}
	else if((memberId == '' || money == null) || (memberId == null && money == null)){
		console.log("Mohon maaf, toko X hanya berlaku untuk member saja");
	}

	else {
		if(budget >= 50000){
		   barang = "Casing Handphone";
		   item.push(barang);
		   budget = budget - 50000;
		}

		if(budget >= 175000){
		  barang = "Sweater Uniklooh";
		  item.push(barang);	
		  budget = budget - 175000;
		}

		if(budget >= 250000){
		  barang = "Baju H&N";
		  item.push(barang);	
		  budget = budget - 250000;
		}

		if(budget >= 500000){
		  barang = "Baju Zoro";
		  item.push(barang);	
		  budget = budget - 500000;
		}

		if(budget >= 1500000){
		  barang = "Sepatu Stacattu";
		  item.push(barang);	
		  budget = budget - 1500000;
		}

		var shop = {
		        memberId: memberId,
		        listPurchased: item
		      };

		 return shop;
	}
}

console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //
console.log(shoppingTime()); ////
console.log("");

// Soal No.3 - Naik Angkot
console.log("Soal No.3 - Naik Angot");
console.log("");



function naikAngkot(penumpang){
	
	var nama = penumpang[0], dari = penumpang[1] , ke = penumpang[2], 
	rute = ["A","B","C","D","E","F"], range = rute.length, ongkos = 0, berangkat;	

	for(i = 0; i <= range; i++){
		
		if(dari == rute[i]){
			berangkat = "go";
		}

		else if(ke == rute[i]){
			berangkat = "finish";
		}

		if( berangkat == "go"){
			ongkos = ongkos + 2000;
		}

		else if( berangkat == "finish"){
			ongkos = ongkos;
		}

	}

	var antrianPenumpang = {
		        penumpang: nama,
		        naikDari: dari,
		        tujuan: ke,
		        bayar: ongkos
		      };

	return antrianPenumpang;
	
}

console.log(naikAngkot(["doso","B","F"]));