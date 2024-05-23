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

		toggleDisplayAlertClass("#first-name", "block");
		toggleInputErrorClass("#first-name", "add");
	} else {
		toggleDisplayAlertClass("#first-name", "none");
		toggleInputErrorClass("#first-name", "remove");
	}

	if (lastName == 0) {
		isValid = false;

		toggleDisplayAlertClass("#last-name", "block");
		toggleInputErrorClass("#last-name", "add");
	} else {
		toggleDisplayAlertClass("#last-name", "none");
		toggleInputErrorClass("#last-name", "remove");
	}

	if (!emailValidation(email)) {
		isValid = false;

		toggleDisplayAlertClass("#email", "block");
		toggleInputErrorClass("#email", "add");
	} else {
		toggleDisplayAlertClass("#email", "none");
		toggleInputErrorClass("#email", "remove");
	}

	if (queryType === null) {
		isValid = false;

		toggleDisplayAlertClass(".input-container:nth-child(3)", "block", " ");
	} else {
		toggleDisplayAlertClass(".input-container:nth-child(3)", "none", " ");
	}

	if (message == 0) {
		isValid = false;

		toggleDisplayAlertClass("#message", "block");
		toggleInputErrorClass("#message", "add");
	} else {
		toggleDisplayAlertClass("#message", "none");
		toggleInputErrorClass("#message", "remove");
	}

	if (!consent) {
		isValid = false;

		toggleDisplayAlertClass(".checkbox-input", "block", " ");
		toggleInputErrorClass("#consent", "add");
	} else {
		toggleDisplayAlertClass(".checkbox-input", "none", " ");
		toggleInputErrorClass("#consent", "remove");
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

function toggleInputErrorClass(selector, action) {
	document.querySelector(`${selector}`).classList[`${action}`]("input-error");
}

function toggleDisplayAlertClass(selector, display, combinator = "+") {
	document.querySelector(
		`${selector} ${combinator} .form-alert`
	).style.display = `${display}`;
}
