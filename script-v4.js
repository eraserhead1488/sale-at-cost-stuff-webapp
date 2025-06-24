
function toggleManualMode() {
  const isManual = document.getElementById('manualToggle').checked;
  document.getElementById('qrBlock').classList.toggle('hidden', isManual);
  document.getElementById('manualProductFields').classList.toggle('hidden', !isManual);
}

function goToScan() {
  const user = document.getElementById("username").value;
  if (!user) {
    alert("Выбери имя администратора");
    return;
  }
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

let drinks = [
  {
    "name": "Burn Темная Энергия 0,449 л",
    "price": 105,
    "prefix": "0105060608742790"
  },
  {
    "name": "Adrenaline Rush Классический",
    "price": 110,
    "prefix": "0104600494694202"
  }
];
let timerInterval;
let countdownTime;

function handleScan() {
  const isManual = document.getElementById("manualToggle").checked;
  const user = document.getElementById("username").value.trim();
  const code = isManual ? "manual" : document.getElementById("qrInput").value.trim();

  if (!user || (!isManual && !code)) {
    alert("Заполни все обязательные поля");
    return;
  }

  const matched = drinks.find(item => code.startsWith(item.prefix));
  document.getElementById("confirmBtn").classList.remove("hidden");
  document.getElementById("paymentSection").classList.add("hidden");
  document.getElementById("status").textContent = "";

  if (!isManual && matched) {
    document.getElementById("itemName").textContent = matched.name;
    document.getElementById("itemPrice").textContent = matched.price;
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("manualInput").classList.add("hidden");
  } else {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("manualInput").classList.remove("hidden");
  }

  localStorage.setItem("lastCode", code);
}

function showPaymentInstructions() {
  const name = document.getElementById("itemName").textContent || document.getElementById("manualName").value.trim();
  const price = document.getElementById("itemPrice").textContent || "—";

  document.getElementById("payAmount").textContent = price;
  document.getElementById("payName").textContent = name;
  document.getElementById("paymentSection").classList.remove("hidden");

  countdownTime = 600;
  updateCountdown();
  clearInterval(timerInterval);
  timerInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const countdownElem = document.getElementById("countdown");
  if (countdownTime <= 0) {
    countdownElem.textContent = "Время истекло.";
    document.getElementById("doneBtn").disabled = true;
    clearInterval(timerInterval);
  } else {
    const min = Math.floor(countdownTime / 60);
    const sec = countdownTime % 60;
    countdownElem.textContent = "Осталось: " + min + "м " + String(sec).padStart(2, '0') + "с";
    countdownTime--;
  }
}

function confirmPayment() {
  const code = localStorage.getItem("lastCode");
  const user = document.getElementById("username").value.trim();
  const name = document.getElementById("itemName").textContent || document.getElementById("manualName").value.trim();
  const ean = document.getElementById("manualEan").value.trim() || "—";

  const now = new Date().toLocaleString("ru-RU");
  const entry = { time: now, user, code, name, ean };

  const history = JSON.parse(localStorage.getItem("purchaseLog") || "[]");
  history.push(entry);
  localStorage.setItem("purchaseLog", JSON.stringify(history));

  document.getElementById("status").textContent = "Покупка сохранена!";
  document.getElementById("confirmBtn").classList.add("hidden");
  document.getElementById("paymentSection").classList.add("hidden");
  document.getElementById("qrInput").value = "";
  document.getElementById("itemName").textContent = "";
  document.getElementById("itemPrice").textContent = "";
  clearInterval(timerInterval);
}
