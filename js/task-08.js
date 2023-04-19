const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // перешкоджаємо стандартній поведінці форми

  const formData = new FormData(loginForm); // збираємо значення полів форми
  const user = Object.fromEntries(formData.entries()); // перетворюємо на об'єкт

  if (!user.email || !user.password) {
    alert('Усі поля повинні бути заповнені!'); // перевірка на наявність порожніх полів
  } else {
    console.log(user); // виводимо об'єкт в консоль
    loginForm.reset(); // очищуємо форму
  }
});
