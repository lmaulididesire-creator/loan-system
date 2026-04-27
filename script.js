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
  let data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    amount: document.getElementById("amount").value,
    duration: document.getElementById("duration").value,
    total: total,
    date: document.getElementById("date").value
  };

  if (!data.name || !data.phone || !data.amount || !data.duration || !data.date) {
    alert("Fill all fields");
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbztGljfitknGcvJlWpwRalNj1F0korOPNxEqwA8Yvx4MvjsbrPI3Pfi59Jcd5AaspHyTw/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(data => {
    alert("Request sent successfully!");
  })
  .catch(() => {
    alert("Error sending request");
  });
}
