export function allInfo() {
  const name = document.getElementById("name");
  const mail = document.getElementById("mail");
  const message = document.getElementById("message");

  return {
    name: name.value,
    mail: mail.value,
    message: message.value,
  };
}
