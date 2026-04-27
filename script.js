let total = 0;

function calculate() {
  let name = document.getElementById("name").value;
  let amount = parseFloat(document.getElementById("amount").value);
  let duration = parseInt(document.getElementById("duration").value);

  if (!name || !amount || !duration) {
    alert("Please fill all fields");
    return;
  }

  let rate;
  if (duration <= 1) {
    rate = 0.20;
  } else if (duration <= 4) {
    rate = 0.25;
  } else {
    rate = 0.30;
  }

  total = amount + (amount * rate);

  document.getElementById("result").innerText =
    name + ", you will pay MK " + total;
}

function send() {
  let name = document.getElementById("name").value;
  let amount = document.getElementById("amount").value;
  let duration = document.getElementById("duration").value;

  if (!total) {
    alert("Please check loan first");
    return;
  }

  const formData = new URLSearchParams();
  formData.append("name", name);
  formData.append("amount", amount);
  formData.append("duration", duration);
  formData.append("total", total);

  fetch("https://script.google.com/macros/s/AKfycbwdtiZD0Co2fPiffIglcGkyFRsUcDQKcIXgIlX9bxA4rRciGdO77MVrhjHDDFeQIwdv0A/exec", {
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
