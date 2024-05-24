const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

const firstNameInput = document.getElementById("first-name");
const firstNameAlertBlock = document.querySelector("#first-name + .form-alert");

const lastNameInput = document.getElementById("last-name");
const lastNameAlertBlock = document.querySelector("#last-name + .form-alert");

const emailInput = document.getElementById("email");
const emailAlertBlock = document.querySelector("#email + .form-alert");

const messageInput = document.getElementById("message");
const messageAlertBlock = document.querySelector("#message + .form-alert");

const consentInput = document.getElementById("consent");
const consentAlertBlock = document.querySelector(".checkbox-input .form-alert");

const queryTypeAlertBlock = document.querySelector(
	".input-container:nth-child(3) .form-alert"
);

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

	if (firstName.length === 0) {
		isValid = false;

		addError(firstNameInput, firstNameAlertBlock);
	} else {
		removeError(firstNameInput, firstNameAlertBlock);
	}

	if (lastName.length === 0) {
		isValid = false;

		addError(lastNameInput, lastNameAlertBlock);
	} else {
		removeError(lastNameInput, lastNameAlertBlock);
	}

	if (!emailValidation(email)) {
		isValid = false;

		addError(emailInput, emailAlertBlock);
	} else {
		removeError(emailInput, emailAlertBlock);
	}

	if (queryType === null) {
		isValid = false;

		addError(null, queryTypeAlertBlock);
	} else {
		removeError(null, queryTypeAlertBlock);
	}

	if (message.length === 0) {
		isValid = false;

		addError(messageInput, messageAlertBlock);
	} else {
		removeError(messageInput, messageAlertBlock);
	}

	if (!consent) {
		isValid = false;

		addError(consentInput, consentAlertBlock);
	} else {
		removeError(consentInput, consentAlertBlock);
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

function addError(input, alertBlock) {
	input?.classList.add("input-error");
	alertBlock.style.display = "block";
}

function removeError(input, alertBlock) {
	input?.classList.remove("input-error");
	alertBlock.style.display = "none";
}
