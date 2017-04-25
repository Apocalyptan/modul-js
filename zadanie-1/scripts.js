var a = prompt("Wpisz podstawę trójkąta: "),
	h = prompt("Wpisz wysokość trójkąta: "),
	mNumberOne = prompt("Cyfra do mnożenia I: "),
	mNumberTwo = prompt("Cyfra do mnożenia II: "),
	triangleArea = a*h/2,
	multiplication = mNumberOne*mNumberTwo;

console.log("Pole trójkąta o podstawie a: " + a + " i wysokości h: " + h + " wynosi: " + triangleArea + "!");
console.log("Wynik mnożenia to: " + multiplication);
alert("Pole trójkąta o podstawie a: " + a + " i wysokości h: " + h + " wynosi: " + triangleArea + ", a wynik mnożenia wynosi: " + multiplication);
