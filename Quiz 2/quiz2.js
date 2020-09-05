//Soal No.1
console.log("Soal No.1");
console.log("");

class Score {
    constructor(email,subject,point) {
    	this.email = email
        this.subject = subject
        this.point = point
    }
    average = () => {
    	let avg = 0;

    	if (this.point.length == null){
		    avg = this.point / this.point;
		    return this.email + " " + this.subject + " " + avg;
		}
		else if (this.point.length > 1){
			let total = 0;
			for(let i = 0; i < this.point.length; i++) {
			    total += this.point[i];
			}
			avg = total / this.point.length;
			return this.email + " " + this.subject + " " + avg;
		}
    }
}

poin = new Score("uum@mail.com","quiz-2", [3,3,3]);
console.log(poin.average());

console.log("");

//Soal No.2
console.log("Soal No.2");
console.log("");

let item = [];

viewScores = (array, quiz) => {
	
	for(let i = 1; i < array.length; i++){
		let subject = quiz; 
		if(subject =="quiz-1"){
			let subArray = [array[i][0]];
			subArray.push(quiz, array[i][1]);
			objek = {
		        email : subArray[0],
		        subject : subArray[1],
		        point : subArray[2]
		      };
		    item.push(objek);
		    subArray = [];
		}

		else if(subject == "quiz-2"){
			let subArray = [array[i][0]];
			subArray.push(quiz, array[i][2]);
			objek = {
		        email : subArray[0],
		        subject : subArray[1],
		        point : subArray[2]
		      };
		    item.push(objek);
		    subArray = [];
		}

		else if(subject == "quiz-3"){
			let subArray = [array[i][0]];
			subArray.push(quiz, array[i][3]);
			objek = {
		        email : subArray[0],
		        subject : subArray[1],
		        point : subArray[2]
		      };
		    item.push(objek);
		    subArray = [];
		}
	}

	return console.log(item);
}

let data =  [
    ["email", "quiz-1", "quiz-2", "quiz-3"],
    ["hilmy@mail.com", 78, 62, 79],
    ["mukhlis@mail.com", 95, 85, 88],
     ["khairun@mail.com", 78, 89, 83],
    ["abduh@mail.com", 95, 98, 97],
  ];

viewScores(data, "quiz-3");

console.log("");

//Soal No.3
console.log("Soal No.3");
console.log("");

let recapItem = [];

recapScore = (array) => {
	
	for(let i = 1; i < array.length; i++){

			let subArray = [array[i][0]], score = 0;
			
			for(let j = 1; j < 4; j++){
				score += array[i][j];
			}

			let average = score / 3;

			if(average < 81 && average > 70 ){
				subArray.push(average, "Participant");
				}

			else if(average < 91 && average > 80){
				subArray.push(average, "Graduate");
				}
			
			else if(average < 101 && average > 90){
				subArray.push(average, "honour");
				}

			objek = {
		        "Email" : subArray[0],
		        "Rata-rata" : subArray[1],
		        "Predikat" : subArray[2]
		      };

			recapItem.push(objek);
		    subArray = [];
		}

	return console.log(recapItem);
}

recapScore(data);
