
let drinks = [
  {
    "name": "Adrenaline Rush Game fuel 0,449 л",
    "price": 110,
    "prefix": "0104600494694172"
  },
  {
    "name": "Adrenaline Rush Zero sugar 0,449 л",
    "price": 110,
    "prefix": "0104600494666612"
  },
  {
    "name": "Adrenaline Rush Апельсин 0,449 л",
    "price": 110,
    "prefix": "0104600494694165"
  },
  {
    "name": "Adrenaline Rush Классический 0,449 л",
    "price": 110,
    "prefix": "0104600494694202"
  },
  {
    "name": "Adrenaline Rush Манго 0,449 л",
    "price": 110,
    "prefix": "0104600494667930"
  }
];

function handleScan() {
  const code = document.getElementById("qrInput").value.trim();
  const user = document.getElementById("username").value.trim();
  if (!code || !user) return alert("Введите QR-код и имя сотрудника");

  const matched = drinks.find(item => code.startsWith(item.prefix));
  document.getElementById("confirmBtn").classList.remove("hidden");

  if (matched) {
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

function confirmPurchase() {
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
  document.getElementById("qrInput").value = "";
  document.getElementById("itemName").textContent = "";
  document.getElementById("itemPrice").textContent = "";
}
