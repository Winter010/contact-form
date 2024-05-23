const form = document.getElementById("contact-form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const consentInput = document.getElementById("consent");

const successMessage = document.getElementById("success-message");

form.addEventListener("submit", validateForm);

function validateForm(event) {
	event.preventDefault();

	const firstName = firstNameInput.value;
	const lastName = lastNameInput.value;
	const email = emailInput.value;
	const queryType = document.querySelector(`input[name="query-type"]:checked`);
	const message = messageInput.value;
	const consent = consentInput.checked;

	let isValid = true;

	if (firstName === "") {
		isValid = false;

		document.querySelector("#first-name + .form-alert").style.display = "block";
		document.querySelector("#first-name").classList.add("input-error");
	} else {
		document.querySelector("#first-name + .form-alert").style.display = "none";
		document.querySelector("#first-name").classList.remove("input-error");
	}

	if (lastName === "") {
		isValid = false;

		document.querySelector("#last-name + .form-alert").style.display = "block";
		document.querySelector("#last-name").classList.add("input-error");
	} else {
		document.querySelector("#last-name + .form-alert").style.display = "none";
		document.querySelector("#last-name").classList.remove("input-error");
	}

	if (!emailValidation(email)) {
		isValid = false;

		document.querySelector("#email + .form-alert").style.display = "block";
		document.querySelector("#email").classList.add("input-error");
	} else {
		document.querySelector("#email + .form-alert").style.display = "none";
		document.querySelector("#email").classList.remove("input-error");
	}

	if (queryType === null) {
		isValid = false;

		document.querySelector(
			".input-container:nth-child(3) .form-alert"
		).style.display = "block";
	} else {
		document.querySelector(
			".input-container:nth-child(3) .form-alert"
		).style.display = "none";
	}

	if (message === "") {
		isValid = false;

		document.querySelector("#message + .form-alert").style.display = "block";
		document.querySelector("#message").classList.add("input-error");
	} else {
		document.querySelector("#message + .form-alert").style.display = "none";
		document.querySelector("#message").classList.remove("input-error");
	}

	if (!consent) {
		isValid = false;

		document.querySelector(".checkbox-input .form-alert").style.display =
			"block";
		document.querySelector("#consent").classList.add("input-error");
	} else {
		document.querySelector(".checkbox-input .form-alert").style.display =
			"none";
		document.querySelector("#consent").classList.remove("input-error");
	}

	if (isValid) {
		successMessage.classList.add("show");
		// form.submit();
		// form.reset()
	}
}

function emailValidation(email) {
	const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return pattern.test(email);
}
