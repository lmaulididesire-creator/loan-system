let total = 0;

function calculate() {
  let name = document.getElementById("name").value;
  let amount = parseFloat(document.getElementById("amount").value);
  let duration = parseInt(document.getElementById("duration").value);

  if (!name || !amount || !duration) {
    alert("Fill all fields first");
    return;
  }

  let rate = duration <= 1 ? 0.20 : duration <= 4 ? 0.25 : 0.30;
  total = amount + (amount * rate);

  document.getElementById("result").innerText =
    name + ", you will pay MK " + total;
}

function send() {
  let formData = new URLSearchParams();
  formData.append("name", document.getElementById("name").value);
  formData.append("phone", document.getElementById("phone").value);
  formData.append("amount", document.getElementById("amount").value);
  formData.append("duration", document.getElementById("duration").value);
  formData.append("total", total);
  formData.append("date", document.getElementById("date").value);

  fetch("https://script.google.com/macros/s/AKfycbw31oTNwor4zaQjNiuEvDGAHcG0H_e21eJtBzYGIGF6KyLGCI4G-qVTdW7uzzs2WLOZSA/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData.toString()
  })
  .then(res => res.text())
  .then(data => {
    if (data === "OK") {
      alert("Request sent successfully!");
    } else {
      alert("Server error: " + data);
    }
  })
  .catch(err => {
    alert("Error sending request");
  });
}
