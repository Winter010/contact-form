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

	if (firstName == 0) {
		isValid = false;

		changeDisplayAlertClass("#first-name", "block");
		changeInputErrorClass("#first-name", "add");
	} else {
		changeDisplayAlertClass("#first-name", "none");
		changeInputErrorClass("#first-name", "remove");
	}

	if (lastName == 0) {
		isValid = false;

		changeDisplayAlertClass("#last-name", "block");
		changeInputErrorClass("#last-name", "add");
	} else {
		changeDisplayAlertClass("#last-name", "none");
		changeInputErrorClass("#last-name", "remove");
	}

	if (!emailValidation(email)) {
		isValid = false;

		changeDisplayAlertClass("#email", "block");
		changeInputErrorClass("#email", "add");
	} else {
		changeDisplayAlertClass("#email", "none");
		changeInputErrorClass("#email", "remove");
	}

	if (queryType === null) {
		isValid = false;

		changeDisplayAlertClass(".input-container:nth-child(3)", "block", " ");
	} else {
		changeDisplayAlertClass(".input-container:nth-child(3)", "none", " ");
	}

	if (message == 0) {
		isValid = false;

		changeDisplayAlertClass("#message", "block");
		changeInputErrorClass("#message", "add");
	} else {
		changeDisplayAlertClass("#message", "none");
		changeInputErrorClass("#message", "remove");
	}

	if (!consent) {
		isValid = false;

		changeDisplayAlertClass(".checkbox-input", "block", " ");
		changeInputErrorClass("#consent", "add");
	} else {
		changeDisplayAlertClass(".checkbox-input", "none", " ");
		changeInputErrorClass("#consent", "remove");
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

function changeInputErrorClass(selector, action) {
	document.querySelector(`${selector}`).classList[`${action}`]("input-error");
}

function changeDisplayAlertClass(selector, display, combinator = "+") {
	document.querySelector(
		`${selector} ${combinator} .form-alert`
	).style.display = `${display}`;
}
