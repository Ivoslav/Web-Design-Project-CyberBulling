// Вземаме референция към бутона за смяна на тема
const themeButton = document.getElementById('toggle-theme');

// Добавяме слушател за събитие при клик върху бутона
themeButton.addEventListener('click', () => {
  // Превключваме класа "dark-mode" към <body>, за да сменим темата
  document.body.classList.toggle('dark-mode');
  
  // Променяме текста на бутона в зависимост от текущата тема
  themeButton.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '🌞';
});

// Вземаме референция към контактната форма и добавяме слушател за събитие "submit"
document.getElementById('contact-form').addEventListener('submit', function (e) {
  // Предотвратяваме изпращането на формата, за да извършим валидация
  e.preventDefault();

  // Вземаме стойностите от полетата на формата
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Променливи за следене на валидност и грешки
  let isValid = true;
  let errorMessage = "";

  // Проверка дали полето "Име" е попълнено
  if (name === "") {
    isValid = false;
    errorMessage += "Моля, въведете вашето име.\n";
  }

  // Проверка дали полето "Имейл" е попълнено и дали съдържа валиден адрес
  if (email === "") {
    isValid = false;
    errorMessage += "Моля, въведете вашия имейл.\n";
  } else if (!validateEmail(email)) {
    isValid = false;
    errorMessage += "Моля, въведете валиден имейл адрес.\n";
  }

  // Проверка дали полето "Тема" е попълнено
  if (subject === "") {
    isValid = false;
    errorMessage += "Моля, въведете тема на съобщението.\n";
  }

  // Проверка дали полето "Съобщение" е попълнено
  if (message === "") {
    isValid = false;
    errorMessage += "Моля, въведете съобщение.\n";
  }

  // Ако има грешки, показваме съобщение с всички грешки
  if (!isValid) {
    alert(errorMessage);
  } else {
    // Ако няма грешки, показваме съобщение за успешно изпращане
    alert("Формата е изпратена успешно!");
  }
});

// Функция за проверка на валидността на имейл адрес
function validateEmail(email) {
  // Регулярен израз за валидиране на стандартен формат за имейл
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email); // Връща true, ако имейлът е валиден
}
