const name = document.getElementById('name');
const dob = document.getElementById('dob');
const city = document.getElementById('city');
const submit = document.getElementById('submit');

const database = firebase.database();


submit.addEventListener('click',(e) ->{
	e.preventDefault();
	database.ref('/users/'+name.value).set({
		fullname: name.value,
		birthday: dob.value,
		place: city.value 
	});
})
