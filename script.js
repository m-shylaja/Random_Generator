const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const notification = document.getElementById("notification");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]<>?/|";

function generatePassword() {
  const length = document.getElementById("length").value;
  const useUpper = document.getElementById("uppercase").checked;
  const useLower = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  let validChars = "";
  if (useUpper) validChars += uppercase;
  if (useLower) validChars += lowercase;
  if (useNumbers) validChars += numbers;
  if (useSymbols) validChars += symbols;

  if (validChars === "") {
    passwordField.value = "Please select at least one option!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * validChars.length);
    password += validChars[index];
  }

  passwordField.value = password;
}

function copyPassword() {
  const password = passwordField.value;
  if (!password) return;

  navigator.clipboard.writeText(password).then(() => {
    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
    }, 2000);
  });
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
