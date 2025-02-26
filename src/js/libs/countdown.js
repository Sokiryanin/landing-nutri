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

// Обновление каждую секунду
setInterval(updateCountdown, 1000);
updateCountdown();