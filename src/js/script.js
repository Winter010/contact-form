const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

const firstNameInput = document.getElementById("first-name");
const firstNameHint = document.querySelector("#first-name + .input-hint");

const lastNameInput = document.getElementById("last-name");
const lastNameHint = document.querySelector("#last-name + .input-hint");

const emailInput = document.getElementById("email");
const emailHint = document.querySelector("#email + .input-hint");

const messageInput = document.getElementById("message");
const messageHint = document.querySelector("#message + .input-hint");

const consentInput = document.getElementById("consent");
const consentHint = document.querySelector(".checkbox-input .input-hint");

const queryTypeHint = document.querySelector(
	".input-container:nth-child(3) .input-hint"
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

		addError(firstNameInput, firstNameHint);
	} else {
		removeError(firstNameInput, firstNameHint);
	}

	if (lastName.length === 0) {
		isValid = false;

		addError(lastNameInput, lastNameHint);
	} else {
		removeError(lastNameInput, lastNameHint);
	}

	if (!emailValidation(email)) {
		isValid = false;

		addError(emailInput, emailHint);
	} else {
		removeError(emailInput, emailHint);
	}

	if (queryType === null) {
		isValid = false;

		addError(null, queryTypeHint);
	} else {
		removeError(null, queryTypeHint);
	}

	if (message.length === 0) {
		isValid = false;

		addError(messageInput, messageHint);
	} else {
		removeError(messageInput, messageHint);
	}

	if (!consent) {
		isValid = false;

		addError(consentInput, consentHint);
	} else {
		removeError(consentInput, consentHint);
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
function addError(input, hint) {
	input?.classList.add("input-error");
	hint.style.display = "block";
}

function removeError(input, hint) {
	input?.classList.remove("input-error");
	hint.style.display = "none";
}
