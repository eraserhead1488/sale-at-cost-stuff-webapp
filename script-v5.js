
function toggleManualMode() {
  const isManual = document.getElementById('manualToggle').checked;
  document.getElementById('qrBlock').classList.toggle('hidden', isManual);
  document.getElementById('manualProductFields').classList.toggle('hidden', !isManual);
  document.getElementById('manualComment').classList.add('hidden');
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
    "name": "Adrenaline Rush Game fuel 0,449 л",
    "price": 100,
    "prefix": "104600494694172.0",
    "ean13": "4600494694172"
  },
  {
    "name": "Adrenaline Rush Zero sugar 0,449 л",
    "price": 100,
    "prefix": "104600494666612.0",
    "ean13": "4600494666612"
  },
  {
    "name": "Adrenaline Rush Апельсин 0,449 л",
    "price": 100,
    "prefix": "104600494694165.0",
    "ean13": "4600494694165"
  },
  {
    "name": "Adrenaline Rush Классический 0,449 л",
    "price": 110,
    "prefix": "104600494694202.0",
    "ean13": "4600494694202"
  },
  {
    "name": "Adrenaline Rush Манго 0,449 л",
    "price": 100,
    "prefix": "104600494667930.0",
    "ean13": "4600494667930"
  },
  {
    "name": "Adrenaline Rush Ягодный 0,449 л",
    "price": 100,
    "prefix": "104600494694226.0",
    "ean13": "4600494694226"
  },
  {
    "name": "Aqua Minerale Без газа 1 л",
    "price": 60,
    "prefix": "104600494601309.0",
    "ean13": "4600494601309"
  },
  {
    "name": "Aqua Minerale Вода б/газ 0,5 л",
    "price": 40,
    "prefix": "104600494693335.0",
    "ean13": "4600494693335"
  },
  {
    "name": "Aqua Minerale Вода газ 0,5 л",
    "price": 40,
    "prefix": "104600494693359.0",
    "ean13": "4600494693359"
  },
  {
    "name": "Burn Апельсин 0,449 л",
    "price": 100,
    "prefix": "105061013963374.0",
    "ean13": "5061013963374"
  },
  {
    "name": "Burn Арбуз без сахара 0,449 л",
    "price": 100,
    "prefix": "105060895745184.0",
    "ean13": "5060895745184"
  },
  {
    "name": "Burn Манго 0,449 л",
    "price": 100,
    "prefix": "105060895740899.0",
    "ean13": "5060895740899"
  },
  {
    "name": "Burn Оригинальный 0,449 л",
    "price": 100,
    "prefix": "105060608742172.0",
    "ean13": "5060608742172"
  },
  {
    "name": "Burn Персик Манго 0,449 л",
    "price": 100,
    "prefix": "105060608748358.0",
    "ean13": "5060608748358"
  },
  {
    "name": "Burn Сочная энергия 0,449 л",
    "price": 100,
    "prefix": "105060895745153.0",
    "ean13": "5060895745153"
  },
  {
    "name": "Burn Темная Энергия 0,449 л",
    "price": 100,
    "prefix": "105060608742790.0",
    "ean13": "5060608742790"
  },
  {
    "name": "Burn Тропический микс 0,449 л",
    "price": 100,
    "prefix": "105060608742707.0",
    "ean13": "5060608742707"
  },
  {
    "name": "Burn Цитрус без сахара 0,449 л",
    "price": 105,
    "prefix": "105061013964012.0",
    "ean13": "5061013964012"
  },
  {
    "name": "Burn Яблоко киви 0,449 л",
    "price": 100,
    "prefix": "105060608742110.0",
    "ean13": "5060608742110"
  },
  {
    "name": "Cyberwater Apple Kiwi 0,45 л",
    "price": 90,
    "prefix": "104657781540070.0",
    "ean13": "4657781540070"
  },
  {
    "name": "Cyberwater Cyber Berry 0,45 л",
    "price": 90,
    "prefix": "104657781540131.0",
    "ean13": "4657781540131"
  },
  {
    "name": "Cyberwater Juicy Mango 0,45 л",
    "price": 90,
    "prefix": "104657781540094.0",
    "ean13": "4657781540094"
  },
  {
    "name": "Cyberwater Original 0,45 л",
    "price": 90,
    "prefix": "104657781540070.0",
    "ean13": "4657781540070"
  },
  {
    "name": "E-On Black Power 0,45 л",
    "price": 70,
    "prefix": "107640157156149.0",
    "ean13": "7640157156149"
  },
  {
    "name": "E-On Kiwi Blast 0,45 л",
    "price": 70,
    "prefix": "107640157156200.0",
    "ean13": "7640157156200"
  },
  {
    "name": "E-On Lemongrass 0,45 л",
    "price": 70,
    "prefix": "107640157156224.0",
    "ean13": "7640157156224"
  },
  {
    "name": "Fresh Bar Asian Dream 0,48 л",
    "price": 50,
    "prefix": "107640157156668.0",
    "ean13": "7640157156668"
  },
  {
    "name": "Fresh Bar Citrus Ice 0,48 л",
    "price": 50,
    "prefix": "107640157151717.0",
    "ean13": "7640157151717"
  },
  {
    "name": "Fresh Bar Coco Nutty 0,48 л",
    "price": 50,
    "prefix": "107640157156491.0",
    "ean13": "7640157156491"
  },
  {
    "name": "Fresh Bar Magic Skills 0,48 л",
    "price": 50,
    "prefix": "107640157154091.0",
    "ean13": "7640157154091"
  },
  {
    "name": "Fresh Bar Melonade Mojito 0,48 л",
    "price": 50,
    "prefix": "107640157157689.0",
    "ean13": "7640157157689"
  },
  {
    "name": "Fresh Bar Merry Berry 0,48 л",
    "price": 50,
    "prefix": "107640157155562.0",
    "ean13": "7640157155562"
  },
  {
    "name": "Fresh Bar Sparkling Boom 0,48 л",
    "price": 50,
    "prefix": "107640157153056.0",
    "ean13": "7640157153056"
  },
  {
    "name": "Fresh Bar Tropic Topic 0,48 л",
    "price": 50,
    "prefix": "107640157150123.0",
    "ean13": "7640157150123"
  },
  {
    "name": "HQD Energy Apple Juice 0,5 л",
    "price": 100,
    "prefix": "104640273940076.0",
    "ean13": "4640273940076"
  },
  {
    "name": "HQD Energy Baza Blast 0,45 л",
    "price": 100,
    "prefix": "104640273940427.0",
    "ean13": "4640273940427"
  },
  {
    "name": "HQD Energy Cherry Bomb 0,45 л",
    "price": 100,
    "prefix": "104640273940052.0",
    "ean13": "4640273940052"
  },
  {
    "name": "HQD Energy Classic Power 0,45 л",
    "price": 100,
    "prefix": "104640273940021.0",
    "ean13": "4640273940021"
  },
  {
    "name": "HQD Energy Frost Bite 0,45 л",
    "price": 100,
    "prefix": "104640273940403.0",
    "ean13": "4640273940403"
  },
  {
    "name": "HQD Energy Golden Bears 0,45 л",
    "price": 100,
    "prefix": "104640273940359.0",
    "ean13": "4640273940359"
  },
  {
    "name": "HQD Energy Mango Nectar 0,5 л",
    "price": 100,
    "prefix": "104640273940090.0",
    "ean13": "4640273940090"
  },
  {
    "name": "HQD Energy Peach Nectarine 0,45 л",
    "price": 100,
    "prefix": "104640273940083.0",
    "ean13": "4640273940083"
  },
  {
    "name": "HQD Energy Pink Lemonade 0,45 л",
    "price": 100,
    "prefix": "104640273940380.0",
    "ean13": "4640273940380"
  },
  {
    "name": "HQD Energy Pinq 0,45 л",
    "price": 100,
    "prefix": "104640273940625.0",
    "ean13": "4640273940625"
  },
  {
    "name": "HQD Energy Sour Skitlez 0,45 л",
    "price": 100,
    "prefix": "104640273940366.0",
    "ean13": "4640273940366"
  },
  {
    "name": "HQD Energy Sparky Boom 0,45 л",
    "price": 100,
    "prefix": "104640273940397.0",
    "ean13": "4640273940397"
  },
  {
    "name": "HQD Energy Tropic Punch 0,5 л",
    "price": 100,
    "prefix": "104640273940014.0",
    "ean13": "4640273940014"
  },
  {
    "name": "HQD Energy Voltage 0,45 л",
    "price": 100,
    "prefix": "104640273940434.0",
    "ean13": "4640273940434"
  },
  {
    "name": "Lipton Зеленый 0,5 л",
    "price": 60,
    "prefix": "104600494600463.0",
    "ean13": "4600494600463"
  },
  {
    "name": "Lipton Лимон 0,5 л",
    "price": 65,
    "prefix": "104600494600494.0",
    "ean13": "4600494600494"
  },
  {
    "name": "Lipton Малина 0,5 л",
    "price": 60,
    "prefix": "104600494696862.0",
    "ean13": "4600494696862"
  },
  {
    "name": "Lipton Манго 0,5 л",
    "price": 60,
    "prefix": "104600494687891.0",
    "ean13": "4600494687891"
  },
  {
    "name": "Lipton Персик 0,5 л",
    "price": 65,
    "prefix": "104600494600524.0",
    "ean13": "4600494600524"
  },
  {
    "name": "Lit Energy Berry Coconut 0,45 л",
    "price": 90,
    "prefix": "104680232930373.0",
    "ean13": "4680232930373"
  },
  {
    "name": "Lit Energy Blueberry 0,45 л",
    "price": 90,
    "prefix": "104680232930120.0",
    "ean13": "4680232930120"
  },
  {
    "name": "Lit Energy Classic 0,45 л",
    "price": 90,
    "prefix": "104680232930113.0",
    "ean13": "4680232930113"
  },
  {
    "name": "Lit Energy Cola 0,45 л",
    "price": 90,
    "prefix": "104680232931035.0",
    "ean13": "4680232931035"
  },
  {
    "name": "Lit Energy Granat 0,45 л",
    "price": 90,
    "prefix": "104680232930991.0",
    "ean13": "4680232930991"
  },
  {
    "name": "Lit Energy Mango Coconut 0,45 л",
    "price": 90,
    "prefix": "104680232930038.0",
    "ean13": "4680232930038"
  },
  {
    "name": "Lit Energy Peach 0,45 л",
    "price": 90,
    "prefix": "104680232930670.0",
    "ean13": "4680232930670"
  },
  {
    "name": "Lit Energy Strawberry Bubblegum 0,45 л",
    "price": 90,
    "prefix": "104680232932148.0",
    "ean13": "4680232932148"
  },
  {
    "name": "Lit Energy Лимонад Blueberry Donut 0,33 л",
    "price": 60,
    "prefix": "104680232931080.0",
    "ean13": "4680232931080"
  },
  {
    "name": "Lit Energy Лимонад Feijoa 0,33 л",
    "price": 60,
    "prefix": "104680232932100.0",
    "ean13": "4680232932100"
  },
  {
    "name": "Monster Energy Bad Apple 0,5 л",
    "price": 180,
    "prefix": "105061013944830.0",
    "ean13": "5061013944830"
  },
  {
    "name": "Monster Energy Khaotic 0,5 л",
    "price": 180,
    "prefix": "105060751211358.0",
    "ean13": "5060751211358"
  },
  {
    "name": "Monster Energy Mango Loco 0,33 л",
    "price": 140,
    "prefix": "104897036692189.0",
    "ean13": "4897036692189"
  },
  {
    "name": "Monster Energy Mango Loco 0,5 л",
    "price": 180,
    "prefix": "105060639121700.0",
    "ean13": "5060639121700"
  },
  {
    "name": "Monster Energy Nitro Cosmic Peach 0,5 л",
    "price": 180,
    "prefix": "105060947546844.0",
    "ean13": "5060947546844"
  },
  {
    "name": "Monster Energy Pipeline Punch 0,33 л",
    "price": 140,
    "prefix": "106974497110051.0",
    "ean13": "6974497110051"
  },
  {
    "name": "Monster Energy Ultra Paradise 0,33 л",
    "price": 140,
    "prefix": "106974497110020.0",
    "ean13": "6974497110020"
  },
  {
    "name": "Red Bull Energy 0,35 л",
    "price": 160,
    "prefix": "109002490206000.0",
    "ean13": "9002490206000"
  },
  {
    "name": "Red Bull Energy 0,473 л",
    "price": 200,
    "prefix": "109002490210397.0",
    "ean13": "9002490210397"
  },
  {
    "name": "Red Bull original 0,25 л",
    "price": 120,
    "prefix": "109002490100070.0",
    "ean13": "9002490100070"
  },
  {
    "name": "Red Bull The Summer Edition 0,25 л",
    "price": 120,
    "prefix": "109002490278731.0",
    "ean13": "9002490278731"
  },
  {
    "name": "Rich Сок Апельсин 0,33 л",
    "price": 60,
    "prefix": "104650075421024.0",
    "ean13": "4650075421024"
  },
  {
    "name": "Rich Сок Апельсин-манго 0,33 л",
    "price": 60,
    "prefix": "104650075422144.0",
    "ean13": "4650075422144"
  },
  {
    "name": "Rich Сок Вишня 0,33 л",
    "price": 60,
    "prefix": "104650075421048.0",
    "ean13": "4650075421048"
  },
  {
    "name": "Rich Сок Яблоко 0,33 л",
    "price": 60,
    "prefix": "104650075421000.0",
    "ean13": "4650075421000"
  },
  {
    "name": "The Scandalist Energy Drink Adder Terror 0,5 л",
    "price": 100,
    "prefix": "104687203127848.0",
    "ean13": "4687203127848"
  },
  {
    "name": "The Scandalist Energy Drink Geneve 0,5 л",
    "price": 100,
    "prefix": "104687203127831.0",
    "ean13": "4687203127831"
  },
  {
    "name": "The Scandalist Geneve 1988 0,45 л",
    "price": 100,
    "prefix": "104627187857126.0",
    "ean13": "4627187857126"
  },
  {
    "name": "The Scandalist Reactive Ex's Heart 0,45 л",
    "price": 100,
    "prefix": "104627187857102.0",
    "ean13": "4627187857102"
  },
  {
    "name": "The Scandalist Reactive War Head 0,45 л",
    "price": 100,
    "prefix": "104627187857096.0",
    "ean13": "4627187857096"
  },
  {
    "name": "Добрый Pulpy Ананас-Манго 0,45 л",
    "price": 70,
    "prefix": "104650075420980.0",
    "ean13": "4650075420980"
  },
  {
    "name": "Добрый Pulpy Апельсин 0,45 л",
    "price": 70,
    "prefix": "104607174577787.0",
    "ean13": "4607174577787"
  },
  {
    "name": "Добрый Pulpy Клубника-Банан 0,5 л",
    "price": 70,
    "prefix": "104670155800822.0",
    "ean13": "4670155800822"
  },
  {
    "name": "Добрый Pulpy Тропический 0,5 л",
    "price": 70,
    "prefix": "104607174579729.0",
    "ean13": "4607174579729"
  },
  {
    "name": "Добрый Апельсиновый 0,33 л",
    "price": 60,
    "prefix": "104650075427958.0",
    "ean13": "4650075427958"
  },
  {
    "name": "Добрый Кола 0,33 л",
    "price": 60,
    "prefix": "104650075427934.0",
    "ean13": "4650075427934"
  },
  {
    "name": "Добрый Кола без сахара 0,33 л",
    "price": 60,
    "prefix": "104650075429709.0",
    "ean13": "4650075429709"
  },
  {
    "name": "Добрый Кола Ваниль 0,33 л",
    "price": 60,
    "prefix": "104610011501388.0",
    "ean13": "4610011501388"
  },
  {
    "name": "Добрый Кола Киви-виноград 0,33 л",
    "price": 60,
    "prefix": "104610011503481.0",
    "ean13": "4610011503481"
  },
  {
    "name": "Добрый Кола Ледяной лимон 0,33 л",
    "price": 60,
    "prefix": "104610011503467.0",
    "ean13": "4610011503467"
  },
  {
    "name": "Добрый Лайм Лимон 0,33 л",
    "price": 60,
    "prefix": "104650075428306.0",
    "ean13": "4650075428306"
  },
  {
    "name": "Добрый Манго Маракуйя 0,33 л",
    "price": 60,
    "prefix": "104610011502880.0",
    "ean13": "4610011502880"
  },
  {
    "name": "Святой Источник Клубника негазированный 0,5",
    "price": 40,
    "prefix": "104603934000946.0",
    "ean13": "4603934000946"
  },
  {
    "name": "Святой Источник Лимон негазированный 0,5",
    "price": 40,
    "prefix": "104603334001529.0",
    "ean13": "4603334001529"
  },
  {
    "name": "Святой Источник Персик негазированный 0,5",
    "price": 40,
    "prefix": "104603934000854.0",
    "ean13": "4603934000854"
  },
  {
    "name": "Rich Нектар Апельсин 0,33 л",
    "price": 60,
    "prefix": "104670155802765.0",
    "ean13": "4670155802765"
  },
  {
    "name": "The Scandalist Energy Drink Adder Terror 0,45 л",
    "price": 100,
    "prefix": "104627187857089.0",
    "ean13": "4627187857089"
  },
  {
    "name": "The Scandalist Energy Drink Geneve 0,45 л",
    "price": 100,
    "prefix": "104627187857119.0",
    "ean13": "4627187857119"
  },
  {
    "name": "Maltesers",
    "price": 85,
    "prefix": "",
    "ean13": "5000159555715"
  },
  {
    "name": "KitKat",
    "price": 70,
    "prefix": "",
    "ean13": "8690632059150"
  },
  {
    "name": "KitKat white",
    "price": 75,
    "prefix": "",
    "ean13": "7613037251678"
  },
  {
    "name": "Панкейк малина",
    "price": 70,
    "prefix": "",
    "ean13": "4610169563412"
  },
  {
    "name": "Панкейк шоколад",
    "price": 70,
    "prefix": "",
    "ean13": "4610169563399"
  },
  {
    "name": "Snickers лесной орех",
    "price": 80,
    "prefix": "",
    "ean13": "5000159439480"
  },
  {
    "name": "Snickers",
    "price": 80,
    "prefix": "",
    "ean13": "4660085515163"
  },
  {
    "name": "Snickers криспи",
    "price": 70,
    "prefix": "",
    "ean13": "4607065735395"
  },
  {
    "name": "Babyfox",
    "price": 50,
    "prefix": "",
    "ean13": "4690329014077"
  },
  {
    "name": "Nuts",
    "price": 65,
    "prefix": "",
    "ean13": "46025418"
  },
  {
    "name": "Mars",
    "price": 75,
    "prefix": "",
    "ean13": "4607065001490"
  },
  {
    "name": "Nesquik",
    "price": 55,
    "prefix": "",
    "ean13": "8690632049168"
  }
];
let timerInterval;
let countdownTime;

