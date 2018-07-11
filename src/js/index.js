var panelSucces = document.getElementById('OK');
var panelFail = document.getElementById('KO');
var succesId = document.getElementById('mineNumberSucces');
var resultSuccesId = document.getElementById('resultNumberSucces');
var failId = document.getElementById('mineNumberFail');
var resultFailId = document.getElementById('resultNumberFail');
var numberId = document.getElementById('number');


function startDevinette(){
	console.log("start");
	panelSucces.style.display = 'none';
	panelFail.style.display = 'none';

}

function validate(){
	var numberSearch = Math.floor(Math.random() * 10)+1;
	var myNumber = parseInt(numberId.value);
	if(isNaN(myNumber)){
		panelSucces.style.display = 'none';
		panelFail.style.display = 'none';
		alert("Vous devez saisir un chiffre au lieu de lettre");

	}else{
		if(myNumber<=10 && myNumber>=1){
			if(myNumber == numberSearch){
				panelFail.style.display = 'none';
				panelSucces.style.display = 'block';
				succesId.innerText = myNumber;
				resultSuccesId.innerText = numberSearch;
			}else{
				panelSucces.style.display = 'none';
				panelFail.style.display = 'block';
				failId.innerText = myNumber;
				resultFailId.innerText = numberSearch;
			}
		}else{
			panelSucces.style.display = 'none';
			panelFail.style.display = 'none';
			alert("Vous devez saisir un chiffre entre 1 à 10");
		}
	}


}