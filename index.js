const homeScoreText = document.getElementsByClassName('score-home')[0]
const guestScoreText = document.getElementsByClassName('score-guest')[0]
let homeScore = 0
let guestScore = 0



function plus1Home() {
	homeScore++
	homeScoreText.textContent = homeScore
	winnerHighLight()
}

function plus2Home() {
	homeScore += 2
	homeScoreText.textContent = homeScore
	winnerHighLight()
}

function plus3Home() {
	homeScore += 3
	homeScoreText.textContent = homeScore
	winnerHighLight()
}

function plus1Guest() {
	guestScore++
	guestScoreText.textContent = guestScore
	winnerHighLight()
}

function plus2Guest() {
	guestScore += 2
	guestScoreText.textContent = guestScore
	winnerHighLight()
}

function plus3Guest() {
	guestScore += 3
	guestScoreText.textContent = guestScore
	winnerHighLight()
}

function winnerHighLight() {
	if (homeScore > guestScore) {
		homeScoreText.style.color = "green"
		guestScoreText.style.color = "red"
	} else {
		homeScoreText.style.color = "red"
		guestScoreText.style.color = "green"

	}
}

let minutes = 09;
let seconds = 60;

function updatePLEASE() {

	if (seconds > 0) {
		seconds--
		if (seconds < 10) {
			seconds = "0" + seconds
		}

	} else {
		seconds = 59
		minutes--
	}
	if (minutes > 0) {
		document.getElementById("myTimer").innerHTML = minutes + ":" + seconds;
		setTimeout(updatePLEASE, 1000); /* replicate wait 1 second */
	}
    else{
        document.getElementById("myTimer").innerHTML = "00:00"
    }

}
updatePLEASE();

function newGame() {
	homeScore = 0
	guestScore = 0
	homeScoreText.style.color = "white"
	guestScoreText.style.color = "white"
	guestScoreText.textContent = guestScore
	homeScoreText.textContent = homeScore
    minutes = 09;
    seconds = 60;
}