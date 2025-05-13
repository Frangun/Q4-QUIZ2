function calculateAverage() {
		var e = Number(document.getElementById('eng').value);
		var s = Number(document.getElementById('ss').value);
		var f = Number(document.getElementById('fil').value);
		var avg = (e+s+f)/3
		var avg_final = avg.toFixed(2);
		window.alert('Your average score is ' + avg_final + ".")
}

function categorizeAVG() {

	var c = document.getElementById('category').value;

		if (c >= 94 && c <= 100) {
			window.alert('Excellent');
		}

		else if (c >= 87 && c <= 93.99) {
			window.alert('Above Satisfactory');
		}

		else if (c >= 80 && c <= 96.66) {
			window.alert('Satisfactory');
		}

		else if (c >= 75 && c <= 79.99) {
			window.alert('Needs Improvement');
		}

		else if (c >= 70 && c <= 74.99) {
			window.alert('Failed');
		}

		else {
			window.alert('Type an appropriate value!')
		}
}