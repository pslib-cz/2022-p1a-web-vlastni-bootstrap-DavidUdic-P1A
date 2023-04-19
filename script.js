const form = document.getElementById("calorie-form");

form.addEventListener("submit", function(event) {
	event.preventDefault();
	calculateCalories();
});

function calculateCalories() {
	const height = parseFloat(document.getElementById("height").value);
	const weight = parseFloat(document.getElementById("weight").value);
	const age = parseInt(document.getElementById("age").value);
	const activity = parseFloat(document.getElementById("activity").value);

	const maintainWeight = Math.round((10 * weight + 6.25 * height - 5 * age + 5) * activity);
	const loseWeight = maintainWeight - 350;
	const gainWeight = maintainWeight + 500;

	document.getElementById("maintain-weight").innerHTML = maintainWeight;
	document.getElementById("lose-weight").innerHTML = loseWeight;
	document.getElementById("gain-weight").innerHTML = gainWeight;
}
