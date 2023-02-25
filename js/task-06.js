const inputPass = document.querySelector("#validation-input");

const symbols = (event) => {
	if (event.currentTarget.value.length === Number(inputPass.dataset.length)) {
		inputPass.classList.remove("invalid");
		inputPass.classList.add("valid");
	} else {
		inputPass.classList.remove("valid");
		inputPass.classList.add("invalid");
	}
};
inputPass.addEventListener("blur", symbols);
