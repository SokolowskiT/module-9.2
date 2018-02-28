var arrayMale = ['Tom', 'Mark', 'Bob', 'Robert', 'Dominic', 'Stephen'],
	arrayFemale = ['Maggie', 'Sabrina', 'Laura', 'Eve', 'Natalie', 'Jenny'],
	arrayMaleFemale = arrayMale.concat(arrayFemale),
	newName1 = 'Gilbert',
	newName2 = 'Natalie',
	newName3 = 'Nancy',
	newName4 = 'Robert'; 


console.log('Male array = ' + arrayMale);

console.log('Female array = ' + arrayFemale);

console.log('Both arrays as one = ' + arrayMaleFemale);

for (i=1; i<5; i++) {
	var foundIndexName = arrayMaleFemale.indexOf(window['newName' + i]);
	if (foundIndexName === -1) {
		arrayMaleFemale.push(window['newName' + i]);
		console.log('New set of array values = ' + arrayMaleFemale);
	} else {
		console.log('Provided name is already present in array.');
	}
}

