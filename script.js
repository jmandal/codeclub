// Add your code below...

const myName = "Jennie"
const myLastName = "Mandal"
const myFullName = myName + " " + myLastName

const number1 = 21
const number2 = 11
const sumNumbers = number1 + number2


function FlipCoin(threshold) {
	const myRandomNumber = Math.random()
	if (myRandomNumber > threshold) {
		alert("You won, " + myName)
		alert("You really won!")
	} else {
		alert("You lost, " + myName)
		alert("Loser!")
	}

}

function resizeButton() {
	const newRadius = Math.random() * 20;
	$('.button').css('border-radius', newRadius + 'px');
}

function slideImage() {
	$('.myProfile').slideUp();
	$('.myProfile').slideDown();
}


// alert("Hi " + myFullName + ". Your favorite number is: " + sumNumbers)


