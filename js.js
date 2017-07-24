var score =0;
var multiplier = 1;
var scoreARetirer= 50;

function clickButton(){
	score = score + multiplier;
	document.getElementById('display').innerHTML = score;
}

function augmenterMultiplicateur(){
	// pour le niveau 6:
	//if (score >= 50){
		//multiplier = multiplier + 1;
		//score = score - 50;
			
		if (score >= scoreARetirer ){
		multiplier = multiplier + 1;
		score = score - scoreARetirer ;
		scoreARetirer = scoreARetirer * 2;
		document.getElementById('scoreARetirer').innerHTML = scoreARetirer;
	}else{
		alert("le multiplicateur functionne si le score est superieur à : "+scoreARetirer);
	}
	document.getElementById('display').innerHTML = score;
	document.getElementById('multiply').innerHTML = "x"+multiplier;

}


function autoclick(){
	if(score>=200){
	score = score + multiplier;
	document.getElementById('display').innerHTML = score;
	}
	setTimeout(autoclick, 1000);
}
autoclick();

