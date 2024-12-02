import { allInfo } from "./saved-message.js";

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const nameText = document.getElementById("name-text");
const mailText = document.getElementById("mail-text");
const messageText = document.getElementById("message-text");

const btn = document.getElementById("submit");

btn.addEventListener("click", () => {
  const info = allInfo();
  nameText.textContent = info.name;
  mailText.textContent = info.mail;
  messageText.textContent = info.message;
});
