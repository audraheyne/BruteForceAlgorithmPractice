/*
 * This function finds all of the pairs of elements in the argument array that
 * sum to a specific value v.
 */
var pairsThatSum = (array, v) => {
	let totals = [];
	let i;
	let j;
	for (i = 0; i < array.length; i++) {
		for (j = i; j < array.length; j++) {
			let sum = array[i] + array[j]
			if (sum === 42) {
				let pair = [array[i], array[j]]
				totals.push(pair)
			}
		}
	}
	return totals;
}

/*
 * This function displays the results on the html page
 */
var displayResults = (pairs, v) => {
	t = "The pairs that sum to <b>" + v + "</b> are:<br/>";

	for (i = 0; i < pairs.length; i++) {
		t += pairs[i][0] + ' & ' + pairs[i][1] + '<br/>';
	}

	$('#results').append(t);
}

/*
 * This function handles the control flow of the program
 */
$(document).ready(function () {
	let array = [7, 15, 2, 95, 31, -46, -84, -10, 88, 55, 66, -25, 15, -36, -15, 21, 71, -37, -69, 1, -13,
		-88, -24, 100, 60, 1, -17, 43, 0, 70, -25, 83, -60, -40, 58, 82, -70, -8, 89, 31, -93, -62,
		27, -87, -6, 80, 2, -55, 46, 96, 43, -37, -34, -27, -96, 58, 20, 35, -40, 67, -96, 48, -54,
		-60, -67, -31, 93, 79, 33, 74, 30, -53, 88, -41, -78, -92, 35, 39, -37, -14, 60, -39, 85,
		69, -90, -56, -74, 98, -74, -21, 84, -56, -83, -22, 35, 1, -21, 90, 40, 2]

	// this is the value that sum of the pairs should equal
	v = 42
	pairs = pairsThatSum(array, v);
	displayResults(pairs, v);
});
