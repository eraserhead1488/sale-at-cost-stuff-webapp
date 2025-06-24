
function goToScan() {
  const user = document.getElementById('username').value;
  if (!user) {
    alert('Выбери имя администратора');
    return;
  }
  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.remove('hidden');
}

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
  },
  {
    "name": "Adrenaline Rush Ягодный 0,449 л",
    "price": 110,
    "prefix": "0104600494694226"
  },
  {
    "name": "Aqua Minerale Без газа 1 л",
    "price": 60,
    "prefix": "0104600494601309"
  },
  {
    "name": "Aqua Minerale Вода б/газ 0,5 л",
    "price": 40,
    "prefix": "0104600494693335"
  },
  {
    "name": "Aqua Minerale Вода газ 0,5 л",
    "price": 40,
    "prefix": "0104600494693359"
  },
  {
    "name": "Burn Апельсин 0,449 л",
    "price": 105,
    "prefix": "0105061013963374"
  },
  {
    "name": "Burn Арбуз без сахара 0,449 л",
    "price": 105,
    "prefix": "0105060895745184"
  },
  {
    "name": "Burn Манго 0,449 л",
    "price": 105,
    "prefix": "0105060895740899"
  },
  {
    "name": "Burn Оригинальный 0,449 л",
    "price": 105,
    "prefix": "0105060608742172"
  },
  {
    "name": "Burn Персик Манго 0,449 л",
    "price": 105,
    "prefix": "0105060608748358"
  },
  {
    "name": "Burn Сочная энергия 0,449 л",
    "price": 105,
    "prefix": "0105060895745153"
  },
  {
    "name": "Burn Темная Энергия 0,449 л",
    "price": 105,
    "prefix": "0105060608742790"
  },
  {
    "name": "Burn Тропический микс 0,449 л",
    "price": 105,
    "prefix": "0105060608742707"
  },
  {
    "name": "Burn Цитрус без сахара 0,449 л",
    "price": 105,
    "prefix": "0105061013964012"
  },
  {
    "name": "Burn Яблоко киви 0,449 л",
    "price": 105,
    "prefix": "0105060608742110"
  },
  {
    "name": "Cyberwater Apple Kiwi 0,45 л",
    "price": 90,
    "prefix": "0104657781540070"
  },
  {
    "name": "Cyberwater Cyber Berry 0,45 л",
    "price": 90,
    "prefix": "0104657781540131"
  },
  {
    "name": "Cyberwater Juicy Mango 0,45 л",
    "price": 90,
    "prefix": "0104657781540094"
  },
  {
    "name": "Cyberwater Original 0,45 л",
    "price": 90,
    "prefix": "0104657781540070"
  },
  {
    "name": "E-On Black Power 0,45 л",
    "price": 70,
    "prefix": "0107640157156149"
  },
  {
    "name": "E-On Kiwi Blast 0,45 л",
    "price": 70,
    "prefix": "0107640157156200"
  },
  {
    "name": "E-On Lemongrass 0,45 л",
    "price": 70,
    "prefix": "0107640157156224"
  },
  {
    "name": "Fresh Bar Asian Dream 0,48 л",
    "price": 50,
    "prefix": "0107640157156668"
  },
  {
    "name": "Fresh Bar Citrus Ice 0,48 л",
    "price": 50,
    "prefix": "0107640157151717"
  },
  {
    "name": "Fresh Bar Coco Nutty 0,48 л",
    "price": 50,
    "prefix": "0107640157156491"
  },
  {
    "name": "Fresh Bar Magic Skills 0,48 л",
    "price": 50,
    "prefix": "0107640157154091"
  },
  {
    "name": "Fresh Bar Melonade Mojito 0,48 л",
    "price": 50,
    "prefix": "0107640157157689"
  },
  {
    "name": "Fresh Bar Merry Berry 0,48 л",
    "price": 50,
    "prefix": "0107640157155562"
  },
  {
    "name": "Fresh Bar Sparkling Boom 0,48 л",
    "price": 50,
    "prefix": "0107640157153056"
  },
  {
    "name": "Fresh Bar Tropic Topic 0,48 л",
    "price": 50,
    "prefix": "0107640157150123"
  },
  {
    "name": "HQD Energy Apple Juice 0,5 л",
    "price": 100,
    "prefix": "0104640273940076"
  },
  {
    "name": "HQD Energy Baza Blast 0,45 л",
    "price": 100,
    "prefix": "0104640273940427"
  },
  {
    "name": "HQD Energy Cherry Bomb 0,45 л",
    "price": 100,
    "prefix": "0104640273940052"
  },
  {
    "name": "HQD Energy Classic Power 0,45 л",
    "price": 100,
    "prefix": "0104640273940021"
  },
  {
    "name": "HQD Energy Frost Bite 0,45 л",
    "price": 100,
    "prefix": "0104640273940403"
  },
  {
    "name": "HQD Energy Golden Bears 0,45 л",
    "price": 100,
    "prefix": "0104640273940359"
  },
  {
    "name": "HQD Energy Mango Nectar 0,5 л",
    "price": 100,
    "prefix": "0104640273940090"
  },
  {
    "name": "HQD Energy Peach Nectarine 0,45 л",
    "price": 100,
    "prefix": "0104640273940083"
  },
  {
    "name": "HQD Energy Pink Lemonade 0,45 л",
    "price": 100,
    "prefix": "0104640273940380"
  },
  {
    "name": "HQD Energy Pinq 0,45 л",
    "price": 100,
    "prefix": "0104640273940625"
  },
  {
    "name": "HQD Energy Sour Skitlez 0,45 л",
    "price": 100,
    "prefix": "0104640273940366"
  },
  {
    "name": "HQD Energy Sparky Boom 0,45 л",
    "price": 100,
    "prefix": "0104640273940397"
  },
  {
    "name": "HQD Energy Tropic Punch 0,5 л",
    "price": 100,
    "prefix": "0104640273940014"
  },
  {
    "name": "HQD Energy Voltage 0,45 л",
    "price": 100,
    "prefix": "0104640273940434"
  },
  {
    "name": "Lipton Зеленый 0,5 л",
    "price": 65,
    "prefix": "0104600494600463"
  },
  {
    "name": "Lipton Лимон 0,5 л",
    "price": 65,
    "prefix": "0104600494600494"
  },
  {
    "name": "Lipton Малина 0,5 л",
    "price": 65,
    "prefix": "0104600494696862"
  },
  {
    "name": "Lipton Манго 0,5 л",
    "price": 65,
    "prefix": "0104600494687891"
  },
  {
    "name": "Lipton Персик 0,5 л",
    "price": 65,
    "prefix": "0104600494600524"
  },
  {
    "name": "Lit Energy Berry Coconut 0,45 л",
    "price": 90,
    "prefix": "0104680232930373"
  },
  {
    "name": "Lit Energy Blueberry 0,45 л",
    "price": 90,
    "prefix": "0104680232930120"
  },
  {
    "name": "Lit Energy Classic 0,45 л",
    "price": 90,
    "prefix": "0104680232930113"
  },
  {
    "name": "Lit Energy Cola 0,45 л",
    "price": 90,
    "prefix": "0104680232931035"
  },
  {
    "name": "Lit Energy Granat 0,45 л",
    "price": 90,
    "prefix": "0104680232930991"
  },
  {
    "name": "Lit Energy Mango Coconut 0,45 л",
    "price": 90,
    "prefix": "0104680232930038"
  },
  {
    "name": "Lit Energy Peach 0,45 л",
    "price": 90,
    "prefix": "0104680232930670"
  },
  {
    "name": "Lit Energy Strawberry Bubblegum 0,45 л",
    "price": 90,
    "prefix": "0104680232932148"
  },
  {
    "name": "Monster Energy Bad Apple 0,5 л",
    "price": 180,
    "prefix": "0105061013944830"
  },
  {
    "name": "Monster Energy Khaotic 0,5 л",
    "price": 180,
    "prefix": "0105060751211358"
  },
  {
    "name": "Monster Energy Mango Loco 0,33 л",
    "price": 140,
    "prefix": "0104897036692189"
  },
  {
    "name": "Monster Energy Mango Loco 0,5 л",
    "price": 180,
    "prefix": "0105060639121700"
  },
  {
    "name": "Monster Energy Pipeline Punch 0,33 л",
    "price": 140,
    "prefix": "0106974497110051"
  },
  {
    "name": "Monster Energy Ultra Paradise 0,33 л",
    "price": 140,
    "prefix": "0106974497110020"
  },
  {
    "name": "Red Bull Energy 0,35 л",
    "price": 165,
    "prefix": "0109002490206000"
  },
  {
    "name": "Red Bull Energy 0,473 л",
    "price": 200,
    "prefix": "0109002490210397"
  },
  {
    "name": "Red Bull original 0,25 л",
    "price": 120,
    "prefix": "0109002490100070"
  },
  {
    "name": "Red Bull The Summer Edition 0,25 л",
    "price": 120,
    "prefix": "0109002490278731"
  },
  {
    "name": "Rich Сок Апельсин 0,33 л",
    "price": 60,
    "prefix": "0104670155802765\n0104650075421024"
  },
  {
    "name": "Rich Сок Апельсин-манго 0,33 л",
    "price": 60,
    "prefix": "0104650075422144"
  },
  {
    "name": "Rich Сок Вишня 0,33 л",
    "price": 60,
    "prefix": "0104650075421048"
  },
  {
    "name": "Rich Сок Яблоко 0,33 л",
    "price": 60,
    "prefix": "0104650075421000"
  },
  {
    "name": "The Scandalist Energy Drink Adder Terror 0,5 л",
    "price": 100,
    "prefix": "0104687203127848\n0104627187857089"
  },
  {
    "name": "The Scandalist Energy Drink Geneve 0,5 л",
    "price": 100,
    "prefix": "0104687203127831"
  },
  {
    "name": "The Scandalist Geneve 1988 0,45 л",
    "price": 100,
    "prefix": "0104627187857126"
  },
  {
    "name": "The Scandalist Reactive Ex's Heart 0,45 л",
    "price": 100,
    "prefix": "0104627187857102"
  },
  {
    "name": "The Scandalist Reactive War Head 0,45 л",
    "price": 100,
    "prefix": "0104627187857096"
  },
  {
    "name": "Добрый Pulpy Ананас-Манго 0,45 л",
    "price": 70,
    "prefix": "0104650075420980"
  },
  {
    "name": "Добрый Pulpy Апельсин 0,45 л",
    "price": 70,
    "prefix": "0104607174577787"
  },
  {
    "name": "Добрый Pulpy Клубника-Банан 0,5 л",
    "price": 70,
    "prefix": "0104670155800822"
  },
  {
    "name": "Добрый Pulpy Тропический 0,5 л",
    "price": 70,
    "prefix": "0104607174579729"
  },
  {
    "name": "Добрый Апельсиновый 0,33 л",
    "price": 60,
    "prefix": "0104650075427958"
  },
  {
    "name": "Добрый Кола 0,3 л",
    "price": 60,
    "prefix": "0104610011501982"
  },
  {
    "name": "Добрый Кола 0,33 л",
    "price": 60,
    "prefix": "0104650075427934"
  },
  {
    "name": "Добрый Кола без сахара 0,33 л",
    "price": 60,
    "prefix": "0104650075429709"
  },
  {
    "name": "Добрый Кола Ваниль 0,33 л",
    "price": 60,
    "prefix": "0104610011501388"
  },
  {
    "name": "Добрый Кола Киви-виноград 0,33 л",
    "price": 60,
    "prefix": "0104610011503481"
  },
  {
    "name": "Добрый Кола Ледяной лимон 0,33 л",
    "price": 60,
    "prefix": "0104610011503467"
  },
  {
    "name": "Добрый Лайм Лимон 0,33 л",
    "price": 60,
    "prefix": "0104650075428306"
  },
  {
    "name": "Добрый Манго Маракуйя 0,33 л",
    "price": 60,
    "prefix": "0104610011502880"
  },
  {
    "name": "Святой Источник Клубника негазированный 0,5",
    "price": 40,
    "prefix": "0104603934000946"
  },
  {
    "name": "Святой Источник Лимон негазированный 0,5",
    "price": 40,
    "prefix": "0104603334001529"
  },
  {
    "name": "Святой Источник Персик негазированный 0,5",
    "price": 40,
    "prefix": "0104603934000854"
  }
];
let timerInterval;
let countdownTime;

function handleScan() {
  const code = document.getElementById("qrInput").value.trim();
  const user = document.getElementById("username").value.trim();
  if (!code || !user) return alert("Введите QR-код и выбери имя администратора");

  const matched = drinks.find(item => code.startsWith(item.prefix));
  document.getElementById("confirmBtn").classList.remove("hidden");
  document.getElementById("paymentSection").classList.add("hidden");
  document.getElementById("status").textContent = "";

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

function showPaymentInstructions() {
  const name = document.getElementById("itemName").textContent || document.getElementById("manualName").value.trim();
  const price = document.getElementById("itemPrice").textContent || "—";

  document.getElementById("payAmount").textContent = price;
  document.getElementById("payName").textContent = name;
  document.getElementById("paymentSection").classList.remove("hidden");

  // Запуск таймера
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