function handleScan() {
  const isManual = document.getElementById("manualToggle").checked;
  const user = document.getElementById("username").value.trim();
  let matched = null;

  if (isManual) {
    const ean = document.getElementById("manualEan").value.trim();
    matched = drinks.find(item => item.ean13 === ean);
  } else {
    const code = document.getElementById("qrInput").value.trim();
    if (!code || !user) {
      alert("Введите QR-код и выбери имя администратора");
      return;
    }
    matched = drinks.find(item => code.startsWith(item.prefix));
    localStorage.setItem("lastCode", code);
  }

  document.getElementById("confirmBtn").classList.remove("hidden");
  document.getElementById("paymentSection").classList.add("hidden");
  document.getElementById("manualComment").classList.add("hidden");
  document.getElementById("status").textContent = "";

  if (matched) {
    document.getElementById("itemName").textContent = matched.name;
    document.getElementById("itemPrice").textContent = matched.price;
    document.getElementById("result").classList.remove("hidden");
  } else {
    document.getElementById("itemName").textContent = "";
    document.getElementById("itemPrice").textContent = "";
    document.getElementById("result").classList.add("hidden");
    document.getElementById("manualComment").classList.remove("hidden");
  }
}

function showPaymentInstructions() {
  const name = document.getElementById("itemName").textContent;
  const price = document.getElementById("itemPrice").textContent;
  const comment = document.getElementById("manualCommentText").value.trim();

  document.getElementById("payName").textContent = name || comment || "неопределённый товар";
  document.getElementById("payAmount").textContent = price || "половине полной цены";
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
  const code = localStorage.getItem("lastCode") || "—";
  const user = document.getElementById("username").value.trim();
  const name = document.getElementById("itemName").textContent || document.getElementById("manualCommentText").value.trim();
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
  document.getElementById("manualEan").value = "";
  document.getElementById("manualCommentText").value = "";
  document.getElementById("itemName").textContent = "";
  document.getElementById("itemPrice").textContent = "";
  clearInterval(timerInterval);
}
