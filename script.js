let total = 0;

function calculate() {
  let name = document.getElementById("name").value;
  let amount = parseFloat(document.getElementById("amount").value);
  let duration = parseInt(document.getElementById("duration").value);

  if (!name || !amount || !duration) {
    alert("Fill all fields first");
    return;
  }

  let rate;
  if (duration <= 1) rate = 0.20;
  else if (duration <= 4) rate = 0.25;
  else rate = 0.30;

  total = amount + (amount * rate);

  document.getElementById("result").innerText =
    name + ", you will pay MK " + total;
}

function send() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let amount = document.getElementById("amount").value;
  let duration = document.getElementById("duration").value;
  let date = document.getElementById("date").value;

  if (!name || !phone || !amount || !duration || !date) {
    alert("Fill all fields");
    return;
  }

  if (!total) {
    alert("Please check loan first");
    return;
  }

  const formData = new URLSearchParams();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("amount", amount);
  formData.append("duration", duration);
  formData.append("total", total);
  formData.append("date", date);

  fetch("https://script.google.com/macros/s/AKfycbyvYkI3TgFwr6MJ1CBeaRWZVU7Nw8272FoFsD3TiuFtwf_cX9zLaksaKLeamZAca1ZFug/exec", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    alert("Request sent successfully!");
  })
  .catch(err => {
    alert("Error sending request");
  });
}
