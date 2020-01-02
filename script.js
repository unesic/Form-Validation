var fields;

window.onload = function() {
	var main = document.getElementById("main");
	main.style.height = document.documentElement.clientHeight + 'px';

	fields = {
		username	: document.getElementById("username"),
		email		: document.getElementById("email"),
		password	: document.getElementById("password"),
		rePassword	: document.getElementById("re-password"),
	};
	
	for (let key in fields) {
		fields[key].addEventListener('change', () => {
			var warning = document.createElement('sub');
			warning.className = 'alert-danger';
		
			validate(fields[key], warning);
		});

		// fields[key].addEventListener('focus', () => {
		// 	var warning = document.createElement('sub');
		// 	warning.className = 'alert-danger';
			
		// 	setInterval(validate(fields[key], warning), 100);
		// });
	}
}

function validate(field, warning) {
	if (field.id == 'username') {
		validateUsername(field, warning);
	}
	
	if (field.id == 'email') {
		validateEmail(field, warning);
	}
	
	if (field.id == 'password') {
		validatePassword(field, warning);
	}

	if (field.id == 're-password') {
		validateRePassword(field, warning);
	}
}

function validateUsername(username, warning) {
	let text;
	let regEx = /[^a-zA-Z0-9]+$/;

	if (username.value.length < 4) {
		text = "The username must contain at least 4 characters!";
	} else if (username.value.match(regEx)) {
		text = "The username must not contain any special characters!";
	} else {
		text = "";
	}

	let check = document.getElementById('username-warning');

	if (check) {
		warning = check;
	} else {
		warning.id = 'username-warning';
	}

	warning.innerHTML = text;
	
	if (typeof text !== 'undefined' && text.length > 0) {
		warning.classList.remove('hide');
		username.classList.remove('alert-success');
		username.insertAdjacentElement('afterend', warning);
	} else {
		warning.className += ' hide';
		username.className += ' alert-success';
	}
}

function validateEmail(email, warning) {
	let text;
	let regEx = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;

	if (!email.value.match(regEx)) {
		text = "Please enter valid e-mail address!";
	} else {
		text = "";
	}

	let check = document.getElementById('email-warning');

	if (check) {
		warning = check;
	} else {
		warning.id = 'email-warning';
	}

	warning.innerHTML = text;

	if (typeof text !== 'undefined' && text.length > 0) {
		warning.classList.remove('hide');
		email.classList.remove('alert-success');
		email.insertAdjacentElement('afterend', warning);
	} else {
		warning.className += ' hide';
		email.className += ' alert-success';
	}
}

function validatePassword(password, warning) {
	let text;
	let regEx = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

	if (password.value.length < 8) {
		text = "Password must be at least 8 characters long!";
	} else if (!password.value.match(regEx)) {
		text = "Password must contain lowercase and uppercase letters, numbers and special characters!";
	} else {
		text = "";
	}

	let check = document.getElementById('password-warning');

	if (check) {
		warning = check;
	} else {
		warning.id = 'password-warning';
	}

	warning.innerHTML = text;

	if (typeof text !== 'undefined' && text.length > 0) {
		warning.classList.remove('hide');
		password.classList.remove('alert-success');
		password.insertAdjacentElement('afterend', warning);
		fields['rePassword'].value = "";
		fields['rePassword'].disabled = true;
	} else {
		warning.className += ' hide';
		password.className += ' alert-success';
		fields['rePassword'].disabled = false;
	}
}

function validateRePassword(rePassword, warning) {
	let text;

	if (rePassword.value !== password.value) {
		text = "Entered passwords don't match!";
	} else {
		text = "";
	}

	let check = document.getElementById('repassword-warning');

	if (check) {
		warning = check;
	} else {
		warning.id = 'repassword-warning';
	}

	warning.innerHTML = text;

	if (typeof text !== 'undefined' && text.length > 0) {
		warning.classList.remove('hide');
		rePassword.classList.remove('alert-success');
		rePassword.insertAdjacentElement('afterend', warning);
	} else {
		warning.className += ' hide';
		rePassword.className += ' alert-success';
	}
}