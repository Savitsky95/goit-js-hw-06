const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');

  if (email === '' || password === '') {
    alert('Всі поля повинні бути заповнені!');
    return;
  }

  const formDataObj = {
    email,
    password,
  };

  console.log(formDataObj);

  form.reset();
});