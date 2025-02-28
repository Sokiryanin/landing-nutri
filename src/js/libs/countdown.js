function updateCountdown() {
    const now = new Date();

    // Конец текущего дня (23:59:59)
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    // Разница во времени
    const timeRemaining = endOfDay - now;

    // Вычисляем часы, минуты, секунды
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    // Обновляем HTML
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

function getTomorrowDate() {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  let day = tomorrow.getDate();
  let months = {
    1: 'січня',
    2: 'лютого',
    3: 'березня',
    4: 'квітня',
    5: 'травня',
    6: 'червня',
    7: 'липня',
    8: 'серпня',
    9: 'вересня',
    10: 'жовтня',
    11: 'листопада',
    12: 'грудня',
  };

  let month = months[tomorrow.getMonth() + 1];

  return `${day} ${month}`;
}

document.getElementById(
  'start-date'
).textContent = `Старт ${getTomorrowDate()}`;

// Обновление каждую секунду
setInterval(updateCountdown, 1000);
updateCountdown();
getTomorrowDate();